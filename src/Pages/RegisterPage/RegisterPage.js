import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

import { ContainerRegister } from "./RegisterStyles";
import Logo from "../../lib/images/mestreYodaHappy.png";
import LogoFail from "../../lib/images/mestreYodaSad.png";

export default function RegisterPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [name, setName] = useState();
  const [loading, setLoading] = useState(false);
  const [yoda, setYoda] = useState(true);

  function registerAcount(event) {
    event.preventDefault();
    const body = {
      email,
      password,
      name,
    };

    if (password === confirmPassword) {
      setLoading(true);

      const promise = axios.post(
        "https://driven-gaming-store-fullstack.herokuapp.com/sign-up",
        body
      );
      promise.then((res) => {
        console.log(res);
        setLoading(false);
        navigate("/login");
      });
      promise.catch((error) => {
        setYoda(false);
        console.log(error);
        setLoading(false);
        alert("falha de registro");
      });
    } else {
      setYoda(false);
      alert("As senhas não coincidem");
    }
  }

  function goToLoginPage() {
    navigate("/login");
  }

  return (
    <ContainerRegister yoda={yoda}>
      <img src={yoda ? Logo : LogoFail} alt="Logo Yoda" />
      <form onSubmit={registerAcount}>
        <input
          disabled={loading ? true : false}
          type="text"
          placeholder="Nome"
          onChange={(e) => {
            setName(e.target.value);
            setYoda(true);
          }}
        ></input>
        <input
          disabled={loading ? true : false}
          type="email"
          placeholder="E-mail"
          onChange={(e) => {
            setEmail(e.target.value);
            setYoda(true);
          }}
        ></input>
        <input
          disabled={loading ? true : false}
          type="password"
          placeholder="Senha"
          onChange={(e) => {
            setPassword(e.target.value);
            setYoda(true);
          }}
        ></input>
        <input
          disabled={loading ? true : false}
          type="password"
          placeholder="Confirme a senha"
          onChange={(e) => {
            setConfirmPassword(e.target.value);
            setYoda(true);
          }}
        ></input>
        <button type="submit">{loading ? "" : "CADASTRAR"}</button>
      </form>
      <span onClick={() => goToLoginPage()}>
        Já tem uma conta? Faça o login agora!
      </span>
    </ContainerRegister>
  );
}

