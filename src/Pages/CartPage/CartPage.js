import Footer from "../../components/Footer/Footer";
import styled from "styled-components";
import Header from "../../components/Header/Header";
import EmptyCart from "../../components/Cart/EmptyCart";
import Cart from "../../components/Cart/Cart";

export default function CartPage() {
  
  const dataCart = JSON.parse(localStorage.getItem("@cart"));

  return (
    <ContainerCart>
      <Header />
      { dataCart.length === 0 ? <EmptyCart /> : <Cart dataCart={dataCart} /> }
      <Footer />
    </ContainerCart>
  );
}

const ContainerCart = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #fff;  
`;
