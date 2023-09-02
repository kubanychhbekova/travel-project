import React, {useEffect, useState} from 'react';
import {FiArrowUpRight, FiUser} from "react-icons/fi";
import {AiOutlineHeart, AiOutlineStar} from "react-icons/ai";
import {BiLogInCircle} from "react-icons/bi";
import {RiSearch2Line} from "react-icons/ri";
import Profile from "./profile/profile";
import {useDispatch, useSelector} from "react-redux";
import Review from "./review/review";
import Favorite from "./favorite/favorite";
import axios from "axios";
import {deleteUser} from "../../store/registerSlice";

const Account = () => {
    const [pages, setPages] = useState("profile")
    const {user,isAuth}=useSelector(s=>s.user)
 const changePage=()=>{
       if(isAuth){
           if(pages==="profile"){
               return <Profile />
           }else if(pages==="review"){
               return <Review/>
           }else{
               return <Favorite/>
           }
       }
 }

    return (
        <div id="account">
       <div className="container">
           <div className="account">
               <div className="account--left">
                   <div className="account--left__pages">
                       <div className={`account--left__pages--page ${pages === "profile" ? "active" : ""}`}
                            onClick={() => {
                                setPages("profile")
                            }}>
                           <FiUser className="icon"/>
                           <p>Profile</p>
                       </div>
                       <div className={`account--left__pages--page ${pages === "review" ? "active" : ""}`}
                            onClick={() => {
                                setPages("review")
                            }}>
                           <AiOutlineStar className="icon"/>
                           <p>Review</p>
                       </div>
                       <div className={`account--left__pages--page ${pages === "favorite" ? "active" : ""}`}
                            onClick={() => {
                                setPages("favorite")
                            }}>
                           <AiOutlineHeart className="icon"/>
                           <p>Favorites</p>
                       </div>
                   </div>
                   <div className="account--left__log" >
                       <BiLogInCircle className="icon"/>
                       <p>Log out</p>
                   </div>
               </div>
               <div className="account--right">
                   <div className="account--right__header">
                       <div className="account--right__header--input">
                        <div className="account--right__header--input__write">
                            <input type="text"/>
                            <RiSearch2Line className="icon"/>
                        </div>
                           <div className="account--right__header--input__search">
                               <FiArrowUpRight className="account--right__header--input__search--icon"/>
                           </div>

                       </div>
                       <div className="account--right__header--user">
                           <div className="account--right__header--user__title">
                               <h1>{isAuth && `${user.first_name} ${user.last_name}`}</h1>
                               <p>Moscow, Rossia</p>
                           </div>
                           <div className="account--right__header--user__img">
                          <div><p>A</p></div>

                           </div>
                       </div>
                   </div>
                   {
                       changePage()
                   }
               </div>
           </div>
       </div>
        </div>
    );
};

export default Account;