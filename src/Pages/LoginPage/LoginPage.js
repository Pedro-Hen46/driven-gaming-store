import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Logo from "../../lib/images/Login-Driven.png";

export default function LoginPage() {
  const navigate = useNavigate();

  function goToRegisterPage() {
    navigate("/register");
  }
  function goToHomePage() {
    navigate("/");
  }

  return (
    <ContainerLogin>
      <img src={Logo} alt="Logo da empresa" />
      <input type="email" placeholder="Entre com seu email"></input>
      <input type="password" placeholder="Entre com a sua senha"></input>
      <button onClick={() => goToHomePage()}>ENTRAR</button>
      <span onClick={() => goToRegisterPage()}>
        Não tem conta? Cadastre-se agora!
      </span>
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
    margin-bottom: 20px;
    border-radius: 5px;
    padding: 10px;
    font-size: 16px;
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
