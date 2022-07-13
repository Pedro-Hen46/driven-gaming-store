import { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import styled from "styled-components";
import axios from "axios";
import EmptyOrders from "../../components/Orders/EmptyOrders";
import OrdersResume from "../../components/Orders/OrdersResume";

import React from "react";
import Lottie from "react-lottie";
import animationData from "../../lib/PacMan.json";

export default function CheckoutPage() {

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const [loading, setLoading] = useState(true);
  const [myOrders, setMyOrders] = useState([]);
  const [userData, setUserData] = useState(() => {
    return JSON.parse(localStorage.getItem("user"));
  });
  
  useEffect(() => {

    if (userData !== null) {
    const promise = axios.get(
      "https://driven-gaming-store-fullstack.herokuapp.com/myorders",
      { headers: { email: userData.email } }
    );

    promise.then((response) => {
      setMyOrders(response.data);
      setLoading(false);
    });

    promise.catch((error) => {
      console.log(error);
      setLoading(false);

    });
  }
  }, [userData]);

  return (
    <>
      <Header />
      {!loading ? (
        <>
          {myOrders.length === 0 ? <EmptyOrders /> : <OrdersResume data={myOrders}/>}
        </>
      ) : (
        <>
          <AnimationLoading>
            <Lottie options={defaultOptions} height={400} width={400} />
          </AnimationLoading>
        </>
      )}

      <Footer />
    </>
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