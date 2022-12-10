import React, {useState} from "react";
import * as turf from "@turf/turf";

const FeatureDataCalc = ({draw}) => {
   // const data = draw.getAll():
   const data = [];
    const answer = document.getElementById("calculated-area");

    if (data.features.length > 0) {
      const area = turf.area(data);
      const roundedArea = Math.round(area * 100) / 100;
      answer = (
        <>
          <p>
            <strong>${roundedArea}</strong>
          </p>
          <p>square meters</p>
        </>
      );
    } else {
      answer = "?";
    }

    return (
      <div className={"calculation-box"} id="text">
      <p>The area is: </p>
      <div id="calculated-area"></div>
    </div>
    )
  };

  export default FeatureDataCalc;
