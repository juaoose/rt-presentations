import * as React from "react";
import Map from "react-map-gl";
import { Outlet } from "react-router-dom";
// This import is more important than one would think
import "mapbox-gl/dist/mapbox-gl.css";

export default function MapComponent() {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Map
        initialViewState={{
          longitude: -122.4,
          latitude: 37.8,
          zoom: 14,
        }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        mapboxAccessToken="pk.eyJ1IjoiampqampqampqampqampqampqaiIsImEiOiJja290MThwMzIwNjNkMndwaHR5djlhYThqIn0.zULjRWtxmVmaWe-FDobI-A"
      >
        <Outlet />
      </Map>
    </div>
  );
}
