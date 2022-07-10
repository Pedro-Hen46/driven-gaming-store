import Footer from "../../components/Footer/Footer";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import EmptyCart from "../../components/Cart/EmptyCart";

export default function CartPage() {
  const navigate = useNavigate();
  
  
  return (
    <ContainerCart>
      <Header />

      <EmptyCart />
      
      <Footer />
    </ContainerCart>
  );
}

const ContainerCart = styled.div`
    width: 100%;
    height: 100vh;

    background-color: #fff;  
`;
