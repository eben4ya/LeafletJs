import React from "react";
import Link from "next/link";
import { Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css"; // icon property of Marker component will not work without this
// import Leaflet from "leaflet";
import { Icon, divIcon } from "leaflet"; // import icon from leaflet
import MarkerClusterGroup from "react-leaflet-cluster";

const marker = [
  {
    geoLoc: [-7.773799350856907, 110.37835060458946],
    title: "GAMAFORCE",
    url: "https://www.google.com/maps/dir/-7.7651462,110.366628/gamaforce+google+map/@-7.7702801,110.364321,15z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x2e7a584aaa2d096b:0xbd125fdd4a20fc71!2m2!1d110.3783514!2d-7.7738059?entry=ttu",
  },
  {
    geoLoc: [-7.765778994618019, 110.37175960302417],
    title: "DTETI FT UGM",
    url: "https://www.google.com/maps/dir/-7.7651462,110.366628/dteti+ft+ugm/@-7.7639309,110.3653879,16z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x2e7a584e127dc863:0x7643dc792fe9ca9!2m2!1d110.3717638!2d-7.765788?entry=ttu",
  },
  {
    geoLoc: [-7.770074157271916, 110.37787880579621],
    title: "GSP UGM",
    url: "https://www.google.com/maps/dir/-7.7651462,110.366628/gsp+ugm/@-7.7693502,110.3681844,15.92z/data=!4m9!4m8!1m1!4e1!1m5!1m1!1s0x2e7a584b387308b7:0xea2ce4460a11afdb!2m2!1d110.377862!2d-7.7701778?entry=ttu",
  },
];

// const markerIcon = Leaflet.divIcon({
//   html: `<?xml version="1.0" ?><svg height="24" version="1.1" width="24" xmlns="http://www.w3.org/2000/svg" xmlns:cc="http://creativecommons.org/ns#" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"><g transform="translate(0 -1028.4)"><path d="m12.031 1030.4c-3.8657 0-6.9998 3.1-6.9998 7 0 1.3 0.4017 2.6 1.0938 3.7 0.0334 0.1 0.059 0.1 0.0938 0.2l4.3432 8c0.204 0.6 0.782 1.1 1.438 1.1s1.202-0.5 1.406-1.1l4.844-8.7c0.499-1 0.781-2.1 0.781-3.2 0-3.9-3.134-7-7-7zm-0.031 3.9c1.933 0 3.5 1.6 3.5 3.5 0 2-1.567 3.5-3.5 3.5s-3.5-1.5-3.5-3.5c0-1.9 1.567-3.5 3.5-3.5z" fill="#c0392b"/><path d="m12.031 1.0312c-3.8657 0-6.9998 3.134-6.9998 7 0 1.383 0.4017 2.6648 1.0938 3.7498 0.0334 0.053 0.059 0.105 0.0938 0.157l4.3432 8.062c0.204 0.586 0.782 1.031 1.438 1.031s1.202-0.445 1.406-1.031l4.844-8.75c0.499-0.963 0.781-2.06 0.781-3.2188 0-3.866-3.134-7-7-7zm-0.031 3.9688c1.933 0 3.5 1.567 3.5 3.5s-1.567 3.5-3.5 3.5-3.5-1.567-3.5-3.5 1.567-3.5 3.5-3.5z" fill="#e74c3c" transform="translate(0 1028.4)"/></g></svg>`,
const markerIcon = new Icon({
  iconUrl: "./img/marker-icon.png",
  iconSize: [64, 64],
  anchorSize: [64 / 2, 64], // it centered the icon
  className: "marker-icon", // add class to remove blocky icon on marker
});

// const createCustomClusterIcon = (cluster) => {
//   return new divIcon({
//     html: `<div className="w-[48px] h-[48px] rounded-full bg-white transform -translate-x-1/4 -translate-y-1/4 flex justify-center items-center font-black text-[24px]" >${cluster.getChildCount()}</div>`, // className is not functionable
//     iconSize: [48,48], // point(38, 38, true), is not defined
//     className: "marker-cluster-custom", // set className in here
//   });
// };

const Area = ({ title, url }) => {
  return (
    <MarkerClusterGroup
      chunkedLoading // load marker one by one instead of all at once
      // iconCreateFunction={createCustomClusterIcon} // custom cluster icon
    >
      {marker.map((item, index) => (
        <Marker key={index} position={item.geoLoc} icon={markerIcon}>
          <Popup>
            <div className="flex flex-col">
              <Link href={item.url} target="_blank" rel="noopener noreferrer">
                {item.title}
              </Link>
            </div>
          </Popup>
        </Marker>
      ))}
    </MarkerClusterGroup>
  );
};

export default Area;
