import styled from "styled-components";


export const ContainerCheckout = styled.div`
  width: 100%;
  height: 93vh;
  margin-top: -3%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  input {
    z-index: 1;
    background-color: black;
    color: white;
    height: 60px;
    border-radius: 10px;
    margin-bottom: 15px;
    margin-top: 5px;
    padding: 10px;
    font-family: "Montserrat";
    font-weight: 600;
    border: thin solid #30deff;

    :hover {
      cursor: pointer;
      box-shadow: 0px 0px 20px rgba(48, 222, 255, 99);
    }
  }

  form {
    z-index: 1;
    width: 90%;
    display: flex;
    flex-direction: column;

    select {
      height: 60px;
      padding: 10px;
      border-radius: 10px;
      :hover {
        cursor: pointer;

        box-shadow: 0px 0px 20px rgba(48, 222, 255, 99);
      }
    }

    tt {
      font-weight: 600;
      text-transform: uppercase;
      font-family: "Montserrat";
      margin-bottom: 10px;
    }
  }
  h1 {
    z-index: 1;
    margin-top: 0%;
    margin-bottom: 20px;
    color: #30deff;
    font-size: 22px;
    font-weight: 600;
    letter-spacing: 2px;
    text-transform: uppercase;
    font-family: "Montserrat";
    text-align: center;
    text-shadow: 0px 0px 20px rgba(48, 222, 255, 99);
  }
  img {
    position: fixed;
    bottom: -60px;
    z-index: 0;
  }
  button {
    z-index: 1;
    margin-top: 20px;
    display: flex;
    justify-content: center;
    align-items: center;

    height: 70px;
    background-color: #30deff;
    border: thin solid black;
    border-radius: 10px;
    letter-spacing: 3px;
    color: white;
    font-weight: 300;
    font-size: 18px;
    border: thin solid #30deff;
    margin-bottom: 10px;
    transition: linear 0.4s;

    ion-icon {
      font-size: 32px;
      margin-right: 20px;
    }

    :hover {
      cursor: pointer;
      color: #000000;
      font-weight: 600;
      box-shadow: 0px 0px 15px rgba(48, 222, 255, 0.8);
    }
  }
`;

export const NotLogged = styled.div`
  width: 100%;
  height: 93vh;
  margin-top: -3%;
  padding: 10px;
  background-color: black;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    margin-top: -200px;
    color: #30deff;
    font-size: 22px;
    font-weight: 500;
    font-family: "Montserrat";
    text-align: center;
    text-shadow: 0px 0px 20px rgba(48, 222, 255, 99);
  }
  img {
    position: fixed;
    bottom: -60px;
    z-index: 0;
  }
  button {
    z-index: 1;
    margin-top: 20px;
    display: flex;
    justify-content: center;
    align-items: center;

    width: 80%;
    height: 70px;
    background-color: black;
    border: thin solid black;
    border-radius: 10px;
    letter-spacing: 3px;
    color: white;
    font-weight: 300;
    font-size: 18px;
    border: thin solid #30deff;
    margin-bottom: 10px;
    transition: linear 0.4s;

    ion-icon {
      font-size: 32px;
      margin-right: 20px;
    }

    :hover {
      cursor: pointer;
      color: #30deff;
      font-weight: 600;
      box-shadow: 0px 0px 15px rgba(48, 222, 255, 0.8);
    }
  }
`;
