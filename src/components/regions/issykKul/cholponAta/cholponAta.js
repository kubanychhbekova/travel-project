import React from 'react';
import img from "../../../../img/cholpon.png";
import temp from "../../../../img/temp.png";

const CholponAta = () => {
    return (
        <div id="cholpon">
            <div className="container">
                <div className="cholpon">
                    <div className="cholpon--first">
                        <img src={img} alt=""/>
                        <img src={temp} alt=""/>
                        <div className="cholpon--first__title">
                            <h1>Cholpon-Ata </h1>
                            <p>Cholpon-Ata is the most famous resort town on the shore of Lake Issyk-Kul. Once upon a time, caravans of the Great Silk Road passed through Cholpon-Ata. Today, tens of thousands of tourists from all over the CIS come to Cholpon-Ata. The city is famous for its clean sandy beaches and transparent lake.
                                The best time to visit Cholpon-Ata is from mid–June to September. </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CholponAta;