import React from 'react';
import {FiUser} from "react-icons/fi";
import {AiOutlineHeart, AiOutlineStar} from "react-icons/ai";

const Account = () => {
    return (
        <div id="account">
            <div className="account">
                <div className="account--left">
                    <div className="account--left__pages">
                        <div className="account--left__pages--page">
                            <FiUser className="icon"/>
                            <p>Profile</p>
                        </div>
                        <div className="account--left__pages--page">
                            <AiOutlineStar className="icon"/>
                            <p>Review</p>
                        </div>
                        <div className="account--left__pages--page">
                            <AiOutlineHeart className="icon"/>
                            <p>Favorites</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Account;