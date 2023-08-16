import React from "react";
import routes from "../../img/routesImg1.png";
import routeType1 from "../../img/routeImg2.png";
import routeType2 from "../../img/routeImg3.png";
import routeType3 from "../../img/routeImg4.png";
import routeType4 from "../../img/routeImg5.png";
import routeType5 from "../../img/routeImg6.png";


function Routs (){
    return(
        <>
        <div id="routes">
            <div className="routes--search">
                <div className="searching">
                    <div className="search1"><input type="text"/></div>
                    <div className="search2"><input type="text"/></div>
                    <button>Go</button>
                </div>
                <div className="route-types">
                    <div className="route-type">
                        <img src={routeType1} alt=""/>
                        <h3>356 km</h3>
                    </div>
                    <div className="route-type">
                        <img src={routeType2} alt=""/>
                        <h3>72 hours</h3>
                    </div>
                    <div className="route-type">
                        <img src={routeType3} alt=""/>
                        <h3>7-8 hours</h3>
                    </div>
                    <div className="route-type">
                        <img src={routeType4} alt=""/>
                        <h3>7-8 hours</h3>
                    </div>
                    <div className="route-type">
                        <img src={routeType5} alt=""/>
                        <h3>5 tickets</h3>
                    </div>
                </div>
            </div>
        </div>
         <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4219948.912671328!2d71.59328221474479!3d41.08739065186287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3897381dfce927f3%3A0x281058b74e88c433!2z0JrRi9GA0LPRi9C30YHRgtCw0L0!5e0!3m2!1sru!2skg!4v1690177339934!5m2!1sru!2skg" style={{width:"99.8%",height:"600px", style:"border:0;", allowfullscreen:"", loading:"lazy",referrerpolicy:"no-referrer-when-downgrade",margin:'30px 0'}}></iframe>
        </>
    )
}
export default Routs;