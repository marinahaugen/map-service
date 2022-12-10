import { Map } from "mapbox-gl";
import MapboxDraw from "@mapbox/mapbox-gl-draw";

export const initMap = (
  container: HTMLDivElement,
  center: [number, number],
  zoom: number
) => {

  const map = new Map({
    container,
    style: "mapbox://styles/mapbox/streets-v12",
    center,
    zoom,
    accessToken: process.env.REACT_APP_MAPBOX_TOKEN,
  })

  const draw = new MapboxDraw({
    displayControlsDefault: false,
    controls: {
      polygon: "true",
      point: "true",
      trash: "true",
    },
  });

  map.addControl(draw, "top-left");

  return map;
};
