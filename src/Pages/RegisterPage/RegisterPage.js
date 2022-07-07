import styled from "styled-components";
import Logo from "../../lib/images/testeLogoLogin.png";
import { useNavigate } from "react-router-dom";
export default function RegisterPage() {
    const navigate = useNavigate();

    function goToLoginPage(){
        navigate("/login");
    }
    
  return (
    <ContainerRegister>
      <img src={Logo} alt="Logo da empresa" />
      <input type="text" placeholder="Entre com seu nome"></input>
      <input type="email" placeholder="Entre com seu email"></input>
      <input type="password" placeholder="Entre com seu password senha"></input>
      <input type="password" placeholder="Confirme a sua senha"></input>
      <button>CADASTRAR</button>
      <span  onClick={() => goToLoginPage()}>Já tem uma conta? Faça o login agora!</span>
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
