import React from "react";
import { useRef } from "react";
import { useMap } from "../hooks/useMap";
import { MapSidebar } from "./MapSidebar";

export const MapView = () => {
  const mapRefContainer = useRef<HTMLDivElement>(null);
  useMap(mapRefContainer);

  return (
    <div>
      <h1 id="text">Welcome to Map Service</h1>
      <MapSidebar/>
      <div ref={mapRefContainer} className="map-container" />;
    </div>
  );
};
