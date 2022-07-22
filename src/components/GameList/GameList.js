import { Link } from "react-router-dom";
import styled from "styled-components";

export default function GameList({ data, setCartItens, cartItens }) {

  function addItemOnCart() {

    const newItem = {
      id: data._id,
      qtd: 1,
    };
    const itemExists = cartItens.find(
      (item) => String(item.id) === String(data._id)
    );
    if (itemExists) {
      const cartUpdated = cartItens.map((item) => {
        if (item.id === data._id) {
          return {
            ...item,
            qtd: item.qtd + 1,
          };
        }
        return item;
      });
      setCartItens(cartUpdated);
    } else {
      setCartItens((state) => [...state, newItem]);
    }
    window.alert("Item adicionado no carrinho");
  }

  return (
    <ContainerGameList>
      <ContentDetails>
        <Link to={`/product/${data._id}`}>
          <img src={data.images[0]} alt={data.titulo} />
        </Link>
        <DetailsGame>
          <Link to={`/product/${data._id}`}>
            <h4>{data.titulo}</h4>
            <tt>{data.categoria}</tt>
          </Link>

          <PriceCart>
            <h2>R$ {data.desconto.replace(".", ",")}</h2>
            <ion-icon
              name="add-circle"
              onClick={() => addItemOnCart()}
            ></ion-icon>
          </PriceCart>
          
          <Link to={`/product/${data._id}`}>
            <h6>{data.descricao}</h6>
          </Link>

          <Link to={`/product/${data._id}`}>
            <PlataformsIcons>
              {data.console.map((item, index) => (
                <ion-icon name={item} key={index}></ion-icon>
              ))}
            </PlataformsIcons>
          </Link>
        </DetailsGame>
      </ContentDetails>
    </ContainerGameList>
  );
}
const PlataformsIcons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  ion-icon {
    font-size: 48px;
  }
`;
const PriceCart = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 2%;

  h2 {
    color: #30deff;
    font-size: 26px;
    font-weight: 700;
    font-family: "Montserrat";
    text-shadow: 0px 0px 20px rgba(48, 222, 255, 99);
  }
  ion-icon {
    margin-top: 0px !important;
    font-size: 38px !important;
    color: #30deff !important;
    transition: all 0.4s !important;
    :hover {
      cursor: pointer !important;
      filter: brightness(99) !important;
    }
  }
`;

const DetailsGame = styled.legend`
  width: 100%;
  margin-top: 10px;
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  position: relative;

  tt {
    font-family: "Montserrat";
    font-weight: 300;
    font-size: 0.8rem;
    color: #ffffff;
  }

  h4 {
    color: #ffffff;
    font-size: 1.2rem;
    font-weight: 500;
    font-family: "Montserrat";
  }
  h6 {
    margin-top: 10px;
    font-family: "Montserrat";
    font-weight: 400;
    font-size: 0.4rem;
    color: #ffffff;
  }
`;
const ContentDetails = styled.div`
  max-width: 430px;
  display: flex;
  position: relative;

  width: 94%;
  border-radius: 10px;
  min-height: 195px;
  height: auto;

  padding: 10px;
  margin-bottom: 10px;
  margin-top: 5px;

  background-color: #04015b;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  transition: all 0.2s linear;
  :hover {
    cursor: pointer;
    box-shadow: 0px 0px 20px rgba(48, 222, 255, 0.9);
  }

  ion-icon {
    color: #ffffff;
    font-size: 20px;
    margin-top: 10px;
    margin-right: 20px;
  }
`;

const ContainerGameList = styled.div`
  display: flex;
  justify-content: center !important;
  align-items: center !important;

  img {
    object-fit: cover;
    width: 130px;
    height: 175px;
    border-radius: 10px;
    box-shadow: 0px 0px 20px rgba(48, 222, 255, 0.9);
  }
`;
