import styled from 'styled-components'
import yoda from '../../lib/images/mestreYodaSad.png'

export default function EmptyOrders(){
    return(
        <ContainerOrders>
            <h1>"saia do lado sombrio da força, compre conosco, os melhores games para jedi sair do tédio aqui estão!"</h1>
            <br/><h1>-Yoda, mestre</h1>
            <tt>"NÃO COMPRE EM OUTRA LOJA JOVEM JEDI, SABIO TEM QUE SER..."</tt>
            <img src={yoda} alt="Mestre Yoda boladao" />
        </ContainerOrders>
    )
}

const ContainerOrders = styled.div`
  width: 100%;
  height: 93vh;
  margin-top: -3%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
background-color: black;
  
  h1 {
    z-index: 1;
    margin-top: -5%;
    margin-bottom: 20px;
    color: #ff0000;
    font-size: 28px;
    font-weight: 900;
    letter-spacing: 2px;
    text-transform: uppercase;
    font-family: "Montserrat";
    text-align: center;
    text-shadow: 0px 0px 20px rgba(255,0,0,0.9);
  }
  tt{
    width: 80%;
    z-index: 2;
    position: fixed;
    bottom: 60px;
    color: #ff0000;
    font-size: 18px;
    font-weight: 800;
    text-transform: uppercase;
    font-family: "Montserrat";
    text-align: center;
    text-shadow: 0px 0px 20px  rgba(48, 222, 255, 100);
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
