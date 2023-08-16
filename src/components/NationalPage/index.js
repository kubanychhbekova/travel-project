import React from "react";
import national1 from "../../img/national1.png";
import national2 from "../../img/national2.png";
import national3 from "../../img/national3.png";
import national4 from "../../img/national4.png";

const NationalPage = () => {
  return (
    <div id="national">
      <div className="container">
        <div className="national">
          <div className="national--page">
            <h1>National clothes</h1>
            <p>
              The nomadic way of life is reflected in the Kyrgyz clothes, the
              features of various regions are visible. Natural materials
              prevail: wool, felt, leather, coarse fabrics. The design uses
              ornaments and themes inspired by nature and tribal traditions.
            </p>
          </div>

          <div className="national--page2">
            <img src={national1} alt="" />
            <div className="national--page2__text">
              <h1>Woman suit</h1>
              <p>
                According to tradition, the women's national costume of the
                Kyrgyz women includes three components: a hip swing skirt -
                beldemchi, a cap and a turban. "Beldemchi" - swing skirt sewn to
                a wide belt. Depending on the purpose, it was made of homespun
                cloth or expensive materials. If it was festive clothing, it was
                decorated with embroidery, and turned around with fur along the
                hem. "Beldemchi"
              </p>
            </div>
          </div>
          <div className="national--page3">
            <img src={national2} alt="" />
            <div className="national--page3__text">
              <h1>National women's hat</h1>
              <p>
              A cap is an indispensable attribute of a married woman; she sat tightly on her head and covered her hair. The headdress was decorated with embroidery made with various types of seams. Ornament patterns were made with multi-colored threads, the main colors of the pattern were red, yellow, green and white. The finished product was turned off with a red braid. On top of the cap, they always wore "elechek" - a turban made of white matter. For the first time, a woman was put on a turban, sent to her husband's house, thereby emphasizing her new status
              </p>
            </div>
          </div>
          <div className="national--page4">
            <img src={national3} alt="" />
            <div className="national--page2__text">
              <h1>Mens headdress</h1>
              <p>
              The men's set of the national costume of Kyrgyzstan, in turn, also included mandatory elements. "Kementai" - a swinging felt robe, which was girded with a leather belt or sash, this clothing is an indispensable attribute of cattle breeders, which perfectly protected from rain and wind. White - especially valuable, felt robes, could only be afforded by very wealthy peasants. "Jargakshym" ...
              </p>
            </div>
          </div>
          <div className="national--page2">
            <img src={ national4} alt="" />
            <div className="national--page2__text">
              <h1>Outerwear for men</h1>
              <p>
              Men wore spacious trousers made of leather or suede, embroidered with colored threads (chalbar, kandagai), loose-fitting shirts (koynek), and a felt robe (kementai). Noble and rich people wore jewelry. The male attribute of wealth in clothing is a wide leather belt (kemer), decorated with various silver inserts.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NationalPage;
