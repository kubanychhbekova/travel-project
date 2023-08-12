import React from "react";
import beshbarmak from "../../img/beshbarmak.png";
import shorpo from "../../img/shorpo.png";
import chuchuk from "../../img/Chuchuk.png";
import borsok from "../../img/borsok.png";
import kymyz from "../../img/kymyz.png";
import maksym from "../../img/maksym.png";
import kurut from "../../img/kurut.png";

const Kitchen = () => {
  return (
    <div id="kitchen">
      <div className="container">
        <div className="kitchen">
          <div className="kitchen--page">
            <h1>Kitchen</h1>
            <p>
              Kyrgyzstan is a country where at the crossroads of the Great Silk
              Road, the traditional nomadic culture and the sedentary culture
              merged. A distinctive feature of Kyrgyz dishes is that they are
              all prepared exclusively from fresh products and are rarely
              stocked up for future use, and the recipes for their preparation,
              although they seem quite simple, in fact contain many subtleties
              that are rather difficult to master.
            </p>
          </div>

          <div className="kitchen--page1">
            <div className="kitchen--page1__imgs">
              <img src={beshbarmak} alt="" />
              <div className="kitchen--page1__imgs--img1">
                <img src={shorpo} style={{ marginRight: "11px" }} alt="" />
                <img src={chuchuk} alt="" />
              </div>
              <img src={borsok} alt="" />
            </div>
            <div className="kitchen--page1__text">
              <h1>National cuisine of Kyrgyzstan</h1>
              <p>
                The national cuisine in Kyrgyzstan is rich and varied. It has
                been formed throughout the history of the Kyrgyz people and has
                absorbed the most delicious dishes and drinks left over from the
                time of nomadic life, as well as dishes of neighboring peoples
                in the region. <br />
                <br />
                Most traditional dishes cannot do without meat. Mutton, beef,
                yak meat and horse meat, especially loved and appreciated by the
                Kyrgyz, are used for food. <br />
                <br />
                The most famous Kyrgyz dish is beshbarmak - boiled, finely
                chopped lamb, filled with broth, with the addition of onions and
                noodles. The name of this dish is translated from Kyrgyz as
                "five fingers", and is traditionally eaten with the hands. For
                the Kyrgyz people, beshbarmak is not just a dish - it is a whole
                ceremony with its own traditions and customs. The ram is cut and
                boiled in a cauldron until the broth is ready for consumption,
                and the meat on the bones is for distribution among the
                participants in the meal. <br />
                <br />
                First, guests are given zhash shorpo - a strong broth seasoned
                with onions, then kuiruk-boor - liver and fat tail fat, cut into
                small slices and seasoned with a special sauce, then kabyrga -
                ribs with a thick layer of meat and lard. Finally, beshbarmak
                itself is served on a large dish - finely chopped meat mixed
                with noodles and seasoned with onion sauce. <br />
                <br />
                No meal is complete without bread. Usually, bread is in the form
                of flatbreads, which are cooked in cauldrons (geomkyormyo
                tokoch), in a frying pan (geomechtön) or in special ovens
                (tandoor-nan). On holidays, they prepare a special treat -
                boorsok - sweet pieces of yeast dough fried in oil.
              </p>
            </div>
          </div>
          <div className="kitchen--page2">
            <img src={kymyz} alt="" />
            <div className="kitchen--page2__text">
              <h1>Kumis </h1>
              <p>
                Kumis is one of the most ancient drinks of the Kirghiz. It is
                made from mare's milk. Kumis has many healing properties. It
                improves the functioning of the digestive system and improves
                the blood. Regulates the metabolic process in the body. Kumis
                improves mood and improves health. Freshly milked mare's milk is
                poured into special containers (saba), and with the help of a
                special stick (bishkek) it is shaken into koumiss until cooked.
                Mare's koumiss cooked in early spring is called "uuz kymyz",
                fermented kymyz from a two-year-old mare is called "bal kymyz",
                cooked in late autumn - "sook kymyz", fermented for 5-6 hours -
                called saamal kymyz "
              </p>
            </div>
          </div>

          <div className="kitchen--page3">
            <img src={maksym} alt="" />
            <div className="kitchen--page3__text">
              <h1>Maksym </h1>
              <p>
                Maksym is a non-alcoholic, environmentally friendly drink. Made
                from selected varieties of barley, wheat, corn, with the
                addition of roasted peanuts, on artesian water. Contains
                vitamins necessary for the human body: B1, B2, C, PP. Perfectly
                satisfies thirst and hunger, has tonic and healing properties.{" "}
                <br />
                <br />
                In Kyrgyzstan, there are two more drinks that adults drink. Bozo is made from millet, corn or millet and yeast. It has a light degree (4-6%) and a sweetish taste. Dzarma (zharma) - a drink made from barley - also has a small degree.
              </p>
            </div>
          </div>

          <div className="kitchen--page4">
            <img src={kurut} alt="" />
            <div className="kitchen--page4__text">
              <h1>Kurut </h1>
              <p>
              Kurut is a dish without which one cannot imagine the traditional cuisine of many Central Asian countries, such as Kazakhstan, Uzbekistan, Mongolia. It is found even in Georgia and Armenia. It is not surprising that this cheese is called differently in each region: kurut, khurud, korot or hort. The term can be translated from Turkic as “dried”, because the cheese is obtained as a result of drying in the sun.
                <br />
                <br />
                Depending on the recipe and the ingredients added, it can be more spicy, spicy or sweet, somewhat reminiscent of dry cottage cheese. Most often it has a white tint, but there are also dark varieties.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kitchen;
