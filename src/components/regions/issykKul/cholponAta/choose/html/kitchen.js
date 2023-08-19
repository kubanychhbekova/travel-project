import React, {useState} from 'react';
import img from "../../../../../../img/issykkul.png";
import kitchen from "../../../../../../img/kitchen.png";
import kitchen1 from "../../../../../../img/kitchen1.png";
import kitchen2 from "../../../../../../img/kitchen2.png";
import kitchen3 from "../../../../../../img/kitchen3.png";
import kitchen4 from "../../../../../../img/kitchen4.png";
import {AiOutlineHeart} from "react-icons/ai";
import meat from "../../../../../../img/meat.png";
import mini from "../../../../../../img/mini.png";
import {GiCandleHolder, GiKnifeFork} from "react-icons/gi";
import {MdOutlineEmail, MdOutlineRoomService} from "react-icons/md";
import {IoWalletSharp} from "react-icons/io5";
import {BsGeoAltFill, BsTelephone} from "react-icons/bs";
import {CgLaptop} from "react-icons/cg";
import {FiArrowUpRight} from "react-icons/fi";
import Review from "../../../../../review/review";
import Popular from "../../../../popular/popular";


const Kitchen = () => {
    const [handleKitchen,setHandleKitchen]=useState(1)
    const kitchens = [
        {
            id: 1,
            name: "Ethno-cafe Dastorkon",
            rating: 4.5,
            img: kitchen,
            reviews: 13,
            price: "5$-10$",
            address: "107 Przhevalsky str., Karakol 722360 Kyrgyzstan",
            tel: "+996 555 400 270",
            title: "$$ - $$$, Russian, Canadian",

        },
        {
            id: 2,
            name: "Cafe Nomad",
            rating: 3,
            img: kitchen2,
            reviews: 43,
            price: "5$-10$",
            address: "107 Przhevalsky str., Karakol 722360 Kyrgyzstan",
            tel: "+996 555 400 270",
            title: "$$ - $$$, Chinese, European, Asian",
        },
        {
            id: 3,
            name: "Stealth",
            rating: 4,
            img: kitchen3,
            reviews: 26,
            price: "5$-15$",
            address: "107 Przhevalsky str., Karakol 722360 Kyrgyzstan",
            tel: "+996 555 400 270",
            title: "$$ - $$$, Asian",
        },
        {
            id: 4,
            name: "Cafe Zarina",
            rating: 3.6,
            img: kitchen4,
            reviews: 26,
            price: "5$-15$",
            address: "107 Przhevalsky str., Karakol 722360 Kyrgyzstan",
            tel: "+996 555 400 270",
            title: "$$ - $$$, Bar, European, Asian, Oriental",
        },
    ]
    const findHotel=kitchens.find((el)=>el.id===handleKitchen)
    const fullCircles = Math.floor(findHotel.rating);
    const hasHalfCircle = findHotel.rating - fullCircles >= 0.5;
    const emptyCircles = 5 - Math.ceil(findHotel.rating);
    return (
        <div className="kitchen">
            <div className="kitchen--first">
                <div className="kitchen--first__title">
                    <h3>The best restaurants with reasonable prices</h3>
                    <p>Show all</p>
                </div>

                <div className="kitchen--first__cards">

                    {
                        kitchens.map((el)=>{
                            const fullCircles = Math.floor(el.rating);
                            const hasHalfCircle = el.rating - fullCircles >= 0.5;
                            const emptyCircles = 5 - Math.ceil(el.rating);
                            return(
                                <div className="kitchen--first__cards--card" key={el.id} onClick={()=>{
                                    setHandleKitchen(el.id)
                                }}>
                                    <img src={el.img} alt=""/>
                                    <div className="kitchen--first__cards--card__icon">
                                        <AiOutlineHeart className="kitchen--first__cards--card__icon--ai"/>
                                    </div>

                                    <div className="kitchen--first__cards--card__bottom">
                                        <h2>{el.name}</h2>
                                        <div className="kitchen--first__cards--card__bottom--center">
                                            <div className="rating-circles">
                                                {Array(fullCircles).fill().map((_, index) => (
                                                    <div key={index} className="green-circle"></div>
                                                ))}
                                                {hasHalfCircle && <div className="half-circle"></div>}
                                                {Array(emptyCircles).fill().map((_, index) => (
                                                    <div key={index} className="empty-circle"></div>
                                                ))}
                                            </div>
                                            <p>Reviews: {el.reviews}</p>
                                        </div>
                                        <p>{el.title}</p>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
            <div className="kitchen--second">
                <h2>{findHotel.name}</h2>
                <div className="kitchen--second__image">
                    <img src={kitchen1} alt=""/>
                    <img src={meat} alt=""/>
                    <img src={mini} alt=""/>
                </div>
                <div className="kitchen--second__bottom">
                    <div className="kitchen--second__bottom--left">
                        <h6>Ratings and reviews</h6>
                        <div className="kitchen--second__bottom--left__rating">
                            <h3>{findHotel.rating}</h3>
                            <div className="rating-circles">
                                {Array(fullCircles).fill().map((_, index) => (
                                    <div key={index} className="green-circle"></div>
                                ))}
                                {hasHalfCircle && <div className="half-circle"></div>}
                                {Array(emptyCircles).fill().map((_, index) => (
                                    <div key={index} className="empty-circle"></div>
                                ))}
                            </div>
                            <p>{findHotel.reviews} reviews</p>
                        </div>
                        <p className="kitchen--second__bottom--left__p"><span>№ 1 </span>of 23 Restaurants in
                            Cholpon-Ata</p>
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
                                <p>{findHotel.address}</p>
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
                                <p>{findHotel.tel}</p>
                            </div>
                            <h6>Edit this directory object</h6>
                        </div>
                    </div>
                </div>
            </div>
            <Review/>
            <h1>Popular places</h1>
            <Popular/>
        </div>
    );
};

export default Kitchen;