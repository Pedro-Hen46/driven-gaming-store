import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import yoda from "../../lib/images/yodaJedi.png";
import Footer from "../Footer/Footer";

export default function UserNotLogged() {
  const navigate = useNavigate();

  function goToLogin() {
    navigate("/login");
  }

  return (
    <>
      <ContainerAccount>
        <img
          onClick={() =>
            window.alert(
              "Não cutuca mestre, passando conhecimento mestre está!"
            )
          }
          src={yoda}
          alt="Yoda dando o bizu"
          />
        <tt>“Raiva, medo, agressão. Ao lado sombrio elas pertencem”</tt>
        <button onClick={() => goToLogin()}>LOGAR AGORA</button>
          <h1>
            "Ops, parece que você não está logado, para prosseguir clique para logar..."
          </h1>
      </ContainerAccount>
      <Footer />
    </>
  );
}

const ContainerAccount = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;

  width: 100%;
  height: 100vh;
  background-image: linear-gradient(#30deff, black, black);

  tt {
    padding: 15px;
    color: #ffffff;
    text-transform: uppercase;
    font-family: "Montserrat";
    font-weight: 600;
    text-shadow: 0px 0px 10px rgba(48, 222, 255, 99);
    font-size: 20px;
    position: fixed;
    text-align: center;
  }
  h1 {
    z-index: 1;
    color: #ffffff;
    font-family: "Montserrat";
    font-weight: 300;
    text-align: center;
    font-size: 18px;
    margin-bottom: 20px;
  }
  img {
    object-fit: contain;
    width: 100%;
    height: 45%;
    min-height: 400px;
  }
  button {
    z-index: 1;
    width: 100%;
    height: 60px;
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
  }
`;
