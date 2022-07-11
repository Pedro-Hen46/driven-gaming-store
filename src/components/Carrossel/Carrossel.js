import styled from "styled-components";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Carrossel() {
  const [dataGame, setDataGame] = useState([]);

  useEffect(() => {
    const promise = axios.get(
      "https://driven-gaming-store-fullstack.herokuapp.com/product"
    );

    promise.then((response) => {
      setDataGame(response.data.reverse());
    });

    promise.catch((response) => {
      console.log(response.data);
    });
  }, []);

  return (
    <ContainerCarrossel>
      <GamesPromotion>
        {dataGame.map((image, index) => (
          <Link to={`/product/${image._id}`} key={index}> 
            <img key={index} src={image.images[0]} alt="Jogo em promoção" />
          </Link>
        ))}
      </GamesPromotion>
    </ContainerCarrossel>
  );
}

const ContainerCarrossel = styled.div`
  width: 100%;
  z-index: 1;
`;

const GamesPromotion = styled.div`
@media ( max-width: 760px){
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-y: hidden;
  padding: 2%;
  img {
    object-fit: cover;
    border-radius: 10px;
    height: 200px;
    max-width: 250px;
    margin-left: 20px;

    box-shadow: 0px 0px 10px rgba(48, 222, 255, 0.9);

    :hover {
      cursor: pointer;
    }
  }
`;
