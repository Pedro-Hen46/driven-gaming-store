import Footer from "../../components/Footer/Footer";
import axios from 'axios';
import { useState } from "react";
import styled from "styled-components";

export default function AccountPage() {

  const [teste, setTeste] = useState(
    "Clique no botão abaixo para testar a conexão com o Banco de Dados"
  );
  function testeAPI() {
    const promise = axios.get("https://driven-gaming-store-fullstack.herokuapp.com/teste");

    promise.then((response) => {
      setTeste(response.data);
    });

    promise.catch(() => {
      setTeste("Ih deu ruim rapaziada... Tente novamente.");
    });
  }

  return (
    <ContainerAccount>
      <h1> Seja bem vindo a tela Minha conta </h1>
      <h1>{teste}</h1>
      <button onClick={() => testeAPI()}>CLICAR AQUI</button>
      <Footer />
    </ContainerAccount>
  );
}

const ContainerAccount = styled.div`

@media(max-width: 700px) {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  align-items: center;
  background-color: #fff;

  h1 {
    font-size: 22px;
    color: red;
    font-family: "Roboto";
    margin-bottom: 40px;
  }
  button {
    width: 80%;
    height: 50px;
    background-color: black;
    border: thin solid red;
    border-radius: 10px;
    color: white;
    font-weight: bold;
    font-size: 22px;
  }

}`;
