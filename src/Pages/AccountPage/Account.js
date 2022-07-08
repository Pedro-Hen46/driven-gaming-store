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
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100vh;
  background-image: linear-gradient(#30deff, black, black);

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

    :hover {
      cursor: pointer;
      color: #30deff;
      font-weight: 600;
      box-shadow: 0px 0px 15px rgba(48, 222, 255, 0.8);
    }
  }
`;
