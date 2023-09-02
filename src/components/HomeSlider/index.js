import React, { useEffect, useState } from "react";
import { BiChevronRight, BiChevronLeft } from "react-icons/bi";
import axios from "axios";
import { BASE_URL } from "../../API";
import {HiArrowNarrowRight} from "react-icons/hi"
import { Link, useParams } from "react-router-dom";

const HomeSlider = () => {
  const [slider, setSlider] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    axios.get(`${BASE_URL}/api/v1/culture/culture_categories_list/`)
      .then((res) => {
        console.log(res.data.results);
        setSlider(res.data.results);
      });
  }, []);

  const filteredSlider = slider.filter(
    (item) => item.name !== "Валюта" && item.name !== "Национальная одежда"
  );

  // Определите порядок объектов для отображения
  const order = ["Национальные инструменты", "Ручные поделки", "Игры", "Кухня"];

  // Отсортируйте массив filteredSlider в соответствии с порядком
  const sortedSlider = filteredSlider.sort((a, b) =>
    order.indexOf(a.name) - order.indexOf(b.name)
  );

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % sortedSlider.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + sortedSlider.length) % sortedSlider.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div id="homeSlider">
      <div className="container">
        <div className="homeSlider">
          {sortedSlider.length > 0 && (
            <div className="homeSlider--item">
              <img src={sortedSlider[currentSlide].image} alt={sortedSlider[currentSlide].name} />
              <div className="homeSlider--item__text">
                <h2>{sortedSlider[currentSlide].name_en}</h2>
              <p>{sortedSlider[currentSlide].description_en}</p>
              <Link to={`/cultureDetail/${sortedSlider[currentSlide].id}`}>
              <div className="homeSlider--item__text--block">
                <h3>More</h3>
                <HiArrowNarrowRight/>
              </div>
              </Link>
              </div>
            </div>
          )}
        </div>
        <div className="homeSlider--pagination">
          <button className="homeSlider--pagination__btn1" onClick={prevSlide}>
            <BiChevronLeft />
          </button>
          {sortedSlider.map((item, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={currentSlide === index ? "active" : ""}
            >
              {index + 1}
            </button>
          ))}
          <button className="homeSlider--pagination__btn2" onClick={nextSlide}>
            <BiChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeSlider;
