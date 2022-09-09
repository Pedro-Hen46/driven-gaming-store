import Footer from "../../components/Footer/Footer";
import UserProfileImage from "../../lib/images/Profile-user.png";
import UserNotLogged from "../../components/UserNotLogged/UserNotLogged.js";

import { ContainerAccount } from "./AccountStyles";
import { useEffect, useState } from "react";

export default function AccountPage() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    setUserData(JSON.parse(localStorage.getItem("user"))); //Pegando os dados do local storage.
  }, []);

  function logoutAccount() {
    if (window.confirm("Tem certeza que deseja sair da sua conta?")) {
      localStorage.removeItem("user");
      setUserData(null);
    }
  }

  //=============== INICIO DO RENDER =================//
  return (
    <>
      {userData === null ? (
        <UserNotLogged />
      ) : (<>
        <ContainerAccount>
          <img src={UserProfileImage} alt="Logo do usuario" />

          <input value={userData.name} disabled="disabled"></input>
          <input value={userData.email} disabled="disabled"></input>
          <input type="password" value="password" disabled="disabled"></input>
          <button>
            <ion-icon name="cog-outline"></ion-icon>ATUALIZAR CONTA
          </button>
          <button onClick={() => logoutAccount()}>
            <ion-icon name="log-out-outline"></ion-icon>SAIR DA CONTA
          </button>

          <Footer />
        </ContainerAccount>
        </>
      )}
    </>
  );
}

