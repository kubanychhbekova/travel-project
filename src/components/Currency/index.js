import React from "react";
import onesom from "../../img/one som1.png";
import fife from "../../img/fifesom1.png";
import ten from "../../img/tensom1.png";
import twenty from "../../img/20som1.png";
import fifty from "../../img/50som1.png";
import sto from "../../img/100som1.png";
import twentysto from "../../img/200som1.png";
import fiftysto from "../../img/500som1.png";
import min from "../../img/1000som1.png";
import fiftymin from "../../img/5000som1.png";
import onesom2 from "../../img/onesom2.png";
import fife2 from "../../img/fifesom2.png";
import ten2 from "../../img/tensom2.png";
import twenty2 from "../../img/20som2.png";
import fifty2 from "../../img/50som2.png";
import sto2 from "../../img/100som2.png";
import twentysto2 from "../../img/200som2.png";
import fiftysto2 from "../../img/500som2.png";
import min2 from "../../img/1000som2.png";
import fiftymin2 from "../../img/5000som2.png";

const Currency = () => {
  return (
    <div id="currency">
      <div className="container">
        <div className="currency">
          <div className="currency--page">
            <h1>Currency</h1>
            <p>
              The nomadic way of life is reflected in the Kyrgyz clothes, the
              features of various regions are visible. Natural materials
              prevail: wool, felt, leather, coarse fabrics. The design uses
              ornaments and themes inspired by nature and tribal traditions.
            </p>
          </div>
          <div className="currency--blocks">
            <div className="currency--blocks__block">
              <div className="currency--blocks__block--img1">
                <img src={onesom} alt="" />
                <img src={fife} alt="" />
                <img src={ten} alt="" />
                <img src={twenty} alt="" />
                <img src={fifty} alt="" />
                <img src={sto} alt="" />
                <img src={twentysto} alt="" />
                <img src={fiftysto} alt="" />
                <img src={min} alt="" />
                <img src={fiftymin} alt="" />
              </div>
              <div className="currency--blocks__block--img2">
                <img src={onesom2} alt="" />
                <img src={fife2} alt="" />
                <img src={ten2} alt="" />
                <img src={twenty2} alt="" />
                <img src={fifty2} alt="" />
                <img src={sto2} alt="" />
                <img src={twentysto2} alt="" />
                <img src={fiftysto2} alt="" />
                <img src={min2} alt="" />
                <img src={fiftymin2} alt="" />
              </div>
            </div>
            <div className="currency--blocks__text">
              <h1>National currency of Kyrgyzstan</h1>
              The national currency of Kyrgyzstan is the som, its <br />{" "}
              international designation is KGS. The resolution on the <br />
              introduction of the national currency was adopted by the <br />
              Parliament of Kyrgyzstan on May 10, 1993. Kyrgyzstan <br /> became
              the second CIS country after Russia to adopt its <br /> own
              national currency after the collapse of the Soviet <br /> Union.{" "}
              <br />
              <br />
              The national currency of Kyrgyzstan is represented by ten <br />
              denominations of banknotes: 1, 5, 10, 20, 50, 100, 200, 500,{" "}
              <br /> 1000 and 5000 soms and coins of 10 and 50 tyiyns, 1, 3 and{" "}
              <br /> 5 soms. One som is equal to 100 tyiyns, however, in
              reality, <br /> tyiyns are used quite rarely. Sometimes 50 tyiyn
              come <br /> across, but most often the smallest unit is 1 som.{" "}
              <br />
              <br />
              The 20-som banknote depicts the famous akyn Togolok <br /> Moldo,
              as well as the 15th century caravanserai Tash Rabat, <br /> which
              is located in Naryn. The banknote of 50 soms is <br /> dedicated
              to the leader and ruler of Kurmanjan-datka; in <br /> addition, a
              minaret and a mausoleum in Uzgen are <br /> depicted here. On the
              100-som bill you can see another <br /> famous akyn - Toktogul
              Satylganov, as well as the Toktogul <br /> hydroelectric power
              station named after him. One of the <br /> greatest poets of the
              20th century Alykul Osmonov and a <br /> panorama of Lake
              Issyk-Kul are on the banknote of 200 <br /> soms.
              <br />
              The 500-som banknote depicts the manaschi Sayakbay <br />{" "}
              Karalayev and the Manas mausoleum in Talas. Yusuf <br />{" "}
              Balasagun, depicted on the banknote of 1000 soms, was a <br />{" "}
              famous poet during the reign of the Karakhanids, on the <br />{" "}
              banknote he is accompanied by Sulaiman-Too, a sacred <br />{" "}
              mountain included in the UNESCO World Heritage List. <br /> On the
              largest denomination of 5,000 soms there is a<br /> portrait of
              actor Suimenkul Chokmorov and Ala-Too <br /> Square in Bishkek.{" "}
              <br />
              <br />
              The economy of Kyrgyzstan is mostly cash driven, but <br /> ATMs
              can be found in major cities. Banks and exchange <br /> offices
              can change any common currency, but it is <br /> desirable that
              the banknotes are new and legible. Banks in <br /> Kyrgyzstan are
              open from 9.00-9.30 to 17.00-17.30 from <br /> Monday to Friday,
              the day off is Saturday and Sunday. <br /> Exchange offices are
              most often open around the clock. <br />
              <br />
              Moscow City Council is the busiest currency exchange <br /> area
              in Bishkek, where travelers can count on a good <br /> exchange
              rate at any hour. Outside of Bishkek, ATMs and <br /> exchange
              offices are less common. Going to more remote <br /> regions of
              Kyrgyzstan, it is better to make sure that you <br /> have enough
              money with you
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Currency;
