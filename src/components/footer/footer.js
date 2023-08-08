import React from 'react';

const Footer = () => {
    return (
        <footer>
           <div className="container">
               <div className="footer">
                   <div className="footer--regions">
                       <h1>logo</h1>
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
                           <p>Issyk_kul</p>
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