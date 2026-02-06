"use client";

import React, { useEffect, useRef } from "react";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";

function MapComponent() {
  const mapContainer = useRef(null);

  useEffect(() => {
    const map = new maplibregl.Map({
      container: mapContainer.current,
      style: "/MapData/darkModeMap.json",
      center: [127.3845, 36.3504], // [경도, 위도] 남한 육지 중심점 (대전 인근?)
      zoom: 7,
    });

    map.addControl(new maplibregl.NavigationControl());

    return () => map.remove();
  }, []);

  return <div ref={mapContainer} style={{ width: "100%", height: "100vh" }} />;
}

export default MapComponent;
