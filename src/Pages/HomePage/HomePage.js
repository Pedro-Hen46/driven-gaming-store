import styled from "styled-components";
import axios from "axios";
import { useEffect, useState } from "react";

//============= Imporatando Components ======================//
import Footer from "../../components/Footer/Footer.js";
import Carrossel from "../../components/Carrossel/Carrossel.js";
import GameList from "../../components/GameList/GameList.js";

export default function HomePage() {
  //====================== VARIAVEIS DE ESTADO =================//
  const [dataGame, setDataGame] = useState([]);

  //====================== CONEXÃO BACK =================//
  useEffect(() => {
    const promise = axios.get(
      "https://driven-gaming-store-fullstack.herokuapp.com/product"
    );

    promise.then((response) => {
      setDataGame(response.data);
    });

    promise.catch((response) => {
      console.log(response.data);
    });
  }, []);

  return (
    <ContainerHome>
      <Carrossel />

      <ContainerGameList>
        {dataGame.map((item, index) => (
          <GameList data={item} key={index} />
        ))}
      </ContainerGameList>

      <Footer />
    </ContainerHome>
  );
}
const ContainerGameList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-left: 20px;
`;
const ContainerHome = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 700px) {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    
    :last-child {
      margin-bottom: 50px;
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
  }
`;
