import React, { useState } from "react";
import kgY from "../../img/KG-Y.png"
import kgC from "../../img/KG-C.png"
import kgN from "../../img/KG-N.png"
import kgT from "../../img/KG-T.png"
import kgJ from "../../img/KG-J.png"
import kgO from "../../img/KG-O.png"
import kgB from "../../img/KG-B.png"
import yssyk from "../../img/yssykKolmap.png"
import chui from "../../img/chuimap.png"
import naryn from "../../img/narynmap.png"
import talas from "../../img/talasmap.png"
import jalal from "../../img/jalalmap.png"
import osh from "../../img/oshmap.png"
import batken from "../../img/batken2.png"
const MapKg = () => {

  const [showBlock, setShowBlock] = useState(false);
  const [showBlock2, setShowBlock2] = useState(false);
  const [showBlock3, setShowBlock3] = useState(false);
  const [showBlock4, setShowBlock4] = useState(false);
  const [showBlock5, setShowBlock5] = useState(false);
  const [showBlock6, setShowBlock6] = useState(false);
  const [showBlock7, setShowBlock7] = useState(false);

  const handleYssykHover = () => {
    setShowBlock(true);
  };

  const handleYssykLeave = () => {
    setShowBlock(false);
  };

  const handleChuiHover = () => {
    setShowBlock2(true);
  };

  const handleChuiLeave = () => {
    setShowBlock2(false);
  };

  const handleNarynHover = () => {
    setShowBlock3(true);
  };

  const handleNarynLeave = () => {
    setShowBlock3(false);
  };
  const handleTalasHover = () => {
    setShowBlock4(true);
  };

  const handleTalasLeave = () => {
    setShowBlock4(false);
  };
  const handleJalalHover = () => {
    setShowBlock5(true);
  };

  const handleJalalLeave = () => {
    setShowBlock5(false);
  };
  const handleOshHover = () => {
    setShowBlock6(true);
  };

  const handleOshLeave = () => {
    setShowBlock6(false);
  };
  const handleBatkenHover = () => {
    setShowBlock7(true);
  };

  const handleBatkenLeave = () => {
    setShowBlock7(false);
  };
  return (
    <div id="map">
      <div className="container">
        <div className="map">
         <li>Where to go</li>
         <div className="map--search">
            <input type="text" placeholder="From were?" />
            <input type="text"  placeholder="Where?"/>
            <button>Go</button>
         </div>
         <div className="map--karta">
          <div className="yssyk" onMouseEnter={handleYssykHover} onMouseLeave={handleYssykLeave}>
          <img src={kgY} alt="" />
          </div>

          <div className="chui" onMouseEnter={handleChuiHover} onMouseLeave={handleChuiLeave}>
          <img src={kgC} alt="" cl />
          </div>
          <div className="naryn" onMouseEnter={handleNarynHover} onMouseLeave={handleNarynLeave}>
          <img src={kgN} alt="" />
          </div>
          <div className="talas" onMouseEnter={handleTalasHover} onMouseLeave={handleTalasLeave}>
          <img src={kgT} alt="" />
          </div>
          <div className="jalal" onMouseEnter={handleJalalHover} onMouseLeave={handleJalalLeave}>
          <img src={kgJ} alt="" />
          </div>
          <div className="osh" onMouseEnter={handleOshHover} onMouseLeave={handleOshLeave}>
          <img src={kgO} alt=""/>
          </div>
          <div className="batken" onMouseEnter={handleBatkenHover} onMouseLeave={handleBatkenLeave}>
          <img src={kgB} alt=""/>
          </div>
          
          <div className={`blockY ${showBlock ? "show" : ""}`} onMouseEnter={handleYssykHover} onMouseLeave={handleYssykLeave}>
            <img src={yssyk} alt="" />
            <h5>Yssyk-Kol</h5>
          </div>
          <div className= {`blockC ${showBlock2 ? "show2" : ""}`} onMouseEnter={handleChuiHover} onMouseLeave={handleChuiLeave}>
            <img src={chui} alt="" />
            <h5>Chui</h5>
          </div>
          <div className= {`blockN ${showBlock3 ? "show3" : ""}`} onMouseEnter={handleNarynHover} onMouseLeave={handleNarynLeave}>
            <img src={naryn} alt="" />
            <h5>Naryn</h5>
          </div>
          <div className= {`blockT ${showBlock4 ? "show4" : ""}`} onMouseEnter={handleTalasHover} onMouseLeave={handleTalasLeave}>
            <img src={talas} alt="" />
            <h5>Talas</h5>
          </div>
          <div className= {`blockJ ${showBlock5 ? "show5" : ""}`} onMouseEnter={handleJalalHover} onMouseLeave={handleJalalLeave}>
            <img src={jalal} alt="" />
            <h5>JalalAbad</h5>
          </div>
          <div className= {`blockO ${showBlock6 ? "show6" : ""}`} onMouseEnter={handleOshHover} onMouseLeave={handleOshLeave}>
            <img src={osh} alt="" />
            <h5>Osh</h5>
          </div>
          <div className= {`blockB ${showBlock7 ? "show7" : ""}`} onMouseEnter={handleBatkenHover} onMouseLeave={handleBatkenLeave}>
            <img src={batken} alt="" />
            <h5>Batken</h5>
          </div>
         </div>
        </div>
      </div>
    </div>
  );
};

export default MapKg;
