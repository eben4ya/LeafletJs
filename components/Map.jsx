"use client";

import React from "react";
import { MapContainer, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css"; // icon property of Marker component will not work without this
import Area from "@/components/Area";

const Map = () => {
  return (
    <MapContainer
      center={[-7.773799350856907, 110.37835060458946]}
      zoom={20}
      scrollWheelZoom={true}
      style={{ height: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://tile.openstreetmap.de/{z}/{x}/{y}.png"
      />

      <Area />
    </MapContainer>
  );
};

export default Map;
