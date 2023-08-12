import React from "react";
import hands1 from "../../img/hands3.png";
import hands2 from "../../img/hands1.png";
import hands3 from "../../img/hands2.png";
import hands4 from "../../img/hands4.png";

const HandsPage = () => {
  return (
    <div id="hands">
      <div className="container">
        <div className="hands">
          <div className="hands--page">
            <h1>Hand crafts</h1>
            <p>
              Carpet art occupies a separate place in the material culture of
              all Central Asian peoples. This is a separate category of applied
              craft, which has its own customs and traditions. Carpet weaving is
              an art that has a centuries-old history.
            </p>
          </div>

          <div className="hands--page2">
            <img src={hands1} alt="" />
            <div className="hands--page2__text">
              <h1>Kyrgyz carpet: shyrdak</h1>
              <p>
                The most popular type of felt carpet in Kyrgyzstan today is
                shyrdak. It is made using mosaic technique, which is one of the
                most difficult, while one of the most important qualities of
                shirdak is durability. The average service life of a shyrdak is
                about 100 years, sometimes even more.
              </p>
            </div>
          </div>
          <div className="hands--page3">
            <img src={hands2} alt="" />
            <div className="hands--page3__text">
              <h1>Tush kiiz </h1>
              <p>
                Kurak is the name given to various types of items made from
                scraps sewn together. The name comes from the word "kura", which
                means "sewn together - assembled from separate pieces" and
                refers to both finished products and the method of their
                production. This type of handicraft can be found throughout
                Central Asia. It was also practiced throughout Kyrgyzstan, but
                especially in the south.
              </p>
            </div>
          </div>

          <div className="hands--page4">
            <img src={hands3} alt="" />
            <div className="hands--page4__text">
              <h1>Tush kiiz </h1>
              <p>
                Kurak is the name given to various types of items made from
                scraps sewn together. The name comes from the word "kura", which
                means "sewn together - assembled from separate pieces" and
                refers to both finished products and the method of their
                production. This type of handicraft can be found throughout
                Central Asia. It was also practiced throughout Kyrgyzstan, but
                especially in the south.
              </p>
            </div>
          </div>
          <div className="hands--page5">
            <img src={hands4} alt="" />
            <div className="hands--page5__text">
              <h1>Kyrgyz yurts </h1>
              <p>
              Yurts are one of the most important parts of Kyrgyz culture and are more than just houses. They symbolize family, earth and universe and cover all stages of life from birth to death. Much of Kyrgyz culture is associated with yurts, from important rituals and ceremonies to handicrafts and traditional craftsmanship.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HandsPage;
