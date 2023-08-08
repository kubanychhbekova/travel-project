import React from 'react';
import img from "../../img/issykkul.png"
import talas from "../../img/talas.png"
import chui from "../../img/chui.png"
import kul from "../../img/kul.png"
import abad from "../../img/abad.png"
import naryn from "../../img/naryn.png"
import osh from "../../img/osh.png"
import batken from "../../img/batken.png"
import food from "../../img/food.png"
import food2 from "../../img/food2.png"
const IssykKyl = () => {
    return (
       <div id="kul">
       <div className="container">
           <div className="kul">
               <div className="kul--first">
                   <img src={img} alt=""/>
                   <div className="kul--first__title">
                       <h1>Issyk-Kul</h1>
                       <p>Issyk-Kul is an endorheic lake (i.e., without outflow) in the Northern Tian Shan mountains in
                           Eastern Kyrgyzstan. It is the seventh-deepest lake in the world, the tenth-largest lake in the
                           world by volume and the second-largest saline lake after the Caspian Sea. Issyk-Kul means "warm
                           lake" in the Kyrgyz language; although it is located at a lofty elevation of 1,607 metres and
                           subject to severe cold during winter, it rarely freezes, due to the salinity.</p>
                   </div>
               </div>
               <div className="kul--second">
                   <div>
                       <img src={talas} alt=""/>
                       <p>Talas</p>
                   </div>
                   <div>
                       <img src={chui} alt=""/>
                       <p>Chui</p>
                   </div>
                   <div>
                       <img src={kul} alt=""/>
                       <p>Issyk-Kyl</p>
                   </div>
                   <div>
                       <img src={abad} alt=""/>
                       <p>Jalal-Abad</p>
                   </div>
                   <div>
                       <img src={naryn} alt=""/>
                       <p>Naryn</p>
                   </div>
                   <div >
                       <img src={osh} alt=""/>
                       <p>Osh</p>
                   </div>
                   <div >
                       <img src={batken} alt=""/>
                       <p>Batken</p>
                   </div>
               </div>
               <div className="kul--third">
                   <div className="kul--third__bottom">
                       <div className="kul--third__bottom--left">
                           <h5>Ashlyanfu</h5>
                           <p>The name of the dish sounds and is spelled differently: ashlyanfu and ashlyamfu, and even ash-lyanfu. There is a version that the Chinese “len-fyn” (or “cold starch”) was a distant ancestor of the dish popular in Kyrgyzstan, among the Dungan settlers it is “lyangfu”. Together with the Turkic “ash”, meaning “dish, food”, a new name appeared: the Chinese “analog” is made a little differently.</p>
                       </div>
                       <div className="kul--third__bottom--center">
                           <img src={food} alt=""/>
                           <img src={food} alt=""/>
                           <img src={food2} alt=""/>
                           <img src={food} alt=""/>
                       </div>
                       <div className="kul--third__bottom--right">
                           <h5>What is included in the dish</h5>
                           <p>The main parts are "jelly" made of starch, noodles and hot sauce. There are many more detailed ashlyanfu recipes in modern culinary practice. Someone claims that it is not made with meat or vegetables. Some hold an alternative point of view. In some cases, wheat noodles are recommended to be pulled out, as for lagman.
                           </p>
                       </div>
                   </div>
               </div>
           </div>
       </div>
       </div>

    );
};

export default IssykKyl;