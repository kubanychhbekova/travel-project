import React, { useState} from 'react';
import {MdOutlineLocationOn} from "react-icons/md";
import {FaArrowRightLong, FaPersonWalking} from "react-icons/fa6";
import {RiBus2Line} from "react-icons/ri";
import {FaPlaneDeparture, FaTrain} from "react-icons/fa";


import Review from "../../../../../review/review";
import Popular from "../../../../popular/popular";

const Places = () => {

    return (
        <div className="places">
            <ul>
                <li>Where to go</li>
            </ul>
            <div className="places--input">
                <input type="text" placeholder="Where?"/>
                <input type="text" placeholder="Where?"/>
                <button>Go</button>
            </div>
            <div className="places--icons">
                <div>
                    <MdOutlineLocationOn className="icon"/>
                    <p>356 km</p>
                </div>
                <div>
                    <FaPersonWalking className="icon"/>
                    <p>72 hours</p>
                </div>
                <div>
                    <RiBus2Line className="icon"/>
                    <p>7-8 hours</p>
                </div>
                <div>
                    <FaTrain className="icon"/>
                    <p>7-8 hours</p>
                </div>
                <div>
                    <FaPlaneDeparture className="icon"/>
                    <p>-</p>
                </div>
            </div>
            <div className="places--map">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d553522.3904171565!2d76.76790235197365!3d42.463618547372306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1z0YvRgdGL0Log0LrQvtC7!5e0!3m2!1sru!2skg!4v1691579626856!5m2!1sru!2skg"
                    width="100%" height="500" allowFullScreen="" loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <Review/>
            <h1>Popular places</h1>
            <Popular/>
        </div>
    );
};

export default Places;