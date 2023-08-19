import React from 'react';
import img from "../../../../../../img/issykkul.png";
import kitchen from "../../../../../../img/act2.png";
import act from "../../../../../../img/act.png";
import act1 from "../../../../../../img/act1.png";
import {AiOutlineHeart} from "react-icons/ai";
import Review from "../../../../../review/review";
import Popular from "../../../../popular/popular";

const Attraction = () => {
    return (
        <div className="act">
            <div className="act--first">
                <div className="act--first__title">
                    <h2>The best attractions nearby</h2>
                    <p>Show all</p>
                </div>
                <div className="act--first__cards">
                    <div className="act--first__cards--card">
                        <img src={kitchen} alt=""/>
                        <div className="act--first__cards--card__icon">
                            <AiOutlineHeart className="act--first__cards--card__icon--ai"/>
                        </div>

                        <div className="act--first__cards--card__bottom">
                            <h2>Rukh Ordo Cultural Center</h2>
                            <div className="act--first__cards--card__bottom--center">
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
                    <div className="act--first__cards--card">
                        <img src={kitchen} alt=""/>
                        <div className="act--first__cards--card__icon">
                            <AiOutlineHeart className="act--first__cards--card__icon--ai"/>
                        </div>

                        <div className="act--first__cards--card__bottom">
                            <h2>Ethno-cafe Dastorkon</h2>
                            <div className="act--first__cards--card__bottom--center">
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
                    <div className="act--first__cards--card">
                        <img src={kitchen} alt=""/>
                        <div className="act--first__cards--card__icon">
                            <AiOutlineHeart className="act--first__cards--card__icon--ai"/>
                        </div>

                        <div className="act--first__cards--card__bottom">
                            <h2>Ethno-cafe Dastorkon</h2>
                            <div className="act--first__cards--card__bottom--center">
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
                    <div className="act--first__cards--card">
                        <img src={kitchen} alt=""/>
                        <div className="act--first__cards--card__icon">
                            <AiOutlineHeart className="act--first__cards--card__icon--ai"/>
                        </div>

                        <div className="act--first__cards--card__bottom">
                            <h2>Ethno-cafe Dastorkon</h2>
                            <div className="act--first__cards--card__bottom--center">
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
            <div className="act--second">
                <h1>Rukh Ordo Cultural Center</h1>
                <div className="act--second__image">
                    <div className="act--second__image--left">
                        <img src={act} alt=""/>
                        <div>
                            <img src={act1} alt=""/>
                            <img src={act1} alt=""/>
                            <img src={act1} alt=""/>

                        </div>
                    </div>
                    <div className="act--second__image--right">
                        <p>The Rukh Ordo Cultural Center named after Ch.Aitmatov is a complex on the northern shore of
                            Issyk—Kul Lake, in the city of Cholpon-Ata. The complex is named after one of the most
                            famous Kyrgyz in the world — Chingiz Torekulovich Aitmatov. There are 5 chapels built on the
                            territory of the complex in honor of the 4 main denominations of the world: Christianity,
                            Islam, Buddhism, Judaism, while Christianity is represented by two chapels — Pravoslav.</p>
                        <p>139 reviews</p>
                        <p>Administrative centers</p>
                        <p>Top 1 of 20 entertainment in Cholpon-Ata</p>
                        <p>Contacts</p>
                    </div>
                </div>
            </div>

          <Review/>
            <h1>Popular places</h1>
          <Popular/>
        </div>
    );
};

export default Attraction;