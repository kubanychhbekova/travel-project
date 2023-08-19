import React, {useState} from 'react';
import img from "../../../../../../img/uluk.png";
import bogdan from "../../../../../../img/bogdan.png"
import jah from "../../../../../../img/jah.png"
import game from "../../../../../../img/game.png"
import solo from "../../../../../../img/solo.png"
import prince from "../../../../../../img/prince.png"
import {BiSolidDownArrow} from "react-icons/bi";
import {RxCross2} from "react-icons/rx";
import {IoMdCalendar} from "react-icons/io";
import {LuTicket} from "react-icons/lu";

const Event = () => {
    const [all, setAll] = useState("all")
    const [handleModal, setHandleModal] = useState("Categories")
    const [modal, setModal] = useState(false)
    const events = [
        {
            id: 1,
            name: "Concert Ulukmanapo",
            img: img,
            time: "4 August at 22:00",
            address: " White Club Republic (Hippodrome, Cholpon-Ata)",
            categories: "Concert",
            price: ""
        },
        {
            id: 2,
            name: "Bogdan's stand-up performance Lisevsky ",
            img: bogdan,
            time: "5 August  at 21:30",
            address: "Retro-Metro Karaoke, pr.Chyngyz Aitmatov, 24",
            categories: "Concert",
            price: ""
        },
        {
            id: 3,
            name: "Jah Big Solo Concert Khalib ",
            img: jah,
            time: "513 August  at 20:00",
            address: "Grape street, 1/3",
            categories: "Concert",
            price: "2 700 - 4 500 C",
        },
        {
            id: 4,
            name: "Dima's stand-up performance Kolybelkina ",
            img: img,
            time: "18 August  at 21:30",
            address: "Retro Metro Karaoke, Chyngyz Aitmatov Ave., 24",
            categories: "Concert",
            price: "1 000 c",
        },
        {
            id: 5,
            name: "Diversified Exhibition Halal Investment and Trade Expo 2023",
            img: game,
            time: "26 August  at 07:30",
            address: "Cholpon-Ata, Cultural Center \"Rukh Ordo\" them. Ch. Aitmatova",
            categories: "Exhibitions",
            price: "",
        },
        {
            id: 6,
            name: "Solo stand up concert Zarina Baibolova",
            img: solo,
            time: "26 August  at 20:00",
            address: "Dance Hall, Chuisky prospect, 168A",
            categories: "Concert",
            price: "800 - 3000 C",
        },
        {
            id: 7,
            name: "Big Concert V$XV PRINCE",
            img: prince,
            time: " 17 November at 19:00",
            address: "Bishkek,Oktyabrsky district, Grape street, 1/3",
            categories: "Concert",
            price: "1 000 - 3 500 C",
        },
    ]
    const category = [
        {
            id: 1,
            name: "Concert",
        },
        {
            id: 2,
            name: "Cinema",
        },
        {
            id: 3,
            name: "Leisure",
        },
        {
            id: 4,
            name: "Exhibitions",
        },
        {
            id: 5,
            name: "Theater",
        },
        {
            id: 6,
            name: "Master classes",
        },
        {
            id: 7,
            name: "Tourism",
        },
    ]
    const filterEvent=()=>{
        if(all==="all"){
            return events
        }else if(all==="tickets"){
            return events.filter((el)=>{
                return el.price.length!==0
            })
        }else if(all===handleModal){
            return events.filter((el)=>{
                return el.categories===handleModal
            })
        }
    }
    return (
        <div className="event">
            <div className="event--top">
                <h1>Poster</h1>
                <input type="search" placeholder="Search"/>
            </div>
            <div className="event--calendar">
            </div>
            <div className="event--categories">
                <button onClick={() => {
                    setAll("all")
                }}
                        style={{
                            background: all === "all" ? "#004A60" : "",
                            color: all === "all" ? "white" : "",
                        }}
                >All
                </button>
                <div className="event--categories__category" onClick={() => {
                    setModal(!modal)
                }}
                     style={{
                         background: all === handleModal ? "#004A60" : "",
                         color: all === handleModal ? "white" : "",

                     }}>
                    <p>{handleModal}</p>
                    <BiSolidDownArrow className="icon"/>
                </div>
                <button onClick={() => {
                    setAll("tickets")
                }}
                        style={{
                            background: all === "tickets" ? "#004A60" : "",
                            color: all === "tickets" ? "white" : "",

                        }}>Only tickets
                </button>

            </div>
            <div className="event--cards">
                <div className="event--cards__modal" style={{
                    display: modal ? "block" : "none"
                }}>
                    <RxCross2 className="event--cards__modal--icon" onClick={() => {
                        setModal(false)
                    }}/>
                    {
                        category.map((el) => {
                            return (
                                <div key={el.id}>
                                    <p onClick={() => {
                                        setHandleModal(el.name)
                                        setModal(false)
                                        setAll(el.name)
                                    }}>{el.name}</p>
                                </div>
                            )
                        })
                    }
                </div>
                {
                    filterEvent().map((el) => {
                        return (
                            <div className="event--cards__card " key={el.id}>
                                <div className="event--cards__card--img">
                                    <img src={el.img} alt=""/>
                                    <div className="event--cards__card--img__icons">
                                        <div><IoMdCalendar className="icon"/></div>
                                        {
                                            el.price.length !== 0 &&
                                            <div>
                                                <LuTicket className="icon"/>
                                                <p>Tickets</p>
                                            </div>
                                        }
                                        <div><p>{el.categories}</p></div>
                                    </div>
                                </div>
                                <h4>{el.name}</h4>
                                <p>{el.price}{el.price.length !== 0 ? "," : ""}{el.time},{el.address}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Event;