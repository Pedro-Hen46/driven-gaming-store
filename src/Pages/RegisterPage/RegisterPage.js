import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

//============= IMPORTANDO IMAGENS ============//
import LogoRegister from "../../lib/images/mestreYodaHappy.png";
import LogoFailed from "../../lib/images/mestreYodaSad.png";


export default function RegisterPage() {
  const navigate = useNavigate();

  const [fail, setFail] = useState(false);


  function createUser(){
    setFail(!fail);
  }

  function goToLoginPage() {
    navigate("/login");
  }

  return (
    <ContainerRegister>
      <img src={ fail ? LogoFailed : LogoRegister} alt="Logo da empresa" />
      <input type="text" placeholder="Entre com seu nome"></input>
      <input type="email" placeholder="Entre com seu email"></input>
      <input type="password" placeholder="Entre com seu password senha"></input>
      <input type="password" placeholder="Confirme a sua senha"></input>
      <button onClick={() => createUser()}>CADASTRAR</button>
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
  justify-content: center;
  align-items: center;
  padding: 10px;
  overflow-x: hidden;

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
    margin-bottom: 20px;
    border-radius: 5px;
    padding: 10px;
    font-size: 16px;
    font-family: "Montserrat";

    :hover {
      cursor: pointer;
      box-shadow: 0px 0px 30px rgba(81, 223, 59, 0.9);
    }
  }
  button {
    background-color: #51df3b;
    border: thin solid #51df3b;
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
      box-shadow: 0px 0px 30px rgba(81, 223, 59, 0.9);
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
