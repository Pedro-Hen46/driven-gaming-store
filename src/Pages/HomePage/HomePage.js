import styled from "styled-components";

//============= Imporatando Components ======================//
import Footer from  '../../components/Footer/Footer.js';
import Carrossel from "../../components/Carrossel/Carrossel.js";
import GameList from "../../components/GameList/GameList.js";

export default function HomePage() {


  
  return (
    <ContainerHome>
      <Carrossel />
      <GameList />
      

      <Footer />
    </ContainerHome>
  );
}

const ContainerHome = styled.div`

@media(max-width: 700px) {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  align-items: center;
  background-color: #fff;


  button {
    width: 80%;
    height: 50px;
    background-color: black;
    border: thin solid red;
    border-radius: 10px;
    color: white;
    font-weight: bold;
    font-size: 22px;
  }

}`;

