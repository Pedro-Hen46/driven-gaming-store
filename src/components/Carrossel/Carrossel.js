import styled from "styled-components";

export default function Carrossel() {
  return (
    <ContainerCarrossel>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#000000"
          fillOpacity="1"
          d="M0,192L60,208C120,224,240,256,360,245.3C480,235,600,181,720,154.7C840,128,960,128,1080,133.3C1200,139,1320,149,1380,154.7L1440,160L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
        ></path>
      </svg>
      <GamesPromotion>
        <img
          src="https://loja.gameforfun.com.br/wp-content/uploads/2022/06/Call-Of-Duty-Modern-Warfare-II-Xbox-One-Midia-Digital.jpg.webp"
          alt="Capa do jogo"
        />
        <img
          src="https://loja.gameforfun.com.br/wp-content/uploads/2020/02/Resident-Evil-3-midia-digital-xbox-one.jpg.webp"
          alt="Capa do jogo"
        />
        <img
          src="https://loja.gameforfun.com.br/wp-content/uploads/2022/03/GTA-V-Xbox-Series-S-X-Nova-geracao-midia-digital.jpg.webp"
          alt="Capa do jogo"
        />
        <img
          src="https://loja.gameforfun.com.br/wp-content/uploads/2020/02/Red-Dead-Redemption-2-midia-digiital-xbox-one.jpg.webp"
          alt="Capa do jogo"
        />
      </GamesPromotion>
    </ContainerCarrossel>
  );
}

const ContainerCarrossel = styled.div`
  width: 100%;
`;

const GamesPromotion = styled.div`
  width: 100%;
  display: flex;
  overflow-y: hidden;

  padding: 2%;
  margin-top: -15%;
  img {
    object-fit: cover;
    border-radius: 10px;
    width: 30%;
    max-width: 250px;
    margin-left: 20px;
  }
`;
