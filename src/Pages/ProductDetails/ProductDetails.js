import { BackArrow, ContainerProduct, DemonstrationImages, ProductInfo, GameCompatibility, GamePrice, GameNormalPrice} from "./ProductStyles";
import Footer from "../../components/Footer/Footer";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import ReactPlayer from "react-player";

export default function ProductDetails() {
  const { idProductSelected } = useParams();
  const navigate = useNavigate();

  const [gameDetails, setGameDetails] = useState([]);

  const [cartItens, setCartItens] = useState(() => {
    const cartCache = localStorage.getItem("@cart");

    if (cartCache) {
      return JSON.parse(cartCache);
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem("@cart", JSON.stringify(cartItens));
  }, [cartItens]);

  useEffect(() => {
    const promise = axios.get(
      "https://driven-gaming-store-fullstack.herokuapp.com/product"
    );

    promise.then((response) => {
      response.data.forEach((item) => {
        if (item._id === idProductSelected) {
          setGameDetails(item);
        }
      });
    });
    promise.catch((error) => {
      console.log(error.message);
    });
  }, [idProductSelected]);

  function addItemOnCart() {
    const newItem = {
      id: idProductSelected,
      qtd: 1,
    };
    const itemExists = cartItens.find(
      (item) => String(item.id) === idProductSelected
    );

    if (itemExists) {
      const cartUpdated = cartItens.map((item) => {
        if (item.id === idProductSelected) {
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
      console.log(cartItens);
    }
    window.alert("Item adicionado no carrinho");
  }

  return (
  <>
    <ContainerProduct>
      {gameDetails.length === 0 ? (
        ""
      ) : (
        <>
          <DemonstrationImages>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 280">
              <path
                fill="#000000"
                fillOpacity="1"
                d="M0,192L60,208C120,224,240,256,360,245.3C480,235,600,181,720,154.7C840,128,960,128,1080,133.3C1200,139,1320,149,1380,154.7L1440,160L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
              ></path>
            </svg>

            {gameDetails.images.map((item, index) => {
              return <img key={index} src={item} alt={gameDetails.titulo} />;
            })}
          </DemonstrationImages>

          <ProductInfo>
            <h1>🎮 {gameDetails.titulo}</h1>
            <tt>{gameDetails.categoria}</tt>
            <div className="player-wrapper">
              <ReactPlayer
                className="react-player"
                url={gameDetails.video}
                width="98%"
                height="98%"
              />
            </div>
            <tt>{gameDetails.descricao}</tt>

            <GameCompatibility>
              {gameDetails.console.map((item, index) => (
                <ion-icon name={item} key={index}></ion-icon>
              ))}
            </GameCompatibility>

            <GameNormalPrice>
              <h3>DE R$ {gameDetails.preco.replace(".", ",")}</h3>
            </GameNormalPrice>

            <span>POR APENAS:</span>

            <GamePrice>
              <ion-icon name="cart"></ion-icon>
              <h2>R$ {gameDetails.desconto.replace(".", ",")}</h2>
            </GamePrice>

            <button onClick={() => addItemOnCart()}>COMPRAR</button>
          </ProductInfo>
        </>
      )}

      <BackArrow onClick={() => navigate("/")}>
        <ion-icon name="arrow-back"></ion-icon>
      </BackArrow>
    </ContainerProduct>
    
    <Footer />
  </>
  );
}
