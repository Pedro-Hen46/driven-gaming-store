import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { ContainerLogin } from "./LoginStyles";

import axios from 'axios';
import UserContext from '../../Context/userContext';
import Logo from "../../lib/images/Login-Driven.png";

export default function LoginPage() {
  const navigate = useNavigate();

  const { setToken, setName } = useContext(UserContext);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  function login(event) {
    event.preventDefault();
    const body = {
      email,
      password
    };
    setLoading(true);

    const promise = axios.post("https://driven-gaming-store-fullstack.herokuapp.com/login",
      body);
    promise.then((res) => {

      const config = {
        headers: {
          Authorization: `Bearer ${res.data.token}`,
        },
        userControl: {
          isLogged: true
        }
      };

      setToken({ ...res.data, config });
      setName(res.data)
      localStorage.setItem("user", JSON.stringify({ ...res.data, config }));
      setLoading(false);
      navigate("/");
    })

    promise.catch(() => {
      setLoading(false);
      alert("Falha de Autenticação, tente novamente.");
    }
    );
  }

  return (
    <ContainerLogin>
      <img src={Logo} alt="Logo Driven Gaming Store" />

      <form onSubmit={login}>
        <input disabled={loading ? true : false} type="email" placeholder="Digite seu e-mail" onChange={e => setEmail(e.target.value)}></input>
        <input disabled={loading ? true : false} type="password" placeholder="Digite a sua senha" onChange={e => setPassword(e.target.value)}></input>
        <button>{loading ? "" : "ENTRAR"}</button>
      </form>

      <span onClick={() => navigate("/register")}>Não tem conta? Cadastre-se agora!</span>
    </ContainerLogin>
  );
}

