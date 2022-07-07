import styled from "styled-components";

export default function GameList() {
  return (
    <ContainerGameList>
      <div>
        <img
          src="https://loja.gameforfun.com.br/wp-content/uploads/2020/02/Red-Dead-Redemption-2-midia-digiital-xbox-one.jpg.webp"
          alt="Capa do jogo"
        />
        <DetailsGame>
          <h4>Red Dead Redemption 2</h4>
          <tt>RPG - Mundo Aberto - Ação</tt>
          <br />
          <ion-icon name="desktop"></ion-icon>
          <ion-icon name="logo-xbox"></ion-icon>
          <ion-icon name="logo-playstation"></ion-icon> <br />
          <h6>
            Na compra do Red Dead Redemption 2 você receberá um guia completo
            com mais de 57 artigos em texto e vídeo para você completar 100% o
            Red Dead 2.
          </h6>
          <h2>R$ 129,90</h2>
        </DetailsGame>
      </div>

      <div>
        <img
          src="https://loja.gameforfun.com.br/wp-content/uploads/2020/02/Resident-Evil-3-midia-digital-xbox-one.jpg.webp"
          alt="Capa do jogo"
        />
        <DetailsGame>
          <h4>Residente Evil 3</h4>
          <tt>Terror - Ação</tt>
          <br />
          <ion-icon name="desktop"></ion-icon>
          <ion-icon name="logo-xbox"></ion-icon>
          <ion-icon name="logo-playstation"></ion-icon> <br />
          <h6>
          Na compra do Resident Evil 3 você receberá um guia completo com tudo que você precisa saber para completar 100% o jogo e outros diversos segredos que poucas pessoas sabem.
          </h6>
          <h2>R$ 131,90</h2>
        </DetailsGame>
      </div>

      <div>
        <img
          src="https://loja.gameforfun.com.br/wp-content/uploads/2021/06/Far-Cry-6-Xbox-One-Midia-Digital.jpg.webp"
          alt="Capa do jogo"
        />
        <DetailsGame>
          <h4>Far Cry 6</h4>
          <tt>RPG - Mundo Aberto - Ação</tt>
          <br />
          <ion-icon name="desktop"></ion-icon>
          <ion-icon name="logo-xbox"></ion-icon>
          <ion-icon name="logo-playstation"></ion-icon> <br />
          <h6>
          Comprador Far Cry 6 você receberá um guia de troféus para completar 100% o jogo além de diversos guias de localizações secretas de itens, armas e parceiros.
          </h6>
          <h2>R$ 53,90</h2>
        </DetailsGame>
      </div>

      <div>
        <img
          src="https://loja.gameforfun.com.br/wp-content/uploads/2021/05/Dying-Light-2-Xbox-One-Midia-Digital.jpg.webp"
          alt="Capa do jogo"
        />
        <DetailsGame>
          <h4>Dying Light 2</h4>
          <tt>RPG - Mundo Aberto - Ação</tt>
          <br />
          <ion-icon name="desktop"></ion-icon>
          <ion-icon name="logo-xbox"></ion-icon>
          <ion-icon name="logo-playstation"></ion-icon> <br />
          <h6>
            Há mais de 20 anos, em Harran, nós lutamos contra o vírus. E
            perdemos. Agora, estamos perdendo de novo. A Cidade, um dos últimos
            grandes povoados humanos, está dividida pelo conflito. A civilização
            voltou à Idade das Trevas. Mas eu ainda tenho esperança.
          </h6>
          <h2>R$ 99,90</h2>
        </DetailsGame>
      </div>
    </ContainerGameList>
  );
}
const DetailsGame = styled.legend`
  width: 100%;
  margin-top: 10px;
  margin-left: 20px;

  ion-icon {
    color: #ffffff;
    font-size: 48px;
    margin-top: 10px;
    margin-right: 20px;
  }
  tt {
    font-family: "Montserrat";
    font-weight: 300;
    font-size: 16px;
    color: #ffffff;
  }
  h2 {
    position: absolute;
    right: 28px;
    top: 72px;
    color: #30deff;
    font-size: 50px;
    font-weight: 700;
    font-family: "Montserrat";
  }
  h4 {
    color: #ffffff;
    font-size: 28px;
    font-weight: 500;
    font-family: "Montserrat";
  }
  h6 {
    margin-top: 10px;
    font-family: "Montserrat";
    font-weight: 400;
    font-size: 12px;
    color: #ffffff;
  }
`;

const ContainerGameList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 50px;
  div {
    display: flex;
    position: relative;

    width: 93%;
    border-radius: 10px;
    height: 190px;

    padding: 10px;
    margin-bottom: 10px;
    margin-top: 5px;

    background-color: #04015b;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
    :hover {
      cursor: pointer;
      box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.9);
    }
    img {
      width: 130px;
      border-radius: 10px;
    }
  }
`;
