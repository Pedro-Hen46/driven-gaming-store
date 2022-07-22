import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import yoda from "../../lib/images/yodaJedi.png";

export default function EmptyCart() {
  const navigate = useNavigate();

  function goToCompras() {
    navigate("/");
  }

  return (
    <ContainerCart>
      <h3> MEU CARRINHO</h3>
      <img src={yoda} alt="Yoda dando o bizu" />
      <button onClick={() => goToCompras()}>
        <ion-icon name="cash"></ion-icon>COMPRAR AGORA!
      </button>
      <h1>“Um Jedi usa pagamento à vista, nunca empréstimo...”</h1>
      <span>
      😭 "Seu carrinho se encontra vazio no momento, clique no botão para comprar nossos produtos..."
      </span>
    </ContainerCart>
  );
}

const ContainerCart = styled.div`
  width: 100%;
  height: 100%;
  background-image: linear-gradient(#30deff, black, black);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;

  h1 {
    position: fixed;
    text-transform: uppercase;
    padding: 10px;
    top: 55%;
    font-size: 18px;
    letter-spacing: 0.19rem;
    text-align: center;
    font-weight: 600;
    text-shadow: 0px 0px 10px rgba(0, 0, 0, 100);
    color: #fff;
    font-family: "Montserrat";
  }

  h3 {
    text-transform: uppercase;
    margin-bottom: 40px;
    padding: 10px;
    letter-spacing: 1px;
    font-size: 26px;
    text-align: center;
    font-weight: 500;
    text-shadow: 0px 0px 10px rgba(0, 0, 0, 100);
    color: #fff;
    font-family: "Montserrat";
  }

  img {
    object-fit: contain;
    width: 100%;
    height: 45%;
    min-height: 400px;
  }
  
  span {
    z-index: 1;
    color: #ffffff;
    font-family: "Montserrat";
    font-weight: 300;
    text-align: center;
    font-size: 20px;
  
  }

  button {
    z-index: 1;
    width: 100%;
    max-width: 500px;
    height: 60px;
    min-height: 60px;

    background-color: black;
    border: thin solid black;
    border-radius: 10px;
    letter-spacing: 3px;
    color: white;
    font-weight: 700;
    font-size: 22px;
    border: thin solid #30deff;
    box-shadow: 0px 0px 35px rgba(48, 222, 255, 0.4);
    margin-bottom: 15%;

    transition: linear 0.4s;
    :hover {
      cursor: pointer;
      color: #30deff;
      font-weight: 600;
      box-shadow: 0px 0px 15px rgba(48, 222, 255, 0.8);
    }

    ion-icon {
      font-size: 20px;
      margin-right: 20px;
    }
  }
`;
