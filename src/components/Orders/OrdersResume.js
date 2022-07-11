import styled from "styled-components";


export default function OrdersResume({ data }) {
  console.log(data);
  return (
    <ContainerResume>
      <h1>RESUMO DOS SEUS PEDIDOS</h1>
      
      <ResumeOrder>
          <h3>STATUS DO PEDIDO: AGUARDANDO ENVIO</h3>
          <div>
            <h2>DADOS PARA ENTREGA</h2>
            <br />
            <h2>data de compra: {data[0].date}H</h2>
            <br />
            <h2>endereco de entrega: {data[0].endereco}</h2>
            <br />
            <h2>bairro: {data[0].district}</h2>
            <br />
            <h2>CEP: {data[0].cep}</h2>


            <br />
            <h2>telefone para contato: {data[0].phoneContact}</h2>
            <br />
            <h2>valor do pedido: R$ {data[0].valueOrder.replace(".", ",")}</h2>
            <br />
            <h2>forma de pagamento: {data[0].payment}</h2>
          </div>
        </ResumeOrder>

        <h1>AINDA EM FASE DE DESENVOLVIMENTO</h1>
    </ContainerResume>
  );
}

const ResumeOrder = styled.div`
  width: 95%;
  height: auto;
  border-radius: 5px;
  padding: 10px;
  background-color: white;
  box-shadow: 0px 0px 20px rgba(0,0,0,0.3);

  h3 {
    z-index: 1;
    margin-bottom: 20px;
    color: darkgray;
    font-size: 16px;
    font-weight: 600;
    text-transform: uppercase;
    font-family: "Montserrat";
    text-align: center;
    /* text-shadow: 0px 0px 15px rgba(48, 222, 255, 0.8); */
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    h2 {
      color: darkgray;
      font-size: 16px;
      font-weight: 400;
      text-transform: uppercase;
      font-family: "Montserrat";
    }
  }
`;

const ContainerResume = styled.div`
  width: 100%;
  height: 92vh;
  margin-top: -20px;

  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    margin-top: 20%;
    z-index: 1;
    margin-bottom: 20px;
    color: #30deff;
    font-size: 26px;
    font-weight: 900;
    letter-spacing: 2px;
    text-transform: uppercase;
    font-family: "Montserrat";
    text-align: center;
    text-shadow: 0px 0px 15px rgba(48, 222, 255, 0.8);
  }
`;
