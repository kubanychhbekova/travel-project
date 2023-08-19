import React, {useState} from 'react';
import img from "../../../../../../img/issykkul.png";
import hotel from "../../../../../../img/hotel.png";
import hotel1 from "../../../../../../img/hotel1.png";
import hotel2 from "../../../../../../img/hotel2.png";
import hotel3 from "../../../../../../img/hotel3.png";
import hotel4 from "../../../../../../img/hotel4.png";
import hotel02 from "../../../../../../img/hotel02.png";
import hotel03 from "../../../../../../img/hotel03.png";
import hotel05 from "../../../../../../img/hotel05.png";
import hotel04 from "../../../../../../img/hotel04.png";
import hotel06 from "../../../../../../img/hotel06.png";
import {FaArrowRightLong} from "react-icons/fa6";
import {AiOutlineHeart} from "react-icons/ai";
import {FiShare2} from "react-icons/fi";
import {IoBedOutline, IoCarOutline} from "react-icons/io5";
import {BiBath} from "react-icons/bi";
import {MdBalcony, MdOutlinePets, MdOutlineTv} from "react-icons/md";
import {GiKnifeFork} from "react-icons/gi";
import {BsSnow, BsTelephone, BsWifi} from "react-icons/bs";
import {TbWashMachine} from "react-icons/tb";
import {PiBatteryPlusVertical} from "react-icons/pi";
import {HiOutlineOfficeBuilding} from "react-icons/hi";
import Review from "../../../../../review/review";

const Hotels = () => {
    const [hotelName,setHotelName]=useState(1)
    const hotels = [
        {
            id: 1,
            img: hotel,
            name: "Hotel Altamira",
            rating: 4.5,
            reviews: 122,
            km: 1.35,
            img1: hotel1,
            img2: hotel2,
            img3: hotel3,
            img4:hotel4,
            address: "107 Przhevalsky str., Karakol 722360",
            plus: ["3 Bedrooms", "2 Bathrooms", "3 Cars/2 Bikes", "0 Pets Allowed"],
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." ,
            description2:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",

            price: "$ 1000 - $ 2000",

        },
        {
            id: 2,
            img: hotel02,
            name: "Asia+",
            rating: 4.5,
            reviews: 122,
            km: 1.35,
            img1: hotel1,
            img2: hotel2,
            img3: hotel3,
            img4:hotel4,
            address: "210 ул. Киевская, Бишкек",
            plus: ["4 Bedrooms", "3 Bathrooms", "3 Cars/3 Bikes", "0 Pets Allowed"],
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n" +
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            price: "$ 1500 - $ 3000",

        },
        {
            id: 3,
            img: hotel03,
            name: "Aurora",
            rating: 4.5,
            reviews: 122,
            km: 1.35,
            img1: hotel1,
            img2: hotel2,
            img3: hotel3,
            img4:hotel4,
            address: "ул.Ала-Арчинская 80 Бишкек, 720064",
            plus: ["2 Bedrooms", "2 Bathrooms", "3 Cars/3 Bikes", "0 Pets Allowed"],
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n" +
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            price: "$ 1500 - $ 2000",

        },
        {
            id: 4,
            img: hotel04,
            name: "Hotel Altamira",
            rating: 4.5,
            reviews: 187,
            km: 1.17,
            img1: hotel1,
            img2: hotel2,
            img3: hotel3,
            img4:hotel4,
            address: "210 ул. Киевская, Бишкек",
            plus: ["4 Bedrooms", "3 Bathrooms", "3 Cars/3 Bikes", "0 Pets Allowed"],
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n" +
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            price: "$ 1500 - $ 3000",

        },
        {
            id: 5,
            img: hotel05,
            name: "Hotel Amir",
            rating: 4.5,
            reviews: 187,
            km: 1.35,
            img1: hotel1,
            img2: hotel2,
            img3: hotel3,
            img4:hotel4,
            address: "210 ул. Киевская, Бишкек",
            plus: ["4 Bedrooms", "3 Bathrooms", "3 Cars/3 Bikes", "0 Pets Allowed"],
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n" +
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            price: "$ 1500 - $ 3000",

        },
        {
            id: 6,
            img: hotel06,
            name: "Grand Hotel ",
            rating: 4.5,
            reviews: 187,
            km: 1.35,
            img1: hotel1,
            img2: hotel2,
            img3: hotel3,
            img4:hotel4,
            address: "210 ул. Киевская, Бишкек",
            plus: ["4 Bedrooms", "3 Bathrooms", "3 Cars/3 Bikes", "0 Pets Allowed"],
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n" +
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            price: "$ 1500 - $ 3000",

        },
    ]
    const hotelFind=hotels.find((el)=>el.id===hotelName)
    return (
        <div className="hotel">
            <div className="hotel--first">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3427.7824838135143!2d77.07138091892358!3d42.64726222139206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3884f13ef943156b%3A0xb9927fc9c380d0d8!2z0KfQvtC70L_QvtC9LdCQ0YLQsA!5e0!3m2!1sru!2skg!4v1691645933075!5m2!1sru!2skg"
                    width="100%" height="300" allowFullScreen="" loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className="hotel--second">
                <div className="hotel--second__title">
                    <h2>The best hotels nearby</h2>
                    <p>Показать все</p>
                </div>
                <div className="hotel--second__cards">
                    {
                        hotels.map((el) => {
                            return (
                                <div className="hotel--second__cards--card" key={el.id}>
                                    <img src={el.img} alt=""/>
                                    <div className="hotel--second__cards--card__icon">
                                        <AiOutlineHeart className="hotel--second__cards--card__icon--ai"/>
                                    </div>

                                    <div className="hotel--second__cards--card__bottom">
                                        <h2>{el.name}</h2>
                                        <div className="hotel--second__cards--card__bottom--center">
                                            <div>
                                                <div></div>
                                                <div></div>
                                                <div></div>
                                                <div></div>
                                                <div></div>
                                            </div>
                                            <p>{el.reviews} reviews</p>
                                        </div>
                                        <p>km from here: {el.km}</p>
                                        <FaArrowRightLong className="hotel--second__cards--card__bottom--icon" onClick={()=>{
                                            setHotelName(el.id)
                                        }}/>
                                    </div>
                                </div>
                            )
                        })
                    }


                </div>
            </div>
            {
                <div className="hotel--third">
                    <h2>{hotelFind.name}</h2>
                    <div className="hotel--third__image">
                        <img src={hotelFind.img1} alt=""/>
                        <img src={hotelFind.img2} alt=""/>
                        <div>
                            <img src={hotelFind.img3} alt=""/>
                            <img src={hotelFind.img4} alt=""/>
                        </div>
                    </div>
                    <div className="hotel--third__bottom">
                        <div className="hotel--third__bottom--left">
                            <div className="hotel--third__bottom--left__first">
                                <div className="hotel--third__bottom--left__first--name">
                                    <h3>Well Furnished Apartment</h3>
                                    <p>{hotelFind.address}</p>
                                </div>
                                <div className="hotel--third__bottom--left__first--icon">
                                    <AiOutlineHeart className="icon"/>
                                    <FiShare2 className="icon"/>
                                </div>
                            </div>
                            <div className="hotel--third__bottom--left__second">
                                <div>
                                    <IoBedOutline className="icon"/>
                                    <p>3 Bedrooms</p>
                                </div>
                                <div>
                                    <BiBath className="icon"/>
                                    <p>2 Bathrooms</p>
                                </div>
                                <div>
                                    <IoCarOutline className="icon"/>
                                    <p>3 Cars/2 Bikes</p>
                                </div>
                                <div>
                                    <MdOutlinePets className="icon"/>
                                    <p>0 Pets Allowed</p>
                                </div>
                            </div>
                            <div className="hotel--third__bottom--left__third">
                                <h3>Apartment Description</h3>
                               <p>{hotelFind.description}</p>
                                <p>{hotelFind.description2}</p>
                            </div>
                            <div className="hotel--third__bottom--left__fouth">
                                <h3>Offered Amenities</h3>
                                <div className="hotel--third__bottom--left__fouth--center">
                                    <div className="hotel--third__bottom--left__fouth--center__left">
                                        <div>
                                            <GiKnifeFork className="icon"/>
                                            <p>Kitchen</p>
                                        </div>
                                        <div>
                                            <BsSnow className="icon"/>
                                            <p>Air Conditioner</p>
                                        </div>
                                        <div>
                                            <TbWashMachine className="icon"/>
                                            <p>Washer</p>
                                        </div>
                                    </div>
                                    <div className="hotel--third__bottom--left__fouth--center__right">
                                        <div>
                                            <MdOutlineTv className="icon"/>
                                            <p>Television with Netflix</p>
                                        </div>
                                        <div>
                                            <BsWifi className="icon"/>
                                            <p>Free Wireless Internet</p>
                                        </div>
                                        <div>
                                            <MdBalcony className="icon"/>
                                            <p>Balcony or Patio</p>
                                        </div>
                                    </div>
                                </div>
                                <button>Show All 10 Amenities</button>
                            </div>
                            <div className="hotel--third__bottom--left__fives">
                                <h3>Safety and Hygiene </h3>
                                <div className="hotel--third__bottom--left__fives--center">
                                    <div className="hotel--third__bottom--left__fives--center__left">
                                        <div>
                                            <PiBatteryPlusVertical className="icon"/>
                                            <p>Daily Cleaning</p>
                                        </div>
                                        <div>
                                            <PiBatteryPlusVertical className="icon"/>
                                            <p>Disinfections and Sterilizations</p>
                                        </div>

                                    </div>
                                    <div className="hotel--third__bottom--left__fives--center__right">
                                        <div>
                                            <PiBatteryPlusVertical className="icon"/>
                                            <p>Television with Netflix</p>
                                        </div>
                                        <div>
                                            <PiBatteryPlusVertical className="icon"/>
                                            <p>Free Wireless Internet</p>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="hotel--third__bottom--right">
                            <h2>{hotelFind.price}</h2>
                            <div className="line"></div>
                            <p>Short Period: $ 1000</p>
                            <p>Medium Period: $ 2000</p>
                            <p>Long Period: $ 2000</p>
                            <button>Reserve Now</button>
                            <div className="hotel--third__bottom--right__bottom">
                                <div>
                                    <HiOutlineOfficeBuilding className="icon"/>
                                    <p>Property Inquiry</p>
                                </div>
                                <div>
                                    <BsTelephone className="icon"/>
                                    <p> Contact Host</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }

            <Review/>
        </div>
    );
};

export default Hotels;