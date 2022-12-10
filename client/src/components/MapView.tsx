import React from "react";
import { useRef } from "react";
import { useMap } from "../hooks/useMap";

export const MapView = () => {
  const mapRefContainer = useRef<HTMLDivElement>(null);
  useMap(mapRefContainer);

  return <div ref={mapRefContainer} className="map" />;
};
