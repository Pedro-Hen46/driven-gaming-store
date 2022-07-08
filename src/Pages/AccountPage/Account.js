import Footer from "../../components/Footer/Footer";
import UserProfileImage from "../../lib/images/Profile-user.png";

import axios from "axios";
import { useState } from "react";
import styled from "styled-components";

export default function AccountPage() {
  const [teste, setTeste] = useState(
    "Clique no botão abaixo para testar a conexão com o Banco de Dados"
  );
  function testeAPI() {
    const promise = axios.get(
      "https://driven-gaming-store-fullstack.herokuapp.com/teste"
    );

    promise.then((response) => {
      setTeste(response.data);
    });

    promise.catch(() => {
      setTeste("Ih deu ruim rapaziada... Tente novamente.");
    });
  }

  //=============== INICIO DO RENDER =================//
  return (
    <ContainerAccount>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#000000"
          fillOpacity="1"
          d="M0,192L60,208C120,224,240,256,360,245.3C480,235,600,181,720,154.7C840,128,960,128,1080,133.3C1200,139,1320,149,1380,154.7L1440,160L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
        ></path>
      </svg>
      <img src={UserProfileImage} alt="Logo do usuario" />
      <input placeholder="Vandré Raia" disabled="disabled"></input>
      <input placeholder="vandreraia@gmail.com" disabled="disabled"></input>
      <input type="password" value="Vandré Raia" disabled="disabled"></input>
      <button onClick={() => testeAPI()}>ATUALIZAR CADASTRO</button>

      <Footer />
    </ContainerAccount>
  );
}

const ContainerAccount = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  svg{
    display: none;
    position: absolute;
    top: 0;
  }
  input {
    height: 60px;
    width: 80%;
    border-radius: 10px;
    margin-bottom: 15px;
    padding: 10px;
    font-family: "Montserrat";
    font-weight: 600;
    color: #30deff;
    border: thin solid #30deff;

    :hover {
      cursor: not-allowed;
    }
  }

  img {
    width: 250px;
    margin-bottom: 30px;
  }

  @media (max-width: 700px) {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;

    align-items: center;
    background-image: linear-gradient(#30deff, black, black) ;

    button {
      width: 80%;
      height: 50px;
      background-color: black;
      border: thin solid black;
      border-radius: 10px;
      letter-spacing: 3px;
      color: white;
      font-weight: 300;
      font-size: 22px;
      transition: linear 0.4s;
      border: thin solid #30deff;

      :hover{
        cursor: pointer;
        color: #30deff;
        font-weight: 600;
        box-shadow: 0px 0px 15px rgba(48, 222, 255, 0.8);
      }
    }
  }
`;
