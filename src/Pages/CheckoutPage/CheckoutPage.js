import styled from "styled-components";
import { useEffect, useState } from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Yodinha from "../../lib/images/Login-Driven.png";
import { useNavigate } from "react-router-dom";
import dayjs from "dayjs";
import axios from "axios";

export default function CheckoutPage() {
  //============= TESTE CODES =============================

  const dataCart = JSON.parse(localStorage.getItem("@cart"));

  const [infoProduct, setInfoProduct] = useState([]);
  const [prices, setPrices] = useState([]);
  let totalValue = 0;

  useEffect(() => {
    const promise = axios.get(
      "https://driven-gaming-store-fullstack.herokuapp.com/product"
    );

    promise.then((response) => {
      response.data.forEach((product) => {
        dataCart.forEach((item) => {
          if (product._id === item.id) {
            setInfoProduct((state) => [...state, product]);
            setPrices((state) => [...state, product.desconto]);
          } else {
            return [];
          }
        });
      });
    });

    promise.catch((response) => {
      console.log(response.data);
    });
  }, []);

  prices.map((prices) => {
    totalValue += Number(prices);
  });

  //============= TESTE CODE =============================

  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);

  //================== STATES PARA O FORM ===============
  const [adress, setAdress] = useState();
  const [bairro, setBairro] = useState();
  const [CEP, setCEP] = useState();
  const [phone, setPhone] = useState();
  const [reference, setReference] = useState();
  const [payment, setPayment] = useState();

  //================== STATES PARA O FORM ===============
  useEffect(() => {
    setUserData(JSON.parse(localStorage.getItem("user"))); //Pegando os dados do local storage.
  }, []);

  function completePayment(event) {
    event.preventDefault();

    if (adress && bairro && CEP && phone && payment) {
      const dataPayment = {
        email: userData.email,
        endereco: adress,
        district: bairro,
        cep: CEP,
        phoneContact: phone,
        reference: reference,
        valueOrder: totalValue.toFixed(2),
        payment: payment,
        date: dayjs().format("DD-MM-YY HH:mm:ss"),
        products: infoProduct
      };

      if (window.confirm("Deseja finalizar o pagamento?")) {
        console.log(dataPayment);
        navigate("/myorders")
      }
    } else {
      window.alert("Por favor entre com os valores para prosseguir...");
    }
  }

  return (
    <>
      <Header />
      {userData === null ? (
        <NotLogged>
          <h1>
            Para prosseguir você precisa efetuar o login da sua conta...
            <br />
            <br />
            -"E eu sou seu PAIIIIII!"
          </h1>
          <button onClick={() => navigate("/login")}>LOGIN</button>
          <img src={Yodinha} alt="Mestre yodaJedi" />
        </NotLogged>
      ) : (
        <ContainerCheckout>
          <h1>Entre com os dados:</h1>
          <form onSubmit={(event) => completePayment(event)}>
            <input
              type="text"
              placeholder="Digite o Endereço"
              onChange={(e) => {
                setAdress(e.target.value);
              }}
            ></input>
            <input
              type="text"
              placeholder="Digite o Bairro"
              onChange={(e) => {
                setBairro(e.target.value);
              }}
            ></input>
            <input
              type="text"
              placeholder="Digite a referência (opcional)"
              onChange={(e) => {
                setReference(e.target.value);
              }}
            ></input>
            <input
              type="number"
              placeholder="CEP (Apenas numeros)"
              onChange={(e) => {
                setCEP(e.target.value);
              }}
            ></input>
            <input
              type="tel"
              placeholder="Telefone para contato"
              onChange={(e) => {
                setPhone(e.target.value);
              }}
            ></input>
            <select
              placeholder="Selecione a forma de pagamento"
              onChange={(e) => {
                setPayment(e.target.value);
              }}
            >
              <option defaultValue="" disabled selected>
                Selecione a forma de pagamento
              </option>
              <option value="Boleto">Boleto</option>
              <option value="Cartão de Crédito">Cartão de Crédito</option>
              <option value="Pix">Pix</option>
            </select>
            <button onClick={() => navigate("/checkout")}>
              EFETUAR PAGAMENTO
            </button>
          </form>
          <h1>VALOR DO PEDIDO: R$ {totalValue.toFixed(2)}</h1>
        </ContainerCheckout>
      )}
      <Footer />
    </>
  );
}

const ContainerCheckout = styled.div`
  width: 100%;
  height: 93vh;
  margin-top: -3%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  input {
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
      cursor: not-allowed;
    }
  }

  form {
    width: 90%;
    display: flex;
    flex-direction: column;

    select {
      height: 60px;
      padding: 10px;
      border-radius: 10px;
    }

    tt {
      font-weight: 600;
      text-transform: uppercase;
      font-family: "Montserrat";
      margin-bottom: 10px;
    }
  }
  h1 {
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

const NotLogged = styled.div`
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
