import React from "react";
import { RiSearch2Line } from "react-icons/ri";
import insta from "../../img/insta.png";
import facebook from "../../img/face.png";
import wk from "../../img/wk.png";
import email from "../../img/mail.png";
import HomeBlock from "../HomeBlock";
import Attractions from "../Attractions";
import HomeSlider from "../HomeSlider";
import MapKg from "../MapKg";

const Hero = () => {
  return (
    <>
    <div id="hero">
      <div className="container">
        <div className="hero">
          <div className="hero--link">
            <div className="hero--link__title">
              <h1>
                Welcome to the amazing <br /> Kyrgyzstan!
              </h1>
              <div className="hero--link__title--input">
                <input type="text" placeholder="Where to go?" />
                <RiSearch2Line className="hero--link__title--input__luk" />
              </div>
              <p>
                Are you ready to embark on an exciting journey through the
                stunning country of Central Asia? We are ready to help you plan
                the perfect trip to Kyrgyzstan.
              </p>
            </div>
            <div className="hero--link__icons">
              <img src={insta} alt="" />
              <img src={facebook} alt="" />
              <img src={wk} alt="" />
              <img src={email} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <HomeBlock/>
    <Attractions/>
    <HomeSlider/>
    <MapKg/>
    </>
  );
};

export default Hero;
