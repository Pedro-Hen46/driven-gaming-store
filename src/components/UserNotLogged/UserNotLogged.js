import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import yoda from "../../lib/images/yodaJedi.png";
import Footer from "../Footer/Footer";

export default function UserNotLogged() {
    const navigate = useNavigate();

    function goToLogin(){
        navigate("/login");
    }

  return (
    <ContainerAccount>
      <h1>Ops, parece que você não está logado, para prosseguir clique abaixo.</h1>
      <button onClick={() => goToLogin()}>LOGAR AGORA</button>
      <img onClick={() => window.alert("Não cutuca mestre, passando conhecimento mestre está!")} src={yoda} alt="Yoda dando o bizu"/>
      <tt>“Raiva, medo, agressão. Ao lado sombrio elas pertencem”</tt>

      <Footer />
    </ContainerAccount>
  );
}

const ContainerAccount = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px;

  width: 100%;
  height: 100vh;
  background-image: linear-gradient(#30deff, black, black);
    tt{
        color: #ffffff;
        text-transform: uppercase;
        font-family: 'Montserrat';
        font-weight: 400;
        text-shadow: 0px 0px 10px rgba(48, 222, 255, 99);;
        font-size: 20px;
        position: fixed;
        text-align: center;
        bottom: 70px;
    }
    h1{
        color: #ffffff;
        font-family: 'Montserrat';
        font-weight: 400;
        text-align: center;
        font-size: 28px;
        margin-bottom: 20px;

    }
    img{
        position: fixed;
        bottom: -120px;
    }
  button {
    width: 100%;
    height: 70px;
    background-color: black;
    border: thin solid black;
    border-radius: 10px;
    letter-spacing: 3px;
    color: white;
    font-weight: 700;
    font-size: 22px;
    border: thin solid #30deff;
    box-shadow: 0px 0px 35px rgba(48, 222, 255, 0.4);
    
    transition: linear 0.4s;
    :hover {
      cursor: pointer;
      color: #30deff;
      font-weight: 600;
      box-shadow: 0px 0px 15px rgba(48, 222, 255, 0.8);
    }
  }
`;
