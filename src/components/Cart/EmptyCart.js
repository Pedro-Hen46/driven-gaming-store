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
      <img
          src={yoda}
          alt="Yoda dando o bizu"
          />
      <button onClick={() => goToCompras()}>
        <ion-icon name="cash"></ion-icon>COMPRAR AGORA!
      </button>
      <h1>“Um Jedi usa pagamento à vista, nunca empréstimo...”</h1>
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
    text-shadow: 0px 0px 10px rgba(0,0,0,100);
    color: #fff;
    font-family: "Montserrat";
  }
  
  img {
    object-fit: contain;
    width: 100%;
    height: 45%;
    min-height: 400px;
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
