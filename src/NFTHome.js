import React from "react";
import "./Home.css";
import Product from "./Product";

function NFTHome() {
  return (
    <div className="home">
      <div className="home_container">
        <h2 className="title">Welcome to NFT World!</h2>
        <img
          className="home_image"
          src="https://bored.ai/static/media/home-bottom-background.9b453f93.jpg"
          alt=""
        />
        <div className="home_row">
          <Product
            id="01"
            title="gK ATM UpTemp Black Volt"
            cost={3280.58}
            image="https://lh3.googleusercontent.com/UzRQJFlIxBARinSYcjk3ir_7bOJGg4unbuQRlSC9qqZLzlIUIj2Jaew1IjvwXAEItnRiygfc8i6G8pRJg8vgtlQq5w_LLiSkEnSGM-8=w600"
            ranking={5}
            site="https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/28536019139059307169089330544806946670165581714995785789713491360814660059137"
          />

          <Product
            id="02"
            title="Team Vitality | Team Outfit"
            cost={494.34}
            image="https://lh3.googleusercontent.com/SiH1KDbIm8s7hD_ByAuiZqFHWk9pY2u_IeyKM79eWgpPoaJUFPOKIEUlhDypJWbW5qMJZp4XzOctCSzVYcj2Xdzgpv4UjiWABkf37w"
            ranking={4}
            site="https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/10369340840379958852723926418477214703758193212271800906260902673535979225098"
          />
        </div>
        <div className="home_row">
          <Product
            id="03"
            title="Leon Goretzka"
            cost={829.9}
            image="https://lh3.googleusercontent.com/CCdXh5drsE4G0UrG2ssp4kUrqieRUoN-rsWiNt2P9j2JJvK_gU086apSI4xzG5svpLWbYlyFl6Wje2_7yOELlOs=s0"
            ranking={5}
            site="https://opensea.io/assets/0x094634cf5ec4b34b7f47bcb2c03c1c9f48e1ece8/138"
          />
          <Product
            id="04"
            title="King"
            cost={659.12}
            image="https://lh3.googleusercontent.com/MPAF2qbvGQO--h50ILCSBZQX9kOfvSx5bdtkh7US4Wjw9aOhtvWAP8bKiF3f4YvlFcut-ptnKdhP4Kt9l5I_zRqPsJIK21jdRJqZuFM"
            ranking={5}
            site="https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/74191077373885392357728999498886757223638773744017341378141489299112150958090"
          />
          <Product
            id="05"
            title="Ninjas in Pyjamas | Team Gloves"
            cost={622.02}
            image="https://lh3.googleusercontent.com/Xdb8Mg0FvA-rwnseywsSZxRM4C08nBKmznuqsJDrhPFMnBQcq6AOE23Qsbpluo08rzDCPpGfNbxyYhpVmBQEeb8K273GNfl5iURwJQ"
            ranking={5}
            site="https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/10369340840379958852723926418477214703758193212271800906260902663640374575139"
          />
        </div>
        <div className="home_row">
          <Product
            id="06"
            title="gK UA Chef Coy Fish"
            cost={3277.37}
            image="https://lh3.googleusercontent.com/HyMy5pJVsUUfUXYypM083Ye_9dZE5VJ8AXKT_6cRBsMdPIAUqNLwN8lAH4kxYFMfr7ELlF9yNcezVgiX6s5VO5A3fzVlZOUKnRPM=w600"
            ranking={5}
            site="https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/28536019139059307169089330544806946670165581714995785789713491361914171686913"
          />
        </div>
      </div>
    </div>
  );
}

export default NFTHome;
