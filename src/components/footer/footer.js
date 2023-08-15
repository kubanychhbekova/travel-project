import React from 'react';
import insta from "../../img/insta.png"
import face from "../../img/face.png"
import wk from "../../img/wk.png"
import email from "../../img/email.png"
import {NavLink} from "react-router-dom";

const Footer = () => {
    return (
        <footer>
           <div className="container">
               <div className="footer">
                   <div className="footer--regions">
                       <h1>logo</h1>

                       <div>
                           <img src={insta} alt=""/>
                           <img src={face} alt=""/>
                           <img src={wk} alt=""/>
                           <img src={email} alt=""/>
                       </div>
                   </div>
                   <div className="footer--regions">
                       <h1>Home</h1>
                       <div className="footer--regions__title">
                           <p>Attractions</p>
                           <p>Map</p>

                       </div>
                   </div>
                   <div className="footer--regions">
                       <h1>Regions</h1>
                       <div className="footer--regions__title">
                           <p>Batken</p>
                           <p>Jalal-Abad</p>
                      <NavLink to={"/issykKul"}>     <p>Issyk_kul</p></NavLink>
                           <p>Naryn</p>
                           <p>Osh</p>
                           <p>Talas</p>
                           <p>Chyi</p>
                       </div>
                   </div>
                   <div className="footer--regions">
                       <h1>Culture</h1>
                       <div className="footer--regions__title">
                           <p>Games</p>
                           <p>National instruments</p>
                           <p>National clothes</p>
                           <p>Hand crafts</p>
                           <p>Currency</p>
                           <p>Kitchen</p>
                       </div>
                   </div>
                   <div className="footer--regions">
                       <h1>Gallery</h1>
                   </div>
               </div>
           </div>
        </footer>
    );
};

export default Footer;