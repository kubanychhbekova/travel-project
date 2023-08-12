import React from 'react';
import img from "../../../../../../img/issykkul.png";
import hotel from "../../../../../../img/hotel.png";
import hotel1 from "../../../../../../img/hotel1.png";
import hotel2 from "../../../../../../img/hotel2.png";
import hotel3 from "../../../../../../img/hotel3.png";
import hotel4 from "../../../../../../img/hotel4.png";
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

const Hotels = () => {
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
                    <div className="hotel--second__cards--card">
                        <img src={hotel} alt=""/>
                        <div className="hotel--second__cards--card__icon">
                            <AiOutlineHeart className="hotel--second__cards--card__icon--ai"/>
                        </div>

                        <div className="hotel--second__cards--card__bottom">
                            <h2>Hotel Altamira</h2>
                            <div className="hotel--second__cards--card__bottom--center">
                                <div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                </div>
                                <p>122 reviews</p>
                            </div>
                            <p>km from here: 1,35</p>
                            <FaArrowRightLong className="hotel--second__cards--card__bottom--icon"/>
                        </div>
                    </div>
                    <div className="hotel--second__cards--card">
                        <img src={hotel} alt=""/>
                        <div className="hotel--second__cards--card__icon">
                            <AiOutlineHeart className="hotel--second__cards--card__icon--ai"/>
                        </div>

                        <div className="hotel--second__cards--card__bottom">
                            <h2>Hotel Altamira</h2>
                            <div className="hotel--second__cards--card__bottom--center">
                                <div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                </div>
                                <p>122 reviews</p>
                            </div>
                            <p>km from here: 1,35</p>
                            <FaArrowRightLong className="hotel--second__cards--card__bottom--icon"/>
                        </div>
                    </div>
                    <div className="hotel--second__cards--card">
                        <img src={hotel} alt=""/>
                        <div className="hotel--second__cards--card__icon">
                            <AiOutlineHeart className="hotel--second__cards--card__icon--ai"/>
                        </div>

                        <div className="hotel--second__cards--card__bottom">
                            <h2>Hotel Altamira</h2>
                            <div className="hotel--second__cards--card__bottom--center">
                                <div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                </div>
                                <p>122 reviews</p>
                            </div>
                            <p>km from here: 1,35</p>
                            <FaArrowRightLong className="hotel--second__cards--card__bottom--icon"/>
                        </div>
                    </div>
                    <div className="hotel--second__cards--card">
                        <img src={hotel} alt=""/>
                        <div className="hotel--second__cards--card__icon">
                            <AiOutlineHeart className="hotel--second__cards--card__icon--ai"/>
                        </div>

                        <div className="hotel--second__cards--card__bottom">
                            <h2>Hotel Altamira</h2>
                            <div className="hotel--second__cards--card__bottom--center">
                                <div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                </div>
                                <p>122 reviews</p>
                            </div>
                            <p>km from here: 1,35</p>
                            <FaArrowRightLong className="hotel--second__cards--card__bottom--icon"/>
                        </div>
                    </div>
                    <div className="hotel--second__cards--card">
                        <img src={hotel} alt=""/>
                        <div className="hotel--second__cards--card__icon">
                            <AiOutlineHeart className="hotel--second__cards--card__icon--ai"/>
                        </div>

                        <div className="hotel--second__cards--card__bottom">
                            <h2>Hotel Altamira</h2>
                            <div className="hotel--second__cards--card__bottom--center">
                                <div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                </div>
                                <p>122 reviews</p>
                            </div>
                            <p>km from here: 1,35</p>
                            <FaArrowRightLong className="hotel--second__cards--card__bottom--icon"/>
                        </div>
                    </div>
                    <div className="hotel--second__cards--card">
                        <img src={hotel} alt=""/>
                        <div className="hotel--second__cards--card__icon">
                            <AiOutlineHeart className="hotel--second__cards--card__icon--ai"/>
                        </div>

                        <div className="hotel--second__cards--card__bottom">
                            <h2>Hotel Altamira</h2>
                            <div className="hotel--second__cards--card__bottom--center">
                                <div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                </div>
                                <p>122 reviews</p>
                            </div>
                            <p>km from here: 1,35</p>
                            <FaArrowRightLong className="hotel--second__cards--card__bottom--icon"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hotel--third">
                <h2>Hotel Altamira </h2>
                <div className="hotel--third__image">
                    <img src={hotel1} alt=""/>
                    <img src={hotel2} alt=""/>
                    <div>
                        <img src={hotel3} alt=""/>
                        <img src={hotel4} alt=""/>
                    </div>
                </div>
                <div className="hotel--third__bottom">
                    <div className="hotel--third__bottom--left">
                        <div className="hotel--third__bottom--left__first">
                            <div className="hotel--third__bottom--left__first--name">
                                <h3>Well Furnished Apartment</h3>
                                <p>107 Przhevalsky str., Karakol 722360</p>
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
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
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
                        <h2>$ 1000 - $ 2000</h2>
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
            <div className="hotel--fouth">
                    <div className="hotel--fouth__left">
                        <div className="hotel--fouth__left--top">
                            <button>Write review</button>
                            <button>Upload a photo</button>
                        </div>
                    </div>
                    <div className="hotel--fouth__right">
                        <div className="hotel--fouth__right--top">
                            <input type="text" placeholder="Search"/>
                            <button>Filter</button>
                            <button>Sort by</button>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default Hotels;