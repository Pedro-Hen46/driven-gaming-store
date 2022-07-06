import { useState } from "react";
import axios from "axios";
import styled from "styled-components";

export default function HomePage() {
  const [teste, setTeste] = useState(
    "Clique no botão abaixo para testar a conexão com o Banco de Dados"
  );

  function testeAPI() {
    const promise = axios.get("https://driven-gaming-store-fullstack.herokuapp.com/teste", null);

    promise.then(() => {
      setTeste("Parabens, deu certo a conexão com o BackAPI");
    });

    promise.then(() => {
      setTeste("Ih deu ruim rapaziada... Tente novamente.");
    });
  }
  return (
    <ContainerHome>
      <h1>{teste}</h1>
      <button onClick={() => testeAPI()}>CLICAR AQUI</button>
    </ContainerHome>
  );
}

const ContainerHome = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;
  background-color: red;

  h1 {
    font-size: 22px;
    color: white;
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
`;
