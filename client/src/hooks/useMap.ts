import React, { useEffect, useRef, useState } from "react";
import { Map } from "mapbox-gl";
import { initMap } from "../utils/initMap";
import { createFeatureHandler } from "../services/features";

export const useMap = (container: React.RefObject<HTMLDivElement>) => {
  const mapInitRef = useRef<Map | null>(null);

  // if value of map container exists, initialize map
  useEffect(() => {
    if (container.current) {
      mapInitRef.current = initMap(container.current, [10.728, 59.91], 11);
    }
  }, [container]);

  // if map has been initalized (has value of instance), execute event
  useEffect(() => {
    mapInitRef.current &&
      mapInitRef.current.on("load", () => {
        console.log("Load done, ready to draw");
        mapInitRef.current &&
          mapInitRef.current.on("draw.create", (e) => {console.log(e.features[0])
          createFeatureHandler(e.features[0])}
          );
      });

    mapInitRef.current &&
      mapInitRef.current.on("move", () => {
        console.log("On the move");
      });
  }, []);
};
