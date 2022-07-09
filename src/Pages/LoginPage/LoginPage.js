import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import styled from "styled-components";
import axios from 'axios';
import UserContext from '../../Context/userContext';

import Logo from "../../lib/images/Login-Driven.png";

export default function LoginPage() {
  const { setToken, setName } = useContext(UserContext);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
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
    }
    )

    promise.catch(() => {
      setLoading(false);
      alert("falha de login");
    }
    );
  }

  function goToRegisterPage() {
    navigate("/register");
  }

  return (
    <ContainerLogin>
      <img src={Logo} alt="Logo da empresa" />

      <input disabled={loading ? true : false} type="email" placeholder="Digite seu e-mail" onChange={e => setEmail(e.target.value)}></input>
      <input disabled={loading ? true : false} type="password" placeholder="Digite a sua senha" onChange={e => setPassword(e.target.value)}></input>
      <button onClick={login}>{loading ? "" : "ENTRAR"}</button>
      <span onClick={() => goToRegisterPage()}>Não tem conta? Cadastre-se agora!</span>
    </ContainerLogin>
  );
}

const ContainerLogin = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #000000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  overflow: hidden;

  img {
    width: 500px;
    height: 320px;
    object-fit: contain;
    margin-bottom: 0px;
  }

  h1 {
    color: #30deff;
    font-size: 48px;
    font-family: "Montserrat";
    font-weight: 800;
  }
  input {
    height: 50px;
    width: 80%;
    margin-bottom: 10px;
    border-radius: 5px;
    padding: 10px;
    font-size: 16px;
    font-weight: 200;
    font-family: "Montserrat";
    :hover {
      cursor: pointer;
      box-shadow: 0px 0px 25px rgba(48, 222, 255, 0.9);
    }
  }
  button {
    background-color: #30deff;
    border: thin solid #30deff;
    height: 50px;
    width: 80%;
    margin-bottom: 20px;
    border-radius: 5px;
    padding: 10px;
    font-size: 18px;
    font-family: "Montserrat";
    font-weight: 600;
    letter-spacing: 5px;
    margin-bottom: 40px;
    transition: all 0.2s;

    :hover {
      cursor: pointer;
      box-shadow: 0px 0px 25px rgba(48, 222, 255, 0.9);
    }
  }
  span {
    font-size: 18px;
    font-family: "Montserrat";
    font-weight: 300;
    color: white;
    transition: all 0.2s;
    :hover {
      cursor: pointer;
      font-size: 19px;
      font-weight: 400;
    }
  }
`;
