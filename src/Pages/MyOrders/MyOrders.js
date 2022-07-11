import styled from "styled-components";
import { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import axios from "axios";
import EmptyOrders from "../../components/Orders/EmptyOrders";
import OrdersResume from "../../components/Orders/OrdersResume";

export default function CheckoutPage() {
  const [myOrders, setMyOrders] = useState([]);
  const [userData, setUserData] = useState(() => {
    return JSON.parse(localStorage.getItem("user"));
  });

  useEffect(() => {
    const promise = axios.get(
      "https://driven-gaming-store-fullstack.herokuapp.com/myorders",
      { headers: { email: userData.email } }
    );

    promise.then((response) => {
      setMyOrders(response.data);
      console.log(response.data);
    });

    promise.catch((error) => {
      console.log(error);
    });
  }, [userData.email]);

  return (
    <>
      <Header />
      {myOrders.length === 0 ? <EmptyOrders /> : <OrdersResume />}
      <Footer />
    </>
  );
}

const ContainerOrders = styled.div`
  width: 100%;
  height: 93vh;
  margin-top: -3%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  input {
    background-color: black;
    color: white;
    height: 60px;
    border-radius: 10px;
    margin-bottom: 15px;
    margin-top: 5px;
    padding: 10px;
    font-family: "Montserrat";
    font-weight: 600;
    border: thin solid #30deff;

    :hover {
      cursor: not-allowed;
    }
  }

  form {
    width: 90%;
    display: flex;
    flex-direction: column;

    select {
      height: 60px;
      padding: 10px;
      border-radius: 10px;
    }

    tt {
      font-weight: 600;
      text-transform: uppercase;
      font-family: "Montserrat";
      margin-bottom: 10px;
    }
  }
  h1 {
    margin-top: 0%;
    margin-bottom: 20px;
    color: #30deff;
    font-size: 22px;
    font-weight: 600;
    letter-spacing: 2px;
    text-transform: uppercase;
    font-family: "Montserrat";
    text-align: center;
    text-shadow: 0px 0px 20px rgba(48, 222, 255, 99);
  }
  img {
    position: fixed;
    bottom: -60px;
    z-index: 0;
  }
  button {
    z-index: 1;
    margin-top: 20px;
    display: flex;
    justify-content: center;
    align-items: center;

    height: 70px;
    background-color: #30deff;
    border: thin solid black;
    border-radius: 10px;
    letter-spacing: 3px;
    color: white;
    font-weight: 300;
    font-size: 18px;
    border: thin solid #30deff;
    margin-bottom: 10px;
    transition: linear 0.4s;

    ion-icon {
      font-size: 32px;
      margin-right: 20px;
    }

    :hover {
      cursor: pointer;
      color: #000000;
      font-weight: 600;
      box-shadow: 0px 0px 15px rgba(48, 222, 255, 0.8);
    }
  }
`;
