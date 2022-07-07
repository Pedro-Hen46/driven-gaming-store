import styled from "styled-components";

export default function Header() {
  return (
    <ContainerHeader>
      <ion-icon name="planet"></ion-icon>
      <h1>Driven Gaming Store</h1>
    </ContainerHeader>
  );
}
const ContainerHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #000000;
  margin-bottom: -30px;

  ion-icon {
    color:  #30deff;
    font-size: 90px;
  }
  h1{
    color:  #30deff;
    margin-left: 20px;
    font-size: 30px;
    font-family: 'MuseoModerno';
  }
`;
