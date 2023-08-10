import React from 'react';
import img from "../../../../../../img/issykkul.png";
import hotel from "../../../../../../img/hotel.png";
import {FaArrowRightLong} from "react-icons/fa6";
import {AiOutlineHeart} from "react-icons/ai";

const Hotels = () => {
    return (
        <div className="hotel">
         <div className="hotel--first">
             <iframe
                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3427.7824838135143!2d77.07138091892358!3d42.64726222139206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3884f13ef943156b%3A0xb9927fc9c380d0d8!2z0KfQvtC70L_QvtC9LdCQ0YLQsA!5e0!3m2!1sru!2skg!4v1691645933075!5m2!1sru!2skg"
                 width="100%" height="300"  allowFullScreen="" loading="lazy"
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
        </div>
    );
};

export default Hotels;