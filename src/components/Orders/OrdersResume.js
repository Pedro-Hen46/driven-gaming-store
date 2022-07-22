import styled from "styled-components";

export default function OrdersResume({ data }) {
  console.log(data);

  return (
    <ContainerResume>
      <h1>RESUMO DOS SEUS PEDIDOS</h1>
      {data.map((item, index) => (
        <ResumeOrder key={index}>
          <h3>STATUS DO PEDIDO: AGUARDANDO ENVIO ✈️</h3>
          <h2>  DADOS PARA ENTREGA ❤️</h2>
          <br />
          <h2>
            data de compra: <strong>{item.date}H</strong>
          </h2>
          <br />
          <h2>
            endereco de entrega: <strong>{item.endereco}</strong>
          </h2>
          <br />
          <h2>
            bairro: <strong>{item.district}</strong>
          </h2>
          <br />
          <h2>
            CEP: <strong>{item.cep}</strong>
          </h2>

          <br />
          <h2>
            telefone para contato: <strong>{item.phoneContact}</strong> 📱
          </h2>
          <br />
          <h2>
            valor do pedido: R${" "}
            <strong>{item.valueOrder.replace(".", ",")}</strong> 💰
          </h2>
          <br />
          <h2>
            forma de pagamento: <strong>{item.payment}</strong>
          </h2>
          <h5>PRODUTOS ADQUIRIDOS</h5>
          <Products key={index}>
            {item.products.map((product) => (
              <>
                <img src={product.images[0]} alt={product.titulo} />
                <div>
                  <h3>{product.titulo}</h3>
                  <h4>{product.categoria}</h4>
                  <br />
                  <h4>lancamento: {product.release}</h4>
                  <br />
                  <h4>Valor: R${product.desconto}</h4>
                </div>
              </>
            ))}
          </Products>
        </ResumeOrder>
      ))}
    </ContainerResume>
  );
}

const Products = styled.div`
  display: flex !important;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: auto;
  margin-top: 10px;
  padding: 20px;
  overflow-y: hidden;

  div {
    margin-left: 10px;
    margin-right: 20px;
    h3 {
      color: #30deff;
      font-size: 16px;
      font-weight: 600;
      text-transform: uppercase;
      font-family: "Montserrat";
      font-weight: 800;
    }
    h4 {
      font-family: "Montserrat";
      font-size: 14px;
      font-weight: 300;
      text-align: center;
      text-transform: uppercase;
    }
  }

  img {
    border-radius: 10px;
    object-fit: contain;
    height: 180px;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.5);
  }
`;

const ResumeOrder = styled.div`
  width: 95%;
  height: auto;
  border-radius: 15px;
  padding: 10px;
  background-color: white;
  margin-bottom: 25px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);

  strong {
    color: darkgrey;
    font-weight: 700;
    font-size: 16px;
  }

  h5 {
    z-index: 1;
    margin-top: 20px;
    color: darkgray;
    font-size: 16px;
    font-weight: 600;
    text-transform: uppercase;
    font-family: "Montserrat";
    text-align: center;
  }

  h3 {
    z-index: 1;
    margin-bottom: 20px;
    color: darkgray;
    font-size: 16px;
    font-weight: 600;
    text-transform: uppercase;
    font-family: "Montserrat";
    text-align: center;
  }

  display: flex;
  flex-direction: column;
  justify-content: center;
  h2 {
    color: darkgray;
    font-size: 16px;
    text-align: center;
    font-weight: 400;
    text-transform: uppercase;
    font-family: "Montserrat";
  }
`;

const ContainerResume = styled.div`
  width: 100%;
  height: 100%;
  margin-bottom: 50px;

  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    margin-top: 20px;
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
