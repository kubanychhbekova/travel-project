import React, { useEffect, useState } from "react";
import { GrFormNextLink } from "react-icons/gr";
import { Link } from "react-router-dom";
// import culture from "../../img/Culturebg.png"
import axios from "axios";
import { BASE_URL } from "../../API";

const Culture = () => {
  const [culture, setCulture] = useState([]);

  function getCulture() {
    axios(`${BASE_URL}/api/v1/culture/culture_categories_list/
  `).then((res) => {
      console.log(res.data);
      setCulture(res.data.results);
    });
  }

  useEffect(() => {
    getCulture();
  }, []);

  return (
    <div id="culture">
      <div className="container">
        <div className="culture">
          <div className="culture--block">
            <h1>Culture</h1>
            <p>The culture of Kyrgyzstan was formed under the strong influence of nomadic life. In addition, it was influenced by the cultures of Russia, Persia and Turkey, and yet it remained quite original and unique. The connection of Kyrgyz culture with nature can be traced everywhere: from design to music. One of the most famous examples of Kyrgyz culture is the Manas epic, an incredibly long poem that was passed down orally from one generation to the next.</p>
            <div className="culture--block__box">
              {
                culture.map((el)=>(
                  <div className="culture--block__box--game1">
                <div className="culture--block__box--game1__text">
                <h3>{el.name_en}<br/></h3>
                </div>
                <div className="culture--block__box--game1__icon">
                <Link to={`/cultureDetail/${el.id}`}>
                  <GrFormNextLink />
                </Link>
                </div>
              </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Culture;
