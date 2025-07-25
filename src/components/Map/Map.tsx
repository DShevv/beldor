"use client";
import React, { useEffect, useRef } from "react";
import clsx from "clsx";
import styles from "./Map.module.scss";
import Marker from "@/components/Marker/Marker";
import { StaticImageData } from "next/image";

declare global {
  interface Window {
    ymaps3: typeof import("@yandex/ymaps3-types");
  }
}

function Map({
  className,
  address,
  logo,
}: {
  className?: string;
  address?: string;
  logo: string | StaticImageData;
}) {
  const mapRef = useRef(null);

  useEffect(() => {
    async function initMap() {
      if (mapRef.current && address) {
        await ymaps3.ready;

        const {
          YMap,
          YMapDefaultSchemeLayer,
          YMapDefaultFeaturesLayer,
          YMapMarker,
        } = ymaps3;

        const searchResponse = await ymaps3.search({ text: address });

        const coordinates = searchResponse[0]?.geometry?.coordinates;

        const map = new YMap(
          mapRef.current,
          {
            location: { center: coordinates, zoom: 16 },
            mode: "vector",
          },
          [
            new YMapDefaultSchemeLayer({
              /* customization: mapStyles as VectorCustomizationItem[], */
            }),
            new YMapDefaultFeaturesLayer({}),
          ]
        );

        map.addChild(
          new YMapMarker(
            {
              coordinates: coordinates || [0, 0],
              draggable: false,
              mapFollowsOnDrag: true,
            },
            Marker(typeof logo === "string" ? logo : logo.src)
          )
        );
      }
    }

    initMap();
  }, [mapRef, address, logo]);

  return (
    <>
      <div ref={mapRef} className={clsx(styles.container, className)} />
    </>
  );
}

export default Map;
