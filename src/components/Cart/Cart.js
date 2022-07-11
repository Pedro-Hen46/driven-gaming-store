import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import DetailsProduct from "./DetailsProductCart";

export default function CartPage({ dataCart }) {
  const navigate = useNavigate();
  const [infoProduct, setInfoProduct] = useState([]);
  const [prices, setPrices] = useState([]);
  let totalValue = 0;

  useEffect(() => {
    const promise = axios.get(
      "https://driven-gaming-store-fullstack.herokuapp.com/product"
    );

    promise.then((response) => {
      response.data.forEach((product) => {
        dataCart.forEach((item) => {
          if (product._id === item.id) {
            setInfoProduct((state) => [...state, product]);
            setPrices((state) => [...state, product.desconto]);
          } else {
            return [];
          }
        });
      });
    });

    promise.catch((response) => {
      console.log(response.data);
    });
  }, [dataCart]);



  prices.map((prices) => {
    totalValue += Number(prices);
  });

  function ClearCart() {
    if (window.confirm("Você tem certeza que deseja limpar o carrinho?")) {
      localStorage.setItem("@cart", []);
      navigate("/");
    }
  }

  return infoProduct === undefined ? (
    ""
  ) : (
    <>
      <ContainerCart>
        <Legend
          onClick={() => {
            ClearCart();
          }}
        >
          <ion-icon name="trash"></ion-icon>
          <h4>Limpar Carrinho</h4>
        </Legend>
        <DetailsGameSelected>
          {infoProduct.map((item, index) => (
            <DetailsProduct key={index} data={item} />
          ))}
        </DetailsGameSelected>
        <h1>VALOR TOTAL: R$ {totalValue.toFixed(2)}</h1>
        <button onClick={() => navigate("/checkout")}>FINALIZAR COMPRA</button>
      </ContainerCart>
    </>
  );
}
const Legend = styled.div`
  width: 80%;
  height: 90px;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;

  background-color: black;
  border: thin solid black;
  letter-spacing: 3px;
  font-weight: 300;
  font-size: 18px;
  border: thin solid #30deff;
  transition: linear 0.4s;

  :hover {
    cursor: pointer;
    color: #30deff;
    font-weight: 600;
    box-shadow: 0px 0px 15px rgba(48, 222, 255, 0.8);
  }

  h4 {
    color: #ffffff;
    font-size: 22px;
    font-weight: 300;
    text-transform: uppercase;
    font-family: "Montserrat";
    margin-left: 10px;
    transition: linear 0.4s ease-in-out;
    :hover {
      cursor: pointer;
      font-weight: 500;
    }
  }

  ion-icon {
    color: #ffffff;
    font-size: 28px;
  }
`;

const DetailsGameSelected = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 92%;
  height: 800px;
  border-radius: 10px;
  overflow-x: hidden;

  margin-top: 5%;
  margin-bottom: 20px;
`;

const ContainerCart = styled.div`
  width: 100%;
  height: 80vh;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow-x: none;
  h1 {
    color: #30deff;
    font-size: 28px;
    font-weight: 700;
    font-family: "Montserrat";
    text-shadow: 0px 0px 20px rgba(48, 222, 255, 99);
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;

    width: 90%;
    height: 90px;
    background-color: black;
    border: thin solid black;
    border-radius: 10px;
    letter-spacing: 3px;
    color: white;
    font-weight: 300;
    font-size: 18px;
    border: thin solid #30deff;
    transition: linear 0.4s;

    ion-icon {
      font-size: 32px;
      margin-right: 20px;
    }

    :hover {
      cursor: pointer;
      color: #30deff;
      font-weight: 600;
      box-shadow: 0px 0px 15px rgba(48, 222, 255, 0.8);
    }
  }
`;
