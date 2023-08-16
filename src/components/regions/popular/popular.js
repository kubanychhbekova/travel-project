import React from 'react';
import img from "../../../img/issykkul.png";
import balyk from "../../../img/balyk.png";
import {FaArrowRightLong} from "react-icons/fa6";
import {useNavigate} from "react-router-dom";
import {AiFillHeart} from "react-icons/ai";
import Slider from "react-slick";

const Popular = () => {
    const navigate = useNavigate()
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
    return (
        <div className="popular">
            <Slider {...settings1}>
                <div className="popular--card">
                    <img src={balyk} alt=""/>
                    <div className="popular--card__bottom">
                        <h2>Cholpon-Ata</h2>
                        <div className="popular--card__bottom--center">
                            <h3>4.5</h3>
                            <div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                            <p>23 764 reviews</p>
                        </div>
                        <FaArrowRightLong className="popular--card__bottom--icon"
                                          onClick={() => {
                                              navigate("/issykKul/cholponAta")
                                          }}/>
                    </div>
                    <div className="popular--card__icon">
                        <AiFillHeart className="popular--card__icon--ai"/>
                    </div>
                </div>
                <div className="popular--card">
                    <img src={balyk} alt=""/>
                    <div className="popular--card__bottom">
                        <h2>Cholpon-Ata</h2>
                        <div className="popular--card__bottom--center">
                            <h3>4.5</h3>
                            <div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                            <p>23 764 reviews</p>
                        </div>
                        <FaArrowRightLong className="popular--card__bottom--icon"
                                          onClick={() => {
                                              navigate("/issykKul/cholponAta")
                                          }}/>
                    </div>
                    <div className="popular--card__icon">
                        <AiFillHeart className="popular--card__icon--ai"/>
                    </div>
                </div>
                <div className="popular--card">
                    <img src={balyk} alt=""/>
                    <div className="popular--card__bottom">
                        <h2>Cholpon-Ata</h2>
                        <div className="popular--card__bottom--center">
                            <h3>4.5</h3>
                            <div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                            <p>23 764 reviews</p>
                        </div>
                        <FaArrowRightLong className="popular--card__bottom--icon"
                                          onClick={() => {
                                              navigate("/issykKul/cholponAta")
                                          }}/>
                    </div>
                    <div className="popular--card__icon">
                        <AiFillHeart className="popular--card__icon--ai"/>
                    </div>
                </div>
                <div className="popular--card">
                    <img src={balyk} alt=""/>
                    <div className="popular--card__bottom">
                        <h2>Cholpon-Ata</h2>
                        <div className="popular--card__bottom--center">
                            <h3>4.5</h3>
                            <div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                            <p>23 764 reviews</p>
                        </div>
                        <FaArrowRightLong className="popular--card__bottom--icon"
                                          onClick={() => {
                                              navigate("/issykKul/cholponAta")
                                          }}/>
                    </div>
                    <div className="popular--card__icon">
                        <AiFillHeart className="popular--card__icon--ai"/>
                    </div>
                </div>
                <div className="popular--card">
                    <img src={balyk} alt=""/>
                    <div className="popular--card__bottom">
                        <h2>Cholpon-Ata</h2>
                        <div className="popular--card__bottom--center">
                            <h3>4.5</h3>
                            <div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                            <p>23 764 reviews</p>
                        </div>
                        <FaArrowRightLong className="popular--card__bottom--icon"
                                          onClick={() => {
                                              navigate("/issykKul/cholponAta")
                                          }}/>
                    </div>
                    <div className="popular--card__icon">
                        <AiFillHeart className="popular--card__icon--ai"/>
                    </div>
                </div>
                <div className="popular--card">
                    <img src={balyk} alt=""/>
                    <div className="popular--card__bottom">
                        <h2>Cholpon-Ata</h2>
                        <div className="popular--card__bottom--center">
                            <h3>4.5</h3>
                            <div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                            <p>23 764 reviews</p>
                        </div>
                        <FaArrowRightLong className="popular--card__bottom--icon"
                                          onClick={() => {
                                              navigate("/issykKul/cholponAta")
                                          }}/>
                    </div>
                    <div className="popular--card__icon">
                        <AiFillHeart className="popular--card__icon--ai"/>
                    </div>
                </div>
                <div className="popular--card">
                    <img src={balyk} alt=""/>
                    <div className="popular--card__bottom">
                        <h2>Cholpon-Ata</h2>
                        <div className="popular--card__bottom--center">
                            <h3>4.5</h3>
                            <div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                            <p>23 764 reviews</p>
                        </div>
                        <FaArrowRightLong className="popular--card__bottom--icon"
                                          onClick={() => {
                                              navigate("/issykKul/cholponAta")
                                          }}/>
                    </div>
                    <div className="popular--card__icon">
                        <AiFillHeart className="popular--card__icon--ai"/>
                    </div>
                </div>
                <div className="popular--card">
                    <img src={balyk} alt=""/>
                    <div className="popular--card__bottom">
                        <h2>Cholpon-Ata</h2>
                        <div className="popular--card__bottom--center">
                            <h3>4.5</h3>
                            <div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                            <p>23 764 reviews</p>
                        </div>
                        <FaArrowRightLong className="popular--card__bottom--icon"
                                          onClick={() => {
                                              navigate("/issykKul/cholponAta")
                                          }}/>
                    </div>
                    <div className="popular--card__icon">
                        <AiFillHeart className="popular--card__icon--ai"/>
                    </div>
                </div>
                <div className="popular--card">
                    <img src={balyk} alt=""/>
                    <div className="popular--card__bottom">
                        <h2>Cholpon-Ata</h2>
                        <div className="popular--card__bottom--center">
                            <h3>4.5</h3>
                            <div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                            <p>23 764 reviews</p>
                        </div>
                        <FaArrowRightLong className="popular--card__bottom--icon"
                                          onClick={() => {
                                              navigate("/issykKul/cholponAta")
                                          }}/>
                    </div>
                    <div className="popular--card__icon">
                        <AiFillHeart className="popular--card__icon--ai"/>
                    </div>
                </div>
            </Slider>




        </div>
    );
};

export default Popular;