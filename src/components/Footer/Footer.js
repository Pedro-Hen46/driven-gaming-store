import { Navigate, useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function Footer() {
  const navigate = useNavigate()

  function goToHome(){
    navigate('/')
  }  function goToCart(){
    navigate('/cart')
  }  function goToAccount(){
    navigate('/account')
  }

  return (
    <MenuContainer>
      <div onClick={() => goToHome()}>
        <ion-icon name="home"></ion-icon>
        <span>Inicio</span>
      </div>
      <div onClick={() => goToCart()}>
        <ion-icon name="cart"></ion-icon> <span>Carrinho</span>
      </div>

      <div onClick={() => goToAccount()}>
        <ion-icon name="person"></ion-icon>
        <span>Minha conta</span>
      </div>
    </MenuContainer>
  );
}

const MenuContainer = styled.div`
  @media (max-width: 700px) {
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-evenly;

    position: fixed;
    bottom: 0;
    left: 0;
    background-color: #000000;

    div {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      :hover {
        cursor: pointer;
        ion-icon {
          color: #30deff;
        }
        span {
          color: #30deff;
        }
      }
      :active {
        cursor: pointer;
        ion-icon {
          color: #30deff;
        }
        span {
          color: #30deff;
        }
      }

      ion-icon {
        color: #ffffff;
        font-size: 25px;
      }

      span {
        color: #ffffff;
        font-size: 12px;
        font-family: "Montserrat";
      }
    }
  }
`;
