import Footer from "../../components/Footer/Footer";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export default function CartPage() {
  const navigate = useNavigate();
  
  
  function goToLoginPage(){
    navigate('/login');
  }
  return (
    <ContainerCart>
      <h1>Parece que você não está logado.</h1>
      <button  onClick={() => goToLoginPage()}>LOGAR AGORA</button>
      <Footer />
    </ContainerCart>
  );
}

const ContainerCart = styled.div`
  @media (max-width: 700px) {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;

    background-color: #fff;

    h1 {
      font-size: 22px;
      font-weight: 600;
      color: #000000;
      font-family: "Montserrat";
      margin-bottom: 40px;
    }
    button {
      width: 80%;
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
  }
`;
