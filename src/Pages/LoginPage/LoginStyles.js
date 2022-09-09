import styled from "styled-components";

export const ContainerLogin = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #000000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  overflow: hidden;
  form{
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  img {
    width: 500px;
    height: 320px;
    object-fit: contain;
    margin-bottom: 0px;
  }

  h1 {
    color: #30deff;
    font-size: 48px;
    font-family: "Montserrat";
    font-weight: 800;
  }
  input {
    height: 50px;
    width: 80%;
    margin-bottom: 10px;
    border-radius: 5px;
    padding: 10px;
    font-size: 16px;
    font-weight: 200;
    font-family: "Montserrat";
    :hover {
      cursor: pointer;
      box-shadow: 0px 0px 25px rgba(48, 222, 255, 0.9);
    }
  }
  button {
    background-color: #30deff;
    border: thin solid #30deff;
    height: 50px;
    width: 80%;
    margin-bottom: 20px;
    border-radius: 5px;
    padding: 10px;
    font-size: 18px;
    font-family: "Montserrat";
    font-weight: 600;
    letter-spacing: 5px;
    margin-bottom: 40px;
    transition: all 0.2s;

    :hover {
      cursor: pointer;
      box-shadow: 0px 0px 25px rgba(48, 222, 255, 0.9);
    }
  }
  span {
    font-size: 18px;
    font-family: "Montserrat";
    font-weight: 300;
    color: white;
    transition: all 0.2s;
    :hover {
      cursor: pointer;
      font-size: 19px;
      font-weight: 400;
    }
  }
`;
