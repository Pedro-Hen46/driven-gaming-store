import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

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
        navigate("/");
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

const ContainerRegister = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #000000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
  overflow-x: hidden;

  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  img {
    height: 40%;
    object-fit: cover;
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
      box-shadow: 0px 0px 30px ${(props) => (props.yoda ? "rgba(81, 223, 59, 0.9)" : "rgba(255,0,0,0.9)")};
    }
  }
  button {
    background-color: ${(props) => (props.yoda ? "#51df3b" : "#ff0000")};
    border: thin solid ${(props) => (props.yoda ? "#51df3b" : "#ff0000")};
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
      box-shadow: 0px 0px 30px ${(props) => (props.yoda ? "rgba(81, 223, 59, 0.9)" : "rgba(255,0,0,0.9)")};
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
