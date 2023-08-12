import React from 'react';
import img from "../../../img/issykkul.png";
import balyk from "../../../img/balyk.png";
import {FaArrowRightLong} from "react-icons/fa6";
import {useNavigate} from "react-router-dom";

const Popular = () => {
    const navigate = useNavigate()
    return (
        <>
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

        </>
    );
};

export default Popular;