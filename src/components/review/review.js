import React, {useState} from 'react';
import {RxCross2} from "react-icons/rx";
import {PiImageThin} from "react-icons/pi";
import img from "../../img/logo.png"
import comment from "../../img/coment.png"
import comment2 from "../../img/comment2.png"
import {AiOutlineLike} from "react-icons/ai";
import {MdKeyboardArrowLeft, MdKeyboardArrowRight} from "react-icons/md";

const Review = () => {
    const [photo, setPhoto] = useState(false)
    const [review, setReview] = useState(false)
    const [filter, setFilter] = useState(false)
    const sms = [
        {
            id: 1,
            img: img,
            name: "Anna Petrova",
            address: "Moscow, Rossia",
            date: "July 10, 2023",
            description: "I have just returned from an unforgettable trip to Issyk-Kul, and I cannot help but share my impressions. This place is simply magical!\n" +
                "\n" +
                "Let me start with the lake itself. Issyk-Kul turned out to be incredibly beautiful and tranquil. The water in the lake is so clean and transparent that it feels like being in a fairytale. The mountains surrounding the lake create a breathtaking landscape that words cannot describe. I simply enjoyed every minute, gazing at this magnificent nature...",

            photo: []
        },
        {
            id: 2,
            img: img,
            name: "Anna Petrova",
            address: "Moscow, Rossia",
            date: "July 10, 2023",
            description: "I have just returned from an unforgettable trip to Issyk-Kul, and I cannot help but share my impressions. This place is simply magical! Let me start with the lake itself. Issyk-Kul turned out to be incredibly beautiful and tranquil. The water in the lake is so clean and transparent that it feels like being in a fairytale. The mountains surrounding the lake create a breathtaking landscape that words cannot describe. I simply enjoyed every minute, gazing at this magnificent nature.",
            photo: []
        },
        {
            id: 3,
            img: img,
            name: "Anna Petrova",
            address: "Moscow, Rossia",
            date: "July 10, 2023",
            description: "I have just returned from an unforgettable trip to Issyk-Kul, and I cannot help but share my impressions. This place is simply magical! Let me start with the lake itself. Issyk-Kul turned out to be incredibly beautiful and tranquil.",
            photo: []
        },
        {
            id: 4,
            img: img,
            name: "Anna Petrova",
            address: "Moscow, Rossia",
            date: "July 10, 2023",
            description: "I have just returned from an unforgettable trip to Issyk-Kul, and I cannot help but share my impressions. This place is simply magical! Let me start with the lake itself. Issyk-Kul turned out to be incredibly beautiful and tranquil. The water in the lake is so clean and transparent that it feels like being in a fairytale.",
            photo: [comment, comment2, comment]
        }
    ]
    const back = [
        {
            name: "Excellent",
            people: 18764,
        },
        {
            name: "Good",
            people: 1976,
        },
        {
            name: "Not bad",
            people: 1879,
        },
        {
            name: "Bad",
            people: 689,
        },
        {
            name: "terribly",
            people: 25,
        },
    ]
    const a = []
    const plus = back.map((el) => {
        return a.push(el.people)
    })
    const acc = a.reduce((acc, cur) => {
        return acc + cur
    }, 0)
    const rating = `${5 / 100 * (back[0].people / (acc / 100))}`.split("").slice(0, 3)
    return (
        <div className="reviews">
            <h1>Reviews</h1>
            <div className="reviews--review">
                <div className="reviews--review__left">
                    <div className="reviews--review__left--top">
                        <button onClick={() => {
                            setReview(!review)
                        }}>Write review
                        </button>
                        <button onClick={() => {
                            setPhoto(!photo)
                        }}>Upload a photo
                        </button>
                    </div>
                    <div className="reviews--review__left--center">
                        <h2>{rating}</h2>
                        <div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                        <p>{acc} reviews</p>

                    </div>
                    <div className="reviews--review__left--excellent">
                        {
                            back.map((el) => {
                                const present = el.people / (acc / 100)
                                return (
                                    <div key={el.name}>
                                        <p>{el.name}</p>
                                        <div style={{
                                            width: `${185 / 100 * present}px`
                                        }}></div>
                                        <p>{el.people}</p>
                                    </div>
                                )
                            })
                        }
                    </div>

                </div>
                <div className="reviews--review__right">
                    <div className="reviews--review__right--top">
                        <input type="text" placeholder="Search"/>
                        <button onClick={()=>{
                            setFilter(!filter)
                        }}>Filter</button>
                    </div>
                    <div className="reviews--review__right--bottom">
                        {
                            sms.map((el) => {
                                return (
                                    <div className="reviews--review__right--bottom__card">
                                        <div className="reviews--review__right--bottom__card--top">
                                            <div className="reviews--review__right--bottom__card--top__data">
                                                <img src={el.img} alt=""/>
                                                <div>
                                                    <h6>{el.name}</h6>
                                                    <p>{el.address}</p>
                                                </div>
                                            </div>
                                            <div className="reviews--review__right--bottom__card--top__like">
                                                <AiOutlineLike className="icon"/>
                                                <p>0</p>
                                            </div>

                                        </div>
                                        <div className="reviews--review__right--bottom__card--center">
                                            <div>
                                                <div></div>
                                                <div></div>
                                                <div></div>
                                                <div></div>
                                                <div></div>
                                            </div>
                                            <p>{el.date}</p>
                                        </div>
                                        <div className="reviews--review__right--bottom__card--bottom">
                                            <h6>Issyk-Kul - the Pearl of Kyrgyzstan</h6>
                                            <p>{el.description}</p>
                                        </div>
                                        {
                                            el.photo.length !== 0 &&
                                            < div className="reviews--review__right--bottom__card--img">
                                                {
                                                    el.photo.map((elem, ind) => {
                                                        return (
                                                            <div key={el[ind]}>
                                                                <img src={elem} alt=""/>
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div>
                                        }
                                        <p className="reviews--review__right--bottom__card--p">Reply</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="reviews--review__right--dots">
                        <MdKeyboardArrowLeft/>

                        <div>
                            <p>1</p>
                        </div>
                        <p>2</p>
                        <p>3</p>
                        <p>4</p>
                        <p>5</p>

                        <MdKeyboardArrowRight/>
                    </div>
                </div>
            </div>
            <div className="reviews--photoModal" style={{
                display: photo ? "block" : "none"
            }}>
                <RxCross2 className="reviews--photoModal__icon" onClick={() => {
                    setPhoto(false)
                }}/>
                <h2>Here you can upload a photo</h2>
                <div className="reviews--photoModal__photo">
                    <div className="reviews--photoModal__photo--card">
                        <input type="file"/>
                        <PiImageThin/>
                        <p>Upload photo</p>
                        <p>15x20</p>
                    </div>
                    <div className="reviews--photoModal__photo--card">
                        <input type="file"/>
                        <PiImageThin/>
                        <p>Upload photo</p>
                        <p>15x20</p>
                    </div>
                    <div className="reviews--photoModal__photo--card">
                        <input type="file"/>
                        <PiImageThin/>
                        <p>Upload photo</p>
                        <p>15x20</p>
                    </div>

                </div>
                <button>Send</button>

            </div>
            <div className="reviews--reviewModal" style={{
                display:review ? " block" : "none"
            }}>
                <RxCross2 className="reviews--reviewModal__icon" onClick={() => {
                    setReview(false)
                }}/>
                <h2>What do you think ?</h2>
                <p>Please give your rating</p>
                <div className="reviews--reviewModal__rating">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <textarea placeholder="Tell us about your experience" />
                <button>Send</button>

            </div>
            <div className="reviews--filterModal" style={{
                display:filter ? "block" : "none"
            }}>
                <RxCross2 className="reviews--filterModal__icon" onClick={() => {
                    setFilter(false)
                }}/>
                <h2>Filter reviews</h2>
                <h3>Evaluation</h3>
                <div className="reviews--filterModal__rating">
                    <div className="reviews--filterModal__rating--div">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <p>(77)</p>
                    </div>
                    <div className="reviews--filterModal__rating--div">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <p>(161)</p>
                    </div>
                    <div className="reviews--filterModal__rating--div">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <p>(1 276)</p>
                    </div>
                    <div className="reviews--filterModal__rating--div">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <p>(6 728)</p>
                    </div>
                    <div className="reviews--filterModal__rating--div">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <p>(16 728)</p>
                    </div>
                </div>
                <h3>Period</h3>
                <div className="reviews--filterModal__period">
                    <div>January</div>
                    <div>February</div>
                    <div>March</div>
                    <div>April</div>
                    <div>May</div>
                    <div>June</div>
                    <div>July</div>
                    <div>August</div>
                    <div>September</div>
                    <div>October</div>
                    <div>November</div>
                    <div>December</div>
                </div>
                <div className="reviews--filterModal__bottom">
                    <h6>Throw off</h6>
                    <button>Apply</button>
                </div>
            </div>
        </div>
    );
};

export default Review;