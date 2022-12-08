import React, { useEffect, useRef, useState } from "react";
import ReactMapboxGl from "react-mapbox-gl";
import DrawControl from "react-mapbox-gl-draw";
import "@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css";
import "./Map.css";

export default function Map() {
  const map = useRef();
  const [viewPort, setViewPort] = useState({
    center: [10.733, 59.9056],
    zoom: [13],
  });
  const [features, setFeatures] = useState([]);

  const MapComp = new ReactMapboxGl({
    accessToken: process.env.REACT_APP_MAPBOX_TOKEN,
  });

  const getAllFeatures = async () => {
    try {
      const result = await fetch("http://localhost:8080/features", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const resultInJson = await result.json();
      setFeatures(resultInJson);
      console.log("print obj:", { resultInJson });
    } catch (error) {
      console.log({ message: error.message });
    }
  }

  useEffect(() => {
    getAllFeatures();
  }, [])

  const onDrawCreate = async ({ features }) => {
    try {
      const result = await fetch("http://localhost:8080/features", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(features[0]),
      });
      const resultInJson = await result.json();
      console.log("print obj:", { resultInJson });
    } catch (error) {
      console.log({ message: error.message });
    }
  };

  return (
    <div id="map-container">
      <h1 id="text">Welcome to Map Service</h1>

      <div id="text" className={"sidebar"}>
        Longitude: 10.733 | Latitude: 59.9056 | Zoom: 13
      </div>

      <MapComp
        ref={map}
        className="map"
        containerStyle={{ height: "100vh", width: "100vw" }}
        style="mapbox://styles/rosamh/clbcshso8000615t3hncfgc8r"
        position="top-right"
        onMove={(e) => console.log('On the move')}
        zoom={viewPort.zoom}
        center={viewPort.center}
      >
        <DrawControl
          displayControlsDefault={false}
          controls={{
            polygon: "true",
            point: "true",
            trash: "true",
          }}
          onDrawCreate={(e) => onDrawCreate(e)}
        />
      </MapComp>
    </div>
  );
}
