import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function EmptyCart() {
  const navigate = useNavigate();

  function goToCompras() {
    navigate("/");
  }

  return (
    <ContainerCart>
      <h1>"Ops, parece que você não tem nenhum item no carrinho."</h1>
      <button onClick={() => goToCompras()}>
        <ion-icon name="cash"></ion-icon>COMPRAR AGORA!
      </button>
    </ContainerCart>
  );
}

const ContainerCart = styled.div`
  width: 100%;
  height: 100%;
  background-image: linear-gradient(#30deff, black);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;

  h1 {
    font-size: 22px;
    text-align: center;
    font-weight: 700;
    color: #fff;
    font-family: "Montserrat";
    margin-bottom: 25px;
    font-style: italic;
  }
  button {
    width: 100%;
    height: 70px;
    letter-spacing: 6px;
    background-color: black;
    border: thin solid black;
    border-radius: 10px;
    color: white;
    font-weight: 500;
    font-size: 22px;
    transition: all 0.7s;

    ion-icon {
      font-size: 20px;
      margin-right: 20px;
    }

    :hover {
      cursor: pointer;
      color: #30deff;
      box-shadow: 0px 0px 15px rgba(48, 222, 255, 0.8);
    }
  }
`;
