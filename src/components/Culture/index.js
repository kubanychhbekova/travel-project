import React from "react";
import { GrFormNextLink } from "react-icons/gr";
import { Link } from "react-router-dom";

const Culture = () => {
  return (
    <div id="culture">
      <div className="container">
        <div className="culture">
          <div className="culture--block">
            <h1>Culture</h1>
            <p>
              The culture of Kyrgyzstan was formed under the strong influence of
              nomadic life. In addition, it was influenced by the cultures of
              Russia, Persia and Turkey, and yet it remained quite original and
              unique. The connection of Kyrgyz culture with nature can be traced
              everywhere: from design to music. One of the most famous examples
              of Kyrgyz culture is the Manas epic, an incredibly long poem that
              was passed down orally from one generation to the next.
            </p>
            <div className="culture--block__box">
            <div className="culture--block__box--game1">
              <h3>Game</h3>
              <Link to={"/games"}>
              <GrFormNextLink/>
              </Link>
            </div>
            <div className="culture--block__box--game2">
              <h3>National clothes</h3>
              <Link to={"/national"}>
              <GrFormNextLink />
              </Link>
            </div>
            <div className="culture--block__box--game3">
              <h3>Hand crafts</h3>
              <Link to={"/hand"}>
              <GrFormNextLink />
              </Link>
            </div>
            <div className="culture--block__box--game4">
              <h3>Currency</h3>
              <Link to={"/currency"}>
              <GrFormNextLink />
              </Link>
            </div>
            <div className="culture--block__box--game5">
              <h3>National instruments</h3>
              <Link to={"/instrument"}>
              <GrFormNextLink />
              </Link>
            </div>
            <div className="culture--block__box--game6">
              <h3>Kitchen</h3>
              <Link to={"/kitchen"}>
              <GrFormNextLink />
              </Link>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Culture;
