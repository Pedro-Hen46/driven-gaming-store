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

    if (userData !== null) {
    const promise = axios.get(
      "https://driven-gaming-store-fullstack.herokuapp.com/myorders",
      { headers: { email: userData.email } }
    );

    promise.then((response) => {
      setMyOrders(response.data);
    });

    promise.catch((error) => {
      console.log(error);
    });
  }
  }, [userData]);

  return (
    <>
      <Header />
      {myOrders.length === 0 ? <EmptyOrders /> : <OrdersResume data={myOrders}/>}
      <Footer />
    </>
  );
}
