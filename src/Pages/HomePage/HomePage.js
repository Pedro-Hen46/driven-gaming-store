import styled from "styled-components";
import axios from "axios";
import { useEffect, useState } from "react";
import React from "react";
import Lottie from "react-lottie";
import animationData from "../../lib/PacMan.json";

//============= Imporatando Components ======================//
import Footer from "../../components/Footer/Footer.js";
import Carrossel from "../../components/Carrossel/Carrossel.js";
import GameList from "../../components/GameList/GameList.js";
import Header from "../../components/Header/Header.js";

export default function HomePage() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  //====================== VARIAVEIS DE ESTADO =================//
  const [dataGame, setDataGame] = useState([]);
  const [loading, setLoading] = useState(true);

  const [cartItens, setCartItens] = useState(() => {
    const cartCache = localStorage.getItem("@cart");

    if (cartCache) {
      return JSON.parse(cartCache);
    }
    return [];
  });

  //====================== CONEXÃO BACK =================//
  useEffect(() => {
    localStorage.setItem("@cart", JSON.stringify(cartItens));
  }, [cartItens]);

  useEffect(() => {
    const promise = axios.get(
      "https://driven-gaming-store-fullstack.herokuapp.com/product"
    );

    promise.then((response) => {
      setDataGame(response.data);
      setLoading(false);
    });

    promise.catch((response) => {
      console.log(response.data);
      setLoading(false);
    });
  }, []);

  return (
    <ContainerHome>
      {!loading ? (
        <>
          <Header />
          <Carrossel setLoading={setLoading}/>
        </>
      ) : (
        <>
          <AnimationLoading>
            <Lottie options={defaultOptions} height={400} width={400} />
          </AnimationLoading>
        </>
      )}

      <ContainerGameList>
        {dataGame.map((item, index) => (
          <GameList
            cartItens={cartItens}
            setCartItens={setCartItens}
            data={item}
            key={index}
          />
        ))}
      </ContainerGameList>

      <Footer />
    </ContainerHome>
  );
}
const AnimationLoading = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  left: 0;
  top: 35%;
  z-index: 1;
`;

const ContainerGameList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
const ContainerHome = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

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
`;
