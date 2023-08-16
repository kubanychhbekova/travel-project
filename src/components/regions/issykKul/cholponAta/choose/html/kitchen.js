import React from 'react';
import img from "../../../../../../img/issykkul.png";
import kitchen from "../../../../../../img/kitchen.png";
import kitchen1 from "../../../../../../img/kitchen1.png";
import {AiOutlineHeart} from "react-icons/ai";
import meat from "../../../../../../img/meat.png";
import mini from "../../../../../../img/mini.png";
import {GiCandleHolder, GiKnifeFork} from "react-icons/gi";
import {MdOutlineEmail, MdOutlineRoomService} from "react-icons/md";
import {IoWalletSharp} from "react-icons/io5";
import {BsGeoAltFill, BsTelephone} from "react-icons/bs";
import {CgLaptop} from "react-icons/cg";
import {FiArrowUpRight} from "react-icons/fi";
import Slider from "react-slick";
import balyk from "../../../../../../img/balyk.png";
import {FaArrowRightLong} from "react-icons/fa6";
import {useNavigate} from "react-router-dom";
import Review from "../../../../../review/review";


const Kitchen = () => {
    const settings = {
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
    const navigate = useNavigate()

    return (
        <div className="kitchen">
            <div className="kitchen--first">
                <div className="kitchen--first__title">
                    <h3>The best restaurants with reasonable prices</h3>
                    <p>Show all</p>
                </div>

                <div className="kitchen--first__cards">
                    <div className="kitchen--first__cards--card">
                        <img src={kitchen} alt=""/>
                        <div className="kitchen--first__cards--card__icon">
                            <AiOutlineHeart className="kitchen--first__cards--card__icon--ai"/>
                        </div>

                        <div className="kitchen--first__cards--card__bottom">
                            <h2>Ethno-cafe Dastorkon</h2>
                            <div className="kitchen--first__cards--card__bottom--center">
                                <div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                </div>
                                <p>Reviews: 13</p>
                            </div>
                            <p>$$ - $$$, Chinese, European, Asian</p>
                        </div>
                    </div>
                    <div className="kitchen--first__cards--card">
                        <img src={kitchen} alt=""/>
                        <div className="kitchen--first__cards--card__icon">
                            <AiOutlineHeart className="kitchen--first__cards--card__icon--ai"/>
                        </div>

                        <div className="kitchen--first__cards--card__bottom">
                            <h2>Ethno-cafe Dastorkon</h2>
                            <div className="kitchen--first__cards--card__bottom--center">
                                <div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                </div>
                                <p>Reviews: 13</p>
                            </div>
                            <p>$$ - $$$, Chinese, European, Asian</p>
                        </div>
                    </div>
                    <div className="kitchen--first__cards--card">
                        <img src={kitchen} alt=""/>
                        <div className="kitchen--first__cards--card__icon">
                            <AiOutlineHeart className="kitchen--first__cards--card__icon--ai"/>
                        </div>

                        <div className="kitchen--first__cards--card__bottom">
                            <h2>Ethno-cafe Dastorkon</h2>
                            <div className="kitchen--first__cards--card__bottom--center">
                                <div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                </div>
                                <p>Reviews: 13</p>
                            </div>
                            <p>$$ - $$$, Chinese, European, Asian</p>
                        </div>
                    </div>
                    <div className="kitchen--first__cards--card">
                        <img src={kitchen} alt=""/>
                        <div className="kitchen--first__cards--card__icon">
                            <AiOutlineHeart className="kitchen--first__cards--card__icon--ai"/>
                        </div>

                        <div className="kitchen--first__cards--card__bottom">
                            <h2>Ethno-cafe Dastorkon</h2>
                            <div className="kitchen--first__cards--card__bottom--center">
                                <div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                </div>
                                <p>Reviews: 13</p>
                            </div>
                            <p>$$ - $$$, Chinese, European, Asian</p>
                        </div>
                    </div>

                </div>
            </div>
            <div className="kitchen--second">
                <h2>Hotel Altamira </h2>
                <div className="kitchen--second__image">
                    <img src={kitchen1} alt=""/>
                    <img src={meat} alt=""/>
                    <img src={mini} alt=""/>
                </div>
                <div className="kitchen--second__bottom">
                    <div className="kitchen--second__bottom--left">
                        <h6>Ratings and reviews</h6>
                        <div className="kitchen--second__bottom--left__rating">
                            <h3>4.5</h3>
                            <div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                            <p>298 reviews</p>
                        </div>
                        <p className="kitchen--second__bottom--left__p"><span>№ 1 </span>of 23 Restaurants in Cholpon-Ata</p>
                        <div className="kitchen--second__bottom--left__line"></div>
                        <p className="kitchen--second__bottom--left__p2">ASSESSMENTS</p>
                        <div className="kitchen--second__bottom--left__icon">
                            <div className="kitchen--second__bottom--left__icon--title">
                                <GiKnifeFork/>
                                <p>Nutrition</p>
                            </div>
                            <div className="kitchen--second__bottom--left__icon--rating">
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                        </div>
                        <div className="kitchen--second__bottom--left__icon">
                            <div className="kitchen--second__bottom--left__icon--title">
                                <MdOutlineRoomService/>
                                <p>Service</p>
                            </div>
                            <div className="kitchen--second__bottom--left__icon--rating">
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                        </div>
                        <div className="kitchen--second__bottom--left__icon">
                            <div className="kitchen--second__bottom--left__icon--title">
                                <IoWalletSharp/>
                                <p>Price quality</p>
                            </div>
                            <div className="kitchen--second__bottom--left__icon--rating">
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                        </div>
                        <div className="kitchen--second__bottom--left__icon">
                            <div className="kitchen--second__bottom--left__icon--title">
                                <GiCandleHolder/>
                                <p>Atmosphere</p>
                            </div>
                            <div className="kitchen--second__bottom--left__icon--rating">
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                        </div>
                    </div>
                    <div className="kitchen--second__bottom--center">
                        <h3>More detailed</h3>
                       <div className="kitchen--second__bottom--center__first">
                           <h2>PRICE RANGE</h2>
                           <p>5 $ - 10 $</p>
                       </div>
                        <div className="kitchen--second__bottom--center__first ">
                            <h2>Specialized menu</h2>
                            <p>Подходит для вегетарианцев, Для веганов</p>
                        </div>
                        <div className="kitchen--second__bottom--center__first">
                            <h2>Meal time</h2>
                            <p>Breakfast, Lunch, Dinner, Brunch, Open Late,
                                Drinks</p>
                        </div>
                       <div className="kitchen--second__bottom--center__second">
                           <h2>Show all information</h2>
                           <p>services, description</p>
                       </div>

                    </div>
                    <div className="kitchen--second__bottom--right">
                        <h2>Location and contact details</h2>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d30221.7155233195!2d78.37295981182379!3d42.50217495467359!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sEthno-cafe%20Dastorkon!5e0!3m2!1sru!2skg!4v1691816290039!5m2!1sru!2skg"
                            width="335.604" height="135.5" allowFullScreen="" loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade">
                        </iframe>
                        <div className="kitchen--second__bottom--right__data">
                            <div className="kitchen--second__bottom--right__data--geo">
                                <BsGeoAltFill className="icon"/>
                                <p>107 Przhevalsky str., Karakol 722360
                                    Kyrgyzstan</p>
                            </div>
                            <div className="kitchen--second__bottom--right__data--geo">
                                <div>
                                    <CgLaptop className="icon"/>
                                    <p>Website</p>
                                    <FiArrowUpRight className="icon"/>
                                </div>
                                <div>
                                    <MdOutlineEmail className="icon"/>
                                    <p>Email</p>
                                    <FiArrowUpRight className="icon"/>
                                </div>
                            </div>
                            <div className="kitchen--second__bottom--right__data--geo">
                                <BsTelephone className="icon"/>
                                <p>+996 555 400 270</p>
                            </div>
                            <h6>Edit this directory object</h6>
                        </div>
                    </div>
                </div>
            </div>
         <Review/>
            <h1>Popular places</h1>
            <div className="kitchen--fourth">

                <Slider {...settings}>

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
                            <FaArrowRightLong className="popular--card__bottom--icon"/>
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
                            <FaArrowRightLong className="popular--card__bottom--icon"/>
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
                            <FaArrowRightLong className="popular--card__bottom--icon"/>
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
                            <FaArrowRightLong className="popular--card__bottom--icon"/>
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
                            <FaArrowRightLong className="popular--card__bottom--icon"/>
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
                            <FaArrowRightLong className="popular--card__bottom--icon"/>
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
                            <FaArrowRightLong className="popular--card__bottom--icon"/>
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
                            <FaArrowRightLong className="popular--card__bottom--icon"/>
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
    );
};

export default Kitchen;