import { ContainerHome, AnimationLoading, ContainerGameList } from "./HomePageStyles";
import { useEffect, useState } from "react";
import axios from "axios";
import React from "react";
import Lottie from "react-lottie";
import animationData from "../../lib/PacMan.json";

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

  const [dataGame, setDataGame] = useState([]);
  const [loading, setLoading] = useState(true);

  const [cartItens, setCartItens] = useState(() => {
    const cartCache = localStorage.getItem("@cart");

    if (cartCache) {
      return JSON.parse(cartCache);
    }
    return [];
  });

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
