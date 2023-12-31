import React, {useEffect, useState} from 'react';
import img from "../../../../img/cholpon.png";
import temp from "../../../../img/temp.png";
import {MdOutlineAttractions, MdOutlineKitchen, MdOutlineLocalHotel} from "react-icons/md";
import {FaMapLocation} from "react-icons/fa6";
import {RiCalendarEventLine} from "react-icons/ri";
import Places from "./choose/html/places";
import Hotels from "./choose/html/hotels";
import Kitchen from "./choose/html/kitchen";
import Event from "./choose/html/event";
import Attraction from "./choose/html/attraction";
import {useParams} from "react-router-dom";
import axios from "axios";
const CholponAta = () => {
    const [active,setActive]=useState(true)
    const [active1,setActive1]=useState(false)
    const [active2,setActive2]=useState(false)
    const [active3,setActive3]=useState(false)
    const [active4,setActive4]=useState(false)
    const [data,setData]=useState({})
    const [date,setDate]=useState({})
    const choose=()=>{
        if(active){
            return <Places map={data.boundary}/>
        }else if(active1){
            return <Hotels/>
        }else if(active2){
            return <Kitchen/>
        }else if(active3){
            return <Event/>
        }else if(active4){
            return <Attraction/>
        }
    }
    const {name,id}=useParams()

    const getPlaces=async ()=>{
        try{
            const res=await axios.get(`http://34.207.195.167/api/v1/places/region_detail/${id}/`)
            setData(res.data.places.find(el=>el.name===name))
        }catch(error){
            console.error("your mistake")
        }
    }
    const getData=async ()=>{
        try{
         const res=await axios.get(``)
        }catch (error){
            console.error("your mistake")
        }
    }

    useEffect(()=>{
        getPlaces()
    },[name])
    return (
        <div id="cholpon">
            <div className="container">
                <div className="cholpon">
                    <div className="cholpon--first">
                     <div className="cholpon--first__img">
                         <img src={img} alt=""/>
                         <img src={temp} alt=""/>
                     </div>
                        <div className="cholpon--first__title">
                            <h1>{data.name}</h1>
                            <p>{data.description}</p>
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