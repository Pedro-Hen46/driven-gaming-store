import styled from "styled-components";

export const AnimationLoading = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  left: 0;
  top: 35%;
  z-index: 1;
`;

export const ContainerGameList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
export const ContainerHome = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;

  :last-child {
    margin-bottom: 50px;
  }
  button {
    width: 80%;
    height: 50px;
    background-color: black;
    border: thin solid red;
    border-radius: 10px;
    color: white;
    font-weight: bold;
    font-size: 22px;
  }
`;
