import React, {useEffect, useState} from 'react';
import img from "../../../img/issykkul.png"
import talas from "../../../img/talas.png"
import chui from "../../../img/chui.png"
import kul from "../../../img/kul.png"
import abad from "../../../img/abad.png"
import naryn from "../../../img/naryn.png"
import osh from "../../../img/osh.png"
import batken from "../../../img/batken.png"
import food from "../../../img/food.png"
import food2 from "../../../img/food2.png"
import temp from "../../../img/temp.png"
import Slider from "react-slick";
import balyk from "../../../img/balyk.png";
import {FaArrowRightLong} from "react-icons/fa6";
import {AiFillHeart} from "react-icons/ai";
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";

const IssykKyl = () =>{
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
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
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
    const [data,setData]=useState({})
    const {id} =useParams()
    console.log("hello")
    const navigate=useNavigate()
    const getPlaces=async ()=>{
        try{
            const res=await axios.get(`http://34.207.195.167/api/v1/places/region_detail/${id}/`)
            setData(res.data)
            console.log(res.data)
        }catch(error){
            console.error("your mistake")
        }
    }

    useEffect(()=>{
        getPlaces()
    },[id])

    return (
        <div id="kul">
            <div className="container">
                <div className="kul">
                    <div className="kul--first">
                      <div className="kul--first__img">
                          <img src={data.photo} alt=""/>
                          <img src={temp} alt=""/>
                      </div>
                        <div className="kul--first__title">
                            <h1>{data.name}</h1>
                            <p>{data.description}</p>
                        </div>
                    </div>
                    <div className="kul--second">
                        <div className="kul--second__img">
                            <img src={talas} alt=""/>
                            <img src={chui} alt=""/>
                            <img src={kul} alt=""/>
                            <img src={abad} alt=""/>
                            <img src={naryn} alt=""/>
                            <img src={osh} alt=""/>
                            <img src={batken} alt=""/>
                        </div>
                        <div className="kul--second__title">
                            <p>Talas</p>
                            <p>Chui</p>
                            <p>Issyk-Kyl</p>
                            <p>Jalal-Abad</p>
                            <p>Naryn</p>
                            <p>Osh</p>
                            <p>Batken</p>
                        </div>

                    </div>
                    <h1>What to try in Issyk-Kul?</h1>
                    <div className="kul--third">
                        <Slider {...settings}>

                            {
                            data.what_to_try && data.what_to_try.map((el)=>{
                                    return(
                                        <div className="kul--third__bottom" key={el.id}>
                                            <div className="kul--third__bottom--left">
                                                <h5>{el.name}</h5>
                                                <p>{el.description}</p>
                                            </div>
                                            <div className="kul--third__bottom--center">
                                                <img src={food} alt="" className="img"/>
                                                <div className="kul--third__bottom--center__img">
                                                    <img src={food} alt=""/>
                                                    <img src={food2} alt=""/>
                                                    <img src={food} alt=""/>
                                                </div>
                                            </div>
                                            <div className="kul--third__bottom--right">
                                                <h5>What is included in the dish</h5>
                                                <p>The main parts are "jelly" made of starch, noodles and hot sauce. There are many more
                                                    detailed ashlyanfu recipes in modern culinary practice. Someone claims that it is
                                                    not made with meat or vegetables. Some hold an alternative point of view. In some
                                                    cases, wheat noodles are recommended to be pulled out, as for lagman.
                                                </p>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </Slider>


                    </div>
                    <div className="kul--four">
                        <h1>Popular places</h1>
                        <div className="kul--four__cards">

                            {
                                data.places && data.places.map((el)=>{
                                    return(
                                        <div className="kul--four__cards--card">
                                            <img src={balyk} alt=""/>
                                            <div className="kul--four__cards--card__bottom">
                                                <h2>{el.name}</h2>
                                                <div className="kul--four__cards--card__bottom--center">
                                                    <h3>{el.average_rating}</h3>
                                                    <div>
                                                        <div></div>
                                                        <div></div>
                                                        <div></div>
                                                        <div></div>
                                                        <div></div>
                                                    </div>
                                                    <p>23 764 reviews</p>
                                                </div>
                                                <FaArrowRightLong className="kul--four__cards--card__bottom--icon"
                                                                  onClick={()=>{
                                                                      navigate(`/regions/${id}/${el.name}`)
                                                                  }}/>
                                            </div>
                                            <div className="kul--four__cards--card__icon" >
                                                <AiFillHeart className="kul--four__cards--card__icon--ai"/>
                                            </div>
                                        </div>
                                    )
                                })
                            }

                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default IssykKyl;