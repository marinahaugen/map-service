import React, { useEffect, useRef, useState } from "react";
import { Map } from "mapbox-gl";
import { initMap } from "../utils/initMap";
import { createFeatureHandler, getFeatureHandler } from "../services/features";

export const useMap = async (container: React.RefObject<HTMLDivElement>) => {
  const mapInitRef = useRef<Map | null>(null);
  const firstFeature = await getFeatureHandler('63986532d08583006e57b725');

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

        mapInitRef.current && mapInitRef.current.addSource("first", firstFeature);

        mapInitRef.current &&
          mapInitRef.current.addLayer({
            id: "first",
            type: "fill",
            source: "first", // reference the data source
            layout: {},
            paint: {
              "fill-color": "#0080ff", // blue color fill
              "fill-opacity": 0.5,
            },
          });

        mapInitRef.current &&
          mapInitRef.current.on("draw.create", (e) => {
            console.log(e.features[0].geometry);
            createFeatureHandler(e.features[0].geometry);
          });

        mapInitRef.current &&
          mapInitRef.current.on("draw.delete", (e) => {
            console.log(e.features[0].geometry);
          });

        mapInitRef.current &&
          mapInitRef.current.on("draw.update", (e) => {
            console.log(e.features[0].geometry);
          });
      });

    mapInitRef.current &&
      mapInitRef.current.on("move", () => {
        console.log("UseMap: On the move");
      });
  }, []);
};
