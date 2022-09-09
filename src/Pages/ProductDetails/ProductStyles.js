import styled from "styled-components";

export const BackArrow = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 42px;
  height: 42px;
  background-color: rgba(48, 222, 255, 0.9);
  border-radius: 50%;
  left: 15px;
  top: 15px;
  z-index: 1;

  ion-icon {
    font-size: 38px;
    color: #ffffff;
  }

  transition: all 0.4s;
  :hover {
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.9);
    box-shadow: 0px 0px 20px rgba(48, 222, 255, 0.5);
  }
`;

export const GameNormalPrice = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40px;

  h3 {
    font-family: "Montserrat";
    font-size: 18px;
    font-weight: 300;
    text-decoration: line-through;
  }
`;

export const GamePrice = styled.div`
  display: flex;
  width: 100%;
  height: 40px;
  justify-content: center;
  align-items: center;
  h2 {
    font-family: "Montserrat";
    font-weight: 700;
    font-size: 48px;
    color: #30deff;
    text-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
  }
  ion-icon {
    font-size: 60px;
    color: #30deff;
    margin-right: 20px;
  }
`;

export const GameCompatibility = styled.div`
  display: flex;
  width: 100%;
  height: 50px;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 10px;

  ion-icon {
    font-size: 36px;
  }
`;

export const DemonstrationImages = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  overflow: auto;

  svg {
    position: absolute;
    top: 0;
    left: 0;
  }
  img {
    margin-top: 20px;
    margin-left: 5%;
    object-fit: cover;
    width: auto;
    max-width: 550px;

    border-radius: 5%;
    z-index: 1;

    box-shadow: 0px 0px 35px rgba(48, 222, 255, 0.5);
  }
`;

export const ProductInfo = styled.div`
  z-index: 1;
  width: 90%;
  height: auto;
  background-color: #ffffff;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
  margin-top: 10px;
  margin-bottom: 38px;

  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-family: "Montserrat";
    font-weight: 800;
    font-size: 26px;
    text-align: center;
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
      box-shadow: 0px 0px 30px rgba(48, 222, 255, 0.4);
    }
  }
  @keyframes animate {
    0% {
      box-shadow: 0px 0px 30px rgba(48, 222, 255, 0);
      font-size: 26px;
    }
    50% {
      box-shadow: 0px 0px 30px rgba(48, 222, 255, 0.7);
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
    max-width: 32rem;
    min-width: 2rem;

    height: 40%;
    max-height: 26rem;
    min-height: 14rem;

    position: relative;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    :hover {
      cursor: pointer;
      box-shadow: 0px 0px 20px rgba(48, 222, 255, 0.5);
    }

    /* padding-top: 56.25%; //Player ratio: 100 / (1280 / 720) */
  }

  .react-player {
    position: absolute;
  }
`;

export const ContainerProduct = styled.div`
  width: 100%;
  height: auto;
  background-color: #f0f1f3;

  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;

  span {
    font-family: "Montserrat";
    font-weight: 400;
    font-size: 18px;
    letter-spacing: 3px;
    margin-bottom: 10px;
  }
`;
