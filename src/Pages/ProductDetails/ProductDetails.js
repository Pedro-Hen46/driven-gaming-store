import Footer from "../../components/Footer/Footer";
import styled from "styled-components";
import ReactPlayer from "react-player";

export default function ProductDetails() {
  return (
    <ContainerProduct>
      <DemonstrationImages>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#000000"
            fillOpacity="1"
            d="M0,192L60,208C120,224,240,256,360,245.3C480,235,600,181,720,154.7C840,128,960,128,1080,133.3C1200,139,1320,149,1380,154.7L1440,160L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
          ></path>
        </svg>
        <img
          src="https://loja.gameforfun.com.br/wp-content/uploads/2020/02/Red-Dead-Redemption-2-midia-digiital-xbox-one.jpg.webp"
          alt="Capa do jogo"
        />

        <img
          src="https://uploads.jovemnerd.com.br/wp-content/uploads/2018/08/red-dead-redemption-2-portugues-1210x540.png"
          alt="Capa do jogo"
        />
        <img
          src="https://meups.com.br/wp-content/uploads/2018/10/Capa-16.jpg"
          alt="Capa do jogo"
        />
        <img
          src="https://uploads.jovemnerd.com.br/wp-content/uploads/2018/08/red-dead-redemption-2-portugues-1210x540.png"
          alt="Capa do jogo"
        />
      </DemonstrationImages>

      <ProductInfo>
        <h1>Red dead redemption 2 midia digital - pc/ps4/xbox</h1>
        <div className="player-wrapper">
          <ReactPlayer
            className="react-player"
            url="https://www.youtube.com/watch?v=gmA6MrX81z4&ab_channel=RockstarGames"
            width="98%"
            height="98%"
          />
        </div>
        <tt>
          Red Dead Redemption 2 jogo Xbox One mídia digital Estados Unidos,
          1899. O fim da era do velho oeste começou, e as autoridades estão
          caçando as últimas gangues de fora da lei que restam. Os que não se
          rendem, nem sucumbem, são mortos. Depois de tudo dar errado durante um
          roubo em uma cidade do oeste chamada Blackwater, Arthur Morgan e a
          gangue Van der Linde são forçados a fugir.
        </tt>

        <button>COMPRAR</button>
      </ProductInfo>

      <Footer />
    </ContainerProduct>
  );
}
const DemonstrationImages = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  overflow: auto;

  svg {
    position: absolute;
    top: 0;
  }
  img {
    margin-top: 20px;
    margin-left: 5%;
    object-fit: cover;
    width: auto;
    max-width: 550px;

    border-radius: 5%;
    z-index: 1;

    :first-child {
      margin-right: 5%;
    }
  }
`;

const ProductInfo = styled.div`
  z-index: 1;
  width: 95%;
  height: auto;
  background-color: #ffffff;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
  margin-top: 10px;

  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-family: "Montserrat";
    font-weight: 700;
    font-size: 26px;
    text-transform: uppercase;
  }
  tt {
    font-family: "Montserrat";
    font-weight: 300;
    font-size: 16px;
  }
  button {
    margin-top: 20px;
    height: 80px;
    width: 100%;
    border-radius: 10px;
    border: thin solid #30deff;
    background-color: #30deff;

    font-family: "Montserrat";
    letter-spacing: 4px;
    font-weight: 700;
    font-size: 26px;
    text-transform: uppercase;

    animation: animate 2s linear infinite;
    :hover {
      cursor: pointer;
    }
  }
  @keyframes animate {
    0% {
      box-shadow: 0px 0px 30px rgba(48, 222, 255, 0);
      font-size: 26px;
    }
    50% {
      box-shadow: 0px 0px 30px rgba(48, 222, 255, 0.99);
      font-size: 30px;
    }
    100% {
      box-shadow: 0px 0px 30px rgba(48, 222, 255, 0);
      font-size: 26px;
    }
  }
  .player-wrapper {
    margin-top: 20px;
    margin-bottom: 20px;
    background-color: rgba(0, 0, 0, 0.9);
    border-radius: 10px;
    width: 100%;
    height: 200px;
    position: relative;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    :hover {
      cursor: pointer;
      box-shadow: 0px 0px 20px rgba(48, 222, 255, 0.8);
    }

    /* padding-top: 56.25%; //Player ratio: 100 / (1280 / 720) */
  }

  .react-player {
    position: absolute;
  }
`;

const ContainerProduct = styled.div`
  width: 100%;
  height: auto;
  background-color: #f0f1f3;

  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
`;
