import React, {useState} from 'react';
import img from "../../../../img/cholpon.png";
import temp from "../../../../img/temp.png";
import {MdOutlineAttractions, MdOutlineKitchen, MdOutlineLocalHotel} from "react-icons/md";
import {FaMapLocation} from "react-icons/fa6";
import {RiCalendarEventLine} from "react-icons/ri";
import Places from "./choose/html/places";
import Hotels from "./choose/html/hotels";
const CholponAta = () => {
    const [active,setActive]=useState(true)
    const [active1,setActive1]=useState(false)
    const [active2,setActive2]=useState(false)
    const [active3,setActive3]=useState(false)
    const [active4,setActive4]=useState(false)
    const choose=()=>{
        if(active){
            return <Places/>
        }else if(active1){
            return <Hotels/>
        }
    }
    return (
        <div id="cholpon">
            <div className="container">
                <div className="cholpon">
                    <div className="cholpon--first">
                        <img src={img} alt=""/>
                        <img src={temp} alt=""/>
                        <div className="cholpon--first__title">
                            <h1>Cholpon-Ata </h1>
                            <p>Cholpon-Ata is the most famous resort town on the shore of Lake Issyk-Kul. Once upon a
                                time, caravans of the Great Silk Road passed through Cholpon-Ata. Today, tens of
                                thousands of tourists from all over the CIS come to Cholpon-Ata. The city is famous for
                                its clean sandy beaches and transparent lake.
                                The best time to visit Cholpon-Ata is from mid–June to September. </p>
                        </div>
                    </div>
                    <div className="cholpon--second">
                        <div className={active? "active" : ""}
                        onClick={()=>{
                            setActive(true)
                            setActive1(false)
                            setActive2(false)
                            setActive3(false)
                            setActive4(false)
                        }}>
                            <FaMapLocation className="icon"/>
                            <p>Places</p>
                        </div>
                        <div  className={active1? "active" : ""}
                            onClick={()=>{
                                setActive(false)
                                setActive1(true)
                                setActive2(false)
                                setActive3(false)
                                setActive4(false)
                        }}>
                            <MdOutlineLocalHotel className="icon"/>
                            <p>Hotels</p>
                        </div>
                        <div className={active2? "active" : ""}
                             onClick={()=>{
                                 setActive(false)
                                 setActive1(false)
                                 setActive2(true)
                                 setActive3(false)
                                 setActive4(false)
                             }}>
                            <MdOutlineKitchen  className="icon"/>
                            <p>kitchen</p>
                        </div>
                        <div className={active3? "active" : ""}
                             onClick={()=>{
                                 setActive(false)
                                 setActive1(false)
                                 setActive2(false)
                                 setActive3(true)
                                 setActive4(false)
                             }}>
                 <RiCalendarEventLine className="icon"/>
                            <p>Event</p>
                        </div>
                        <div className={active4? "active" : ""}
                             onClick={()=>{
                                 setActive(false)
                                 setActive1(false)
                                 setActive2(false)
                                 setActive3(false)
                                 setActive4(true)
                             }}>
                            <MdOutlineAttractions className="icon"/>
                            <p>Attractions
                            </p>
                        </div>
                    </div>
                    <div className="cholpon--fourth">
                        {
                            choose()
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CholponAta;