import React, {useState} from 'react';
import img from "../../../img/issykkul.png";
import balyk from "../../../img/balyk.png";
import kosh from "../../../img/koshkol.png";
import {FaArrowRightLong} from "react-icons/fa6";
import {useNavigate} from "react-router-dom";
import {AiFillHeart} from "react-icons/ai";
import Slider from "react-slick";

const Popular = () => {
    const settings1 = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
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
    const regions=[
        {
            id:1,
            name:"Cholpon-Ata",
            img:balyk,
            review:122,
            rating:4.5,


        },
        {
            id:2,
            name:"Balykchy",
            img:kosh,
            review:23764,
            rating:4.5,
        },
        {
            id:3,
            name:"Kosh-Köl",
            img:balyk,
            review:23764,
            rating:4.5,
        },
        {
            id:4,
            name:"Tamchy",
            img:balyk,
            review:23764,
            rating:4.5,
        },
        {
            id:5,
            name:"Tüp",
            img:balyk,
            review:23764,
            rating:4.5,
        },
        {
            id:6,
            name:"Karakol",
            img:balyk,
            review:23764,
            rating:4.5,
        },
        {
            id:7,
            name:"Barskoon",
            img:balyk,
            review:23764,
            rating:4.5,
        },
        {
            id:8,
            name:"Jeti-Oguz",
            img:balyk,
            review:23764,
            rating:4.5,
        },
        {
            id:9,
            name:"Jeti-Oguz",
            img:balyk,
            review:23764,
            rating:4.5,
        },
    ]
    return (
        <div className="popular">
            <Slider {...settings1}>
                {
                    regions.map((el)=>{
                        return(
                            <div className="popular--card" key={el.id}>
                                <img src={el.img} alt=""/>
                                <div className="popular--card__bottom">
                                    <h2>{el.name}</h2>
                                    <div className="popular--card__bottom--center">
                                        <h3>{el.rating}</h3>
                                        <div>
                                            <div></div>
                                            <div></div>
                                            <div></div>
                                            <div></div>
                                            <div></div>
                                        </div>
                                        <p>{el.review} reviews</p>
                                    </div>
                                    <FaArrowRightLong className="popular--card__bottom--icon"/>
                                </div>
                                <div className="popular--card__icon"
                               >
                                            <AiFillHeart className="popular--card__icon--ai"  />
                                </div>
                            </div>
                        )
                    })
                }

            </Slider>




        </div>
    );
};

export default Popular;