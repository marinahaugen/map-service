import React, { useEffect, useRef, useState } from "react";
import ReactMapboxGl from "react-mapbox-gl";
import DrawControl from "react-mapbox-gl-draw";
import "@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css";
import "./Map.css";

export default function Map() {
  const map = useRef();
  let [center, setCenter] = useState([10.1, 59.1]);
  let [zoom, setZoom] = useState([11]);
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
  };

  useEffect(() => {
    console.log("In useEffect:", zoom);
  }, [zoom]);

  useEffect(() => {
    getAllFeatures();
  }, []);

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

  const onZoomEnd = (map, event) => {
    setZoom(() => zoom = [...[map.getZoom()]])
  }

  const onMoveEnd = (map, event) => {
    console.log(map)
    //setCenter(() => center = map.props)
  }

  return (
    <div id="map-container">
      <h1 id="text">Welcome to Map Service</h1>

      <div id="text" className={"sidebar"}>
        Longitude: {center[0]} | Latitude: {center[0]} | Zoom:{zoom}
      </div>

      <MapComp
        ref={map}
        className="map"
        containerStyle={{ height: "100vh", width: "100vw" }}
        style={"mapbox://styles/rosamh/clbcshso8000615t3hncfgc8r"}
        position="top-right"
        onMoveEnd={onMoveEnd}
        center={center}
        zoom={zoom}
        onZoomEnd={onZoomEnd}
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
