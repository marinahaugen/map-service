import React, { useEffect, useRef, useState} from "react";
import "./Map.css";
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import MapboxDraw from "@mapbox/mapbox-gl-draw";
import "@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css";

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;

export default function Map() {
  // defaults for initial states
  const mapContainer = useRef(null);
  const [lng, setLng] = useState(10.728);
  const [lat, setLat] = useState(59.91);
  const [zoom, setZoom] = useState(11);
  const [map, setMap] = useState({});

  // initialize the map
  useEffect(() => {
    //if (map.current) return; // initialize map only once
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v12",
      center: [lng, lat],
      zoom: zoom,
      position: "top-right",
    });
    var draw = new MapboxDraw({
      displayControlsDefault: false,
      controls: {
        polygon: "true",
        point: "true",
        trash: "true",
      },
    });
    // add the Draw control to your map
    map.addControl(draw, "top-left");

    map.on("load", function () {
      console.log("Map has loaded and you can interact with draw!");
    });

   setMap(map);
  }, []);

  // stores new state after interaction
  useEffect(() => {
    if (!map.current) return; // wait for map to initialize
    map.current.on("move", () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    });
  });

  return (
    <div>
      <h1 id="text">Welcome to Map Service</h1>

      <div id="text" className={"sidebar"}>
        Longitude: {lng} | Latitude: {lat} | Zoom:{zoom}
      </div>

      <div ref={mapContainer} className={"map-container"} />
    </div>
  )
}
