import React, { useEffect, useState } from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import Map, {
  Marker,
  NavigationControl,
  GeolocateControl,
  FullscreenControl,
} from "react-map-gl";
import HotelMap from "../components/Map";
import "./View-Hotel.css";
import mapboxgl from 'mapbox-gl';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
mapboxgl.workerClass = require('worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker').default;


const ViewHotel = () => {
  const [lat, setLat] = useState(43.65107);
  const [lon, setLon] = useState(-79.347015);

  const [viewport, setViewport] = useState({
    latitude: lat,
    longitude: lon,
    zoom: 12,
    bearing: 0,
    pitch: 0,
    width: "100%",
    height: "100vh",
    transitionDuration: "",
  });

  useEffect(() => {
    setViewport({
      latitude: lat,
      longitude: lon,
      zoom: 12,
      pitch: 5,
      bearing: 0,
      transitionDuration: "auto",
      width: "100%",
      height: "100vh",
    });
  }, [lat, lon]);

  return (
    <div className="hotel-class">
      <Map
        mapboxAccessToken="pk.eyJ1Ijoib25seWdpZGVvbiIsImEiOiJjbGJncXN2bjEwaHpoM29ycjhpZnloaW82In0.wjXmnC60CnYXJoi3KBbiig"
        style={{
          width: "500px",
          height: "300px",
          borderRadius: "10px",
        }}
        {...viewport}
        initialViewState={{ latitude: lat, longitude: lon, zoom: 3.5 }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
      >
        <Marker latitude={lat} longitude={lon} />
        <NavigationControl position="top-right" />
        <GeolocateControl />
        <FullscreenControl />
      </Map>

      <HotelMap setLat={setLat} setLon={setLon} />
    </div>
  );
};

export default ViewHotel;
