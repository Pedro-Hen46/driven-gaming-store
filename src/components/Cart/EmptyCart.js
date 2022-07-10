import { useNavigate } from "react-router-dom";
import styled from "styled-components";


export default function EmptyCart() {
const navigate = useNavigate();

function goToCompras(){
    navigate("/")
}

  return (
    <ContainerCart>
      <h1>"Ops, parece que você não tem nenhum item no carrinho."</h1>
      <button onClick={() => goToCompras()}>QUERO COMPRAR!</button>
    </ContainerCart>
  );
}


const ContainerCart = styled.div`
    width: 100%;
    height: 70vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;

    background-color: #fff;

    h1 {
      font-size: 18px;
      font-weight: 400;
      color: #000000;
      font-family: "Montserrat";
      margin-bottom: 10px;
      font-style: italic;
    }
    button {
      width: 100%;
      height: 60px;
      background-color: black;
      border: thin solid black;
      border-radius: 10px;
      color: white;
      font-weight: 500;
      font-size: 22px;
      letter-spacing: 2px;
      transition: all 0.7s;

      :hover {
        cursor: pointer;
        background-color: #30deff;
        border: thin solid #30deff;
        box-shadow: 0px 0px 20px rgba(0,0,0,0.3);
      }
    }
  
`;
