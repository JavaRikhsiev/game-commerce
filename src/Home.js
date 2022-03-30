import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          src="https://estaticos.megainteresting.com/media/cache/1140x_thumb/uploads/images/gallery/5da5a6c65bafe84e843c986e/diccionario-gaming.jpg"
          alt=""
        />
        <div className="home_row">
          <Product
            id="121"
            title="PROPNIGHT"
            cost={49.99}
            image="https://cdn.akamai.steamstatic.com/steam/apps/1549180/header.jpg?t=1643051345"
            ranking={5}
            site="https://www.propnight.com/"
          />

          <Product
            id="122"
            title="PLAYERUNKNOWN'S BATTLEGROUNDS"
            cost={59.99}
            image="https://cs10.pikabu.ru/post_img/big/2018/10/06/0/1538775502134014043.jpg"
            ranking={4}
            site="https://www.propnight.com/"
          />
        </div>
        <div className="home_row">
          <Product
            id="123"
            title="PUBG: NEW STATE"
            cost={89.99}
            image="https://www.ixbt.com/img/n1/news/2021/8/4/pubg-new-state_large.jpg"
            ranking={5}
          />
          <Product
            id="124"
            title="Back 4 Blood"
            cost={29.99}
            image="https://i4.hurimg.com/i/hurriyet/75/750x422/6061ba964e3fe116d4a0ee48.jpg"
            ranking={5}
          />
          <Product
            id="125"
            title="PAYDAY2"
            cost={29.99}
            image="https://cdn.akamai.steamstatic.com/steam/apps/218620/header.jpg?t=1643366577"
            ranking={5}
          />
        </div>
        <div className="home_row">
          <Product
            id="125"
            title="The lean startup"
            cost={129.99}
            image="https://cdkeys.cheap/storage/photos/1/Thumbnails/fifa21.png"
            ranking={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
