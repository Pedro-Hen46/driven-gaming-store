import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Logo from "../../lib/images/testeLogoLogin.png";
import { useState, useContext } from "react";
import axios from 'axios';
import UserContext from '../../Context/userContext';

export default function LoginPage() {
  const { setToken, setName } = useContext(UserContext);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  function login(event) {
    event.preventDefault();
    const body = {
      email,
      password
    };
    setLoading(true);

    const promise = axios.post("https://driven-gaming-store-fullstack.herokuapp.com/login",
      body);
    promise.then((res) => {

      const config = {
        headers: {
          Authorization: `Bearer ${response.data.token}`,
        },
      };

      setToken({ ...response.data, config });
      setName(res.data.name)

      localStorage.setItem("user", JSON.stringify({ ...response.data, config }));
      setLoading(false);
      navigate("/");
    }
    )

    promise.catch(() => {
      setLoading(false);
      alert("falha de login");
    }
    );
  }

  function goToRegisterPage() {
    navigate("/register");
  }

  return (
    <ContainerLogin>
      <img src={Logo} alt="Logo da empresa" />

      <input disabled={loading ? true : false} type="email" placeholder="e-mail" onChange={e => setEmail(e.target.value)}></input>
      <input disabled={loading ? true : false} type="password" placeholder="senha" onChange={e => setPassword(e.target.value)}></input>
      <button onClick={login}>{loading ? "" : "Entrar"}</button>
      <span onClick={() => goToRegisterPage()}>Não tem conta? Cadastre-se agora!</span>
    </ContainerLogin>
  );
}

const ContainerLogin = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #000000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  img{
    width: 90%;
    height: 40%;
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
    margin-bottom: 20px;
    border-radius: 5px;
    padding: 10px;
    font-size: 16px;
    font-family: "Montserrat";
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
