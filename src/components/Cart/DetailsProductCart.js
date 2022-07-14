import styled from "styled-components";

export default function DetailsProductCart({ data }) {
  console.log(data)
  return (
    <ContainerDetailsProduct>
      <img src={data.images[0]} alt={data.titulo} />
      <DetailsProduct>
        <h4>{data.titulo}</h4>
        <h5>{data.categoria}</h5>
        <h5>Quantidade: 1{data.qtd}</h5>
        <h5>Valor unitário: R${data.desconto.replace(".", ",")}</h5>
        <h4>TOTAL: R$ {data.desconto.replace(".", ",")}</h4>
      </DetailsProduct>
    </ContainerDetailsProduct>
  );
}
const DetailsProduct = styled.div`
  width: 100%;
  height: 150px;
  background-color: #000000;
  border-radius: 10px;
  margin-left: -10px;
  box-shadow: 0px 0px 20px rgba(48, 222, 255, 99);


  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 4%;

  h4 {
    color: #30deff;
    font-size: 16px;
    font-weight: 700;
    font-family: "Montserrat";
  }

  h5 {
    color: #ffffff;
    font-size: 12px;
    font-weight: 700;
    font-family: "Montserrat";
  }
`;

const ContainerDetailsProduct = styled.div`
  width: 90%;
  border-radius: 10px;
  padding: 20px;

  display: flex;

  img {
    z-index: 1;
    object-fit: cover;
    width: 130px;
    height: 175px;
    border-radius: 10px;

    :hover{
      cursor: pointer;
    }
  }
`;
