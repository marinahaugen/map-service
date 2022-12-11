import { useEffect, useRef, useState } from "react";
import { Map } from "mapbox-gl";

export const MapSidebar = () => {
  const mapInitRef = useRef<Map | null>(null);
  const [lng, setLng] = useState(10.728);
  const [lat, setLat] = useState(59.91);
  const [zoom, setZoom] = useState(11);

  useEffect(() => {
    mapInitRef.current &&
      mapInitRef.current.on("move", () => {
        setLng(mapInitRef.current!.getCenter().lng);
        setLat(mapInitRef.current!.getCenter().lat);
        setZoom(mapInitRef.current!.getZoom());
        console.log("On the move");
      });
  });

  return (
    <div id="text" className={"sidebar"}>
      Longitude: {lng} | Latitude: {lat} | Zoom:{zoom}
    </div>
  );
};
