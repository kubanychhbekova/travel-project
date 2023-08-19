import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GrFormNextLink } from "react-icons/gr";
import girl from "../../img/girlkomuz.png";
import shyrdak from "../../img/shyrdak.png";
import burkut from "../../img/burkut.png";
import food from "../../img/kyrgyzfood.png";

const HomeSlider = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true,
                
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
};

  return (
    <div id="homeSlider">
      <div className="container">
        <Slider {...settings}>
          <div className="homeSlider--block">
            <img src={girl} alt="" />
            <div className="homeSlider--block__card">
              <h1>National kyrgyz musical instruments</h1>
              <p>
                The Kyrgyz began to use felt for the manufacture of carpets and
                other household items in antiquity. Various factors influenced
                the development and improvement of each type of Kyrgyz carpet
                art: living conditions, climate, natural conditions and social
                factors. The most popular type of felt carpet in Kyrgyzstan
                today is shyrdak. It is made using mosaic technique, which is
                one of the most difficult, while one of the most important
                qualities of shirdak is durability.
              </p>
              <div className="homeSlider--block__card--btn">
                <h2>More</h2>
                <GrFormNextLink />
              </div>
            </div>
          </div>
          <div className="homeSlider--block2">
            <img src={shyrdak} alt="" />
            <div className="homeSlider--block2__card2">
              <h1>Handicraft</h1>
              <p>
                The Kyrgyz began to use felt for the manufacture of carpets and
                other household items in antiquity. Various factors influenced
                the development and improvement of each type of Kyrgyz carpet
                art: living conditions, climate, natural conditions and social
                factors.The most popular type of felt carpet in Kyrgyzstan today
                is shyrdak. It is made using mosaic technique, which is one of
                the most difficult, while one of the most important qualities of
                shirdak is durability. The average service life of a shyrdak is
                about 100 years, sometimes even more.Making one shyrdak carpet
                is a labor-intensive process, so craftswomen need from 2 to 6
                months to make one carpet.
              </p>
              <div className="homeSlider--block2__card2--btn2">
                <h2>More</h2>
                <GrFormNextLink />
              </div>
            </div>
          </div>
          <div className="homeSlider--block3">
            <img src={burkut} alt="" />
            <div className="homeSlider--block3__card3">
              <h1>Guide to the Games of Kyrgyz Nomads</h1>
              <p>
                Even though the Kyrgyz people became sedentary or semi-nomad
                during the 20th century, they have kept a large part of their
                traditions and nomadic heritage, including several games which
                are still very popular today. Here are some of these games that
                contribute to making the Kyrgyz culture so charming, original
                and authentic:
              </p>
              <div className="homeSlider--block3__card3--btn3">
                <h2>More</h2>
                <GrFormNextLink />
              </div>
            </div>
          </div>
          <div className="homeSlider--block4">
            <img src={food} alt="" />
            <div className="homeSlider--block4__card4">
              <h1>Kitchen</h1>
              <p>
                Kyrgyzstan is a country where at the crossroads of the Great
                Silk Road, the traditional nomadic culture and the sedentary
                culture merged. A distinctive feature of Kyrgyz dishes is that
                they are all prepared exclusively from fresh products and are
                rarely stocked up for future use, and the recipes for their
                preparation, although they seem quite simple, in fact contain
                many subtleties that are rather difficult to master.
              </p>
              <div className="homeSlider--block4__card4--btn4">
                <h2>More</h2>
                <GrFormNextLink />
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default HomeSlider;
