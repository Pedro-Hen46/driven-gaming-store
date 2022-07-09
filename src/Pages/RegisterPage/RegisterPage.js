import styled from "styled-components";
import Logo from "../../lib/images/testeLogoLogin.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function RegisterPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [name, setName] = useState();
  const [loading, setLoading] = useState(false);
  
  function registerAcount(event) {
    const body = {
      email,
      password,
      name,
    };

    if (password === confirmPassword) {

      event.preventDefault();
      setLoading(true);
      console.log(body)
      const promise = axios.post("https://driven-gaming-store-fullstack.herokuapp.com/sign-up"
        , body);
      promise.then((res) => {
        console.log(res)
        setLoading(false);
        navigate("/");
      }
      );
      promise.catch(() => {
        setLoading(false);
        alert("falha de registro");
      }
      );
    } else {
      alert("As senhas não coincidem")
    }
  }

  function goToLoginPage() {
    navigate("/login");
  }

  return (
    <ContainerRegister>
      <img src={Logo} alt="Logo Yoda" />
      <form onSubmit={registerAcount} >
        <input disabled={loading ? true : false} type="text" placeholder="Nome" onChange={e => setName(e.target.value)}></input>
        <input disabled={loading ? true : false} type="email" placeholder="E-mail" onChange={e => setEmail(e.target.value)}></input>
        <input disabled={loading ? true : false} type="password" placeholder="Senha" onChange={e => setPassword(e.target.value)}></input>
        <input disabled={loading ? true : false} type="password" placeholder="Confirme a senha" onChange={e => setConfirmPassword(e.target.value)}></input>
        <button type="submit">{loading ? "" : "CADASTRAR"}</button>
      </form>
      <span onClick={() => goToLoginPage()}>Já tem uma conta? Faça o login agora!</span>
    </ContainerRegister>
  );
}

const ContainerRegister = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #000000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  img{
    height: 50%;
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
    margin-bottom: 20px;
    border-radius: 5px;
    padding: 10px;
    font-size: 16px;
    font-family: "Montserrat";
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
