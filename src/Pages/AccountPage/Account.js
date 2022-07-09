import Footer from "../../components/Footer/Footer";
import UserProfileImage from "../../lib/images/Profile-user.png";
import UserNotLogged from "../../components/UserNotLogged/UserNotLogged.js";

import styled from "styled-components";
import { useEffect, useState } from "react";

export default function AccountPage() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    setUserData(JSON.parse(localStorage.getItem('user'))); //Pegando os dados do local storage.
  }, []);

  //=============== INICIO DO RENDER =================//
  return (
    <>
      {userData === null ? (
        <UserNotLogged />
      ) : (
        <ContainerAccount>
          <img src={UserProfileImage} alt="Logo do usuario" />

          <input value={userData.name} disabled="disabled"></input>
          <input value={userData.email} disabled="disabled"></input>
          <input type="password" value="password" disabled="disabled"></input>
          <button>ATUALIZAR CADASTRO</button>

          <Footer />
        </ContainerAccount>
      )}
    </>
  );
}

const ContainerAccount = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100vh;
  background-image: linear-gradient(#30deff, black, black);

  input {
    height: 60px;
    width: 80%;
    border-radius: 10px;
    margin-bottom: 15px;
    padding: 10px;
    font-family: "Montserrat";
    font-weight: 600;
    color: #30deff;
    border: thin solid #30deff;

    :hover {
      cursor: not-allowed;
    }
  }

  img {
    width: 250px;
    margin-bottom: 30px;
  }

  button {
    width: 80%;
    height: 50px;
    background-color: black;
    border: thin solid black;
    border-radius: 10px;
    letter-spacing: 3px;
    color: white;
    font-weight: 300;
    font-size: 22px;
    transition: linear 0.4s;
    border: thin solid #30deff;

    :hover {
      cursor: pointer;
      color: #30deff;
      font-weight: 600;
      box-shadow: 0px 0px 15px rgba(48, 222, 255, 0.8);
    }
  }
`;
