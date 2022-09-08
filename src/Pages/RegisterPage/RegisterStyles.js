import styled from "styled-components";

export const ContainerRegister = styled.div`
width: 100%;
height: 100vh;
background-color: #000000;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding: 10px;
overflow-x: hidden;

form {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
img {
  height: 40%;
  object-fit: cover;
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
    box-shadow: 0px 0px 30px ${(props) => (props.yoda ? "rgba(81, 223, 59, 0.9)" : "rgba(255,0,0,0.9)")};
  }
}
button {
  background-color: ${(props) => (props.yoda ? "#51df3b" : "#ff0000")};
  border: thin solid ${(props) => (props.yoda ? "#51df3b" : "#ff0000")};
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
    box-shadow: 0px 0px 30px ${(props) => (props.yoda ? "rgba(81, 223, 59, 0.9)" : "rgba(255,0,0,0.9)")};
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
