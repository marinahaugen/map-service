

/*
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import MapboxDraw from "@mapbox/mapbox-gl-draw";
import { useRef } from "react";
import "@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css";

export default function MapDraw(map) {
  // create a Draw control
  var draw = new MapboxDraw({
    displayControlsDefault: false,
    controls: {
      polygon: "true",
      point: "true",
      trash: "true",
    },
  });

  // add the Draw control to your map
  map.addControl(draw);

  map.on('load', function() {
    console.log('Map has loaded and you can interact with draw!')
    draw.add({})
    // ALL YOUR APPLICATION CODE
  });

  return(
    <div>

    </div>
  )


}

//import "@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css";

/* In logic

 const onDrawCreate = async ({ features }) => {
    try {
      console.log("print obj inn:", { features });
      const result = await fetch("http://localhost:8080/features", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(features[0]),
      });
      const resultInJson = await result.json();
      console.log("print obj lagret i db:", { resultInJson });
    } catch (error) {
      console.log({ message: error.message });
    }
  };


*/

/* in return
<DrawControl
        displayControlsDefault={false}
        controls={{
          polygon: "true",
          point: "true",
          trash: "true",
        }}
        onDrawCreate={(e) => onDrawCreate(e)}
      />



*/
