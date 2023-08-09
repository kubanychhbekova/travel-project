import React from "react";
import { AiOutlineSearch, AiFillInstagram } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { SlSocialVkontakte } from "react-icons/sl";
import { HiOutlineMail } from "react-icons/hi";
import Header from "../header/header";

const Hero = () => {
  return (
    <div id="hero">
      <div className="container">
        <div className="hero">
          <div className="hero--link">
            <div className="hero--link__title">
              <h1>
                Welcome to the amazing <br /> Kyrgyzstan!
              </h1>
              <div className="hero--link__title--input">
                <input type="text" placeholder="Where to go?"/>
                <AiOutlineSearch  className="hero--link__title--input__luk"/>
              </div>
              <p>
                Are you ready to embark on an exciting journey through the
                stunning country of Central Asia? We are ready to help you plan
                the perfect trip to Kyrgyzstan.
              </p>
            </div>
            <div className="hero--ions">
              <AiFillInstagram />
              <BsFacebook />
              <SlSocialVkontakte />
              <HiOutlineMail />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
