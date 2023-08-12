import React from "react";
import komuz from "../../img/komuz.png";
import oozkomuz from "../../img/oozkomuz.png";
import kylkyyak from "../../img/kylkyyak.png";
import dobulbas from "../../img/dobulbas.png";

const InstrumentPage = () => {
  return (
    <div id="instrument">
      <div className="container">
        <div className="instrument">
          <div className="instrument--page">
            <h1>National instruments</h1>
            <p>
              Kyrgyz music is notable for being in tune with nature and life in
              the mountains. The texts of many songs tell about the everyday
              life of nomads, and even in compositions where there are no words,
              the corresponding mood is subtly conveyed. There are many musical
              instruments in Kyrgyzstan.
            </p>
          </div>

          <div className="instrument--page2">
            <img src={komuz} alt="" />
            <div className="instrument--page2__text">
              <h1>Komuz</h1>
              <p>
                The most iconic is the komuz, a three-stringed instrument
                resembling a small guitar. The komuz performs both lyrical
                melodies and percussion melodies, reminiscent of the sound of a
                horse's hooves. The masters of playing the komuz are called
                komuzchi. They demonstrate their skills by performing complex
                passages, holding the instrument behind their backs, on their
                heads and even upside down. Songs for komuz are very different
                in their content: some tell certain stories, others describe the
                beauty of the landscape, others are just comic. About 1000
                komuzchi performed at the World Nomad Games, playing "Mash
                Botoi" - one of the most famous works written for komuz.
              </p>
            </div>
          </div>
          <div className="instrument--page3">
            <img src={oozkomuz} alt="" />
            <div className="instrument--page3__text">
              <h1>Temir-komuz </h1>
              <p>
                Temir-komuz is a plucked reed musical instrument that is very
                popular in Kyrgyzstan. Chopo-choor (clay "chor") is an ancient
                wind instrument. The performer holds the instrument near his
                mouth, fingering the holes along the length of the chopo-choor.
                The timbre of the instrument is deep and clear in low sounds,
                somewhat nasal. Kyrgyz music cannot be imagined without the use
                of percussion instruments, such as drums.
              </p>
            </div>
          </div>

          <div className="instrument--page4">
            <img src={kylkyyak} alt="" />
            <div className="instrument--page4__text">
              <h1>Kyl-kyyak </h1>
              <p>
                Kyl-kyyak (kyyak) is a stringed instrument with a bow. It is
                made from the same types of wood as komuz. The instrument has
                two strings and a bow - jaa. The kyyak has the shape of a ladle,
                with an open upper half, and the lower half is covered with
                camel skin. It is believed that kyl-kyyak and other stringed
                Central Asian instruments were the first stringed instruments in
                the world.
              </p>
            </div>
          </div>
          <div className="instrument--page5">
            <div className="instrument--page5__img">
                <img src={dobulbas} alt="" />
            </div>
            <div className="instrument--page5__text">
              <h1>Dobulbash</h1>
              <p>
                Dobulbash is a folk percussion instrument. The main carrier of
                rhythm is one of the most powerful means of influencing the
                artistic thinking of a person.Dobulbash is a one-sided drum
                covered with leather on top. The height of the body carved from
                juniper does not exceed 60 cm, the diameter of the membrane
                covered with camel skin is 25-30 cm. The instrument sounds
                strong, loud and long, can be used to give military or magical
                signals.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstrumentPage;
