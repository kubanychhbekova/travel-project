import axios from "axios";
import React, { useEffect, useState } from "react";
import { BASE_URL } from "../../API";
import { useParams } from "react-router-dom";

const CultureDetails = () => {
  const [detail, setDetail] = useState([]);
  const [list, setList] = useState([]);
  const { cultureId } = useParams();

  function getDetail() {
    axios(
      `${BASE_URL}/api/v1/culture/culture_categories_detail/${cultureId}/`
    ).then((res) => {
      console.log(res.data.cultures);
      setDetail(res.data.cultures);
    });
  }
  
  function getList() {
    axios(`${BASE_URL}/api/v1/culture/culture_categories_list/`).then((res) => {
      setList(res.data.results);
    });
  }

  useEffect(() => {
    getList(BASE_URL);
  }, []);

  useEffect(() => {
    getDetail(BASE_URL);
  }, []);

  if (list.length === 0 || detail.length === 0) {
    return <div>Loading...</div>;
  }
  const matchingList = list.find((el) => el.id === Number(cultureId));

  return (
    <div id="cultureDetail">
      <div className="container">
        <div className="cultureDetail">
        {matchingList && (
          <div className="cultureDetail--box" key={matchingList.id}>
            <h1>{matchingList.name_en}</h1>
            <p>{matchingList.description_en}</p>
          </div>
        )}

          {detail.map((el) => (
            <div className="cultureDetail--block">
              <img src={el.image} alt="" />
              <div className="cultureDetail--block__text">
                <h3>{el.name_en}</h3>
                <h5>{el.description_en}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CultureDetails;
