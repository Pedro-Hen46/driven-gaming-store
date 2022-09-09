import { NotLogged, ContainerCheckout } from "./CheckoutStyles";
import { useEffect, useState } from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Yodinha from "../../lib/images/Login-Driven.png";
import { useNavigate } from "react-router-dom";
import dayjs from "dayjs";
import axios from "axios";

export default function CheckoutPage() {

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


  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);

  const [adress, setAdress] = useState();
  const [bairro, setBairro] = useState();
  const [CEP, setCEP] = useState();
  const [phone, setPhone] = useState();
  const [reference, setReference] = useState();
  const [payment, setPayment] = useState();

  useEffect(() => {
    setUserData(JSON.parse(localStorage.getItem("user"))); //Pegando os dados do local storage.
  }, []);

  function completePayment(event) {
    event.preventDefault();

    if (adress && bairro && CEP && phone && payment) {
      if (window.confirm("Deseja finalizar o pagamento?")) {
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
          products: infoProduct,
        };
        const promise = axios.post(
          "https://driven-gaming-store-fullstack.herokuapp.com/myorders",
          dataPayment
        );

        promise.then((response) => {
          console.log(response.data);
          localStorage.setItem("@cart", `[]`);
          navigate("/myorders");
        });

        promise.catch((error) => {
          console.log(error);
        });
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
