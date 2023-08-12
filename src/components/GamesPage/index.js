import React from "react";
import ulak from "../../img/games1.png";
import kyzkyymai from "../../img/games2.png";
import kuresh from "../../img/games3.png";
import ordo from "../../img/games4.png";
import enmei from "../../img/games5.png";

const GamesPage = () => {
  return (
    <div id="games">
      <div className="container">
        <div className="games">
          <div className="games--page">
            <h1>Games</h1>
            <p>
              Since ancient times, the Kyrgyz have given a great place to folk
              games and entertainment, not a single folk festival took place
              without them. Traditional equestrian games remain the most beloved
              and revered.
            </p>
          </div>

          <div className="games--page2">
            <img src={ulak} alt="" />
            <div className="games--page2__text">
              <h1>Ulak-tartysh</h1>
              <p>
                Ulak-tartysh, which means "grey wolf". They say that the <br />{" "}
                game originated in those distant times, when herds of
                <br />
                animals grazed in the deserted steppes of Kyrgyzstan, so <br />{" "}
                wolves often attacked livestock, which was a great <br />{" "}
                disaster for people. Since there were no firearms then,
                <br /> courageous horsemen pursued the victim, driving her half
                to death. The game involves two teams, each of which has 6-10
                people. The goal of each team is to throw the carcass of the
                animal into the opponent's goal. It is very difficult to do
                this, since throwing a 20-kilogram carcass requires a lot of
                effort.
              </p>
            </div>
          </div>
          <div className="games--page3">
            <img src={kyzkyymai} alt="" />
            <div className="games--page3__text">
              <h1>Kyz-kuumai </h1>
              <p>
                Kyz-kuumai is a riding competition between a boy and a girl. The
                goal of the game is that the boy must try to catch up with the
                girl. The rider's horse is faster, and it starts off 5-10
                seconds earlier. If the young man can catch up with the girl,
                then he will receive a kiss as a reward, otherwise, the girl
                will hit him with a whip.
              </p>
            </div>
          </div>

          <div className="games--page4">
            <img src={kuresh} alt="" />
            <div className="games--page4__text">
              <h1>Kuresh </h1>
              <p>
                Kuresh is one of the most popular national sports in Kyrgyzstan.
                After the judge gives a sign, the young wrestlers enter the
                fight. In the game, it is allowed to use different tricks, but
                you can’t take your hands off the opponent’s belt. The winner is
                the one who puts his opponent on the shoulder blades.
              </p>
            </div>
          </div>
          <div className="games--page5">
            <img src={ordo} alt="" />
            <div className="games--page5__text">
              <h1>Ordo </h1>
              <p>
                Ordo is one of the most popular Kyrgyz games that have come down
                to us since ancient times. "Ordo" means "khan's headquarters,
                khan's palace". The game reproduces the battle to capture the
                stake. 10 people participate in the competition: seven players,
                one substitute player, coach and team leader Alchiki should be
                without cut off and broken off parts, new, without scuffs.
                Judges must have a measuring stick 40 centimeters long, painted
                red on one side and yellow on the other. A player loses a hit
                if, being in a circle, he points to an alchik with his hand.
                During the game, participants must treat each other with
                respect.
              </p>
            </div>
          </div>
          <div className="games--page6">
            <img src={enmei} alt="" />
            <div className="games--page6__text">
              <h1>Tyiyn enmei </h1>
              <p>
                Tyiyn enmei - getting a coin from the ground at a gallop. This
                type of national games is a kind of horse riding.According to
                the rules of the game, at a distance of 100 meters in a straight
                line, coins are laid out in a hole 1.5–2 cm deep. In
                tyiyn-enmei, a galloping rider must get a coin without any help
                from outside.The depth of the arrangement and its dimensions
                usually depend on the value of the prize. The less valuable the
                prize that goes to the winner, the less the depth of its
                location, and vice versa, the more valuable the prize (coin),
                the deeper its location in the dimple and the less likely it is
                to get it on the run.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GamesPage;
