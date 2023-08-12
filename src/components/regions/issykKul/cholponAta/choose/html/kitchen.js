import React from 'react';
import img from "../../../../../../img/issykkul.png";
import kitchen from "../../../../../../img/kitchen.png";
import kitchen1 from "../../../../../../img/kitchen1.png";
import {AiOutlineHeart} from "react-icons/ai";
import meat from "../../../../../../img/meat.png";
import mini from "../../../../../../img/mini.png";
import {GiCandleHolder, GiKnifeFork} from "react-icons/gi";
import {MdOutlineRoomService} from "react-icons/md";
import {IoWalletSharp} from "react-icons/io5";


const Kitchen = () => {
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
                            <h2>4.5</h2>
                            <div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                            <p>298 reviews</p>
                        </div>
                        <p><span>№ 1 </span>of 23 Restaurants in Cholpon-Ata</p>
                        <p>ASSESSMENTS</p>
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
                </div>
            </div>
        </div>
    );
};

export default Kitchen;