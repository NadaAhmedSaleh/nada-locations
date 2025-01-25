"use client";

import { useEffect, useRef, useState } from "react";
import mapboxgl, { Map } from "mapbox-gl";
import styles from "./Map.module.scss";

mapboxgl.accessToken =
  "pk.eyJ1Ijoibm9keW5vZHkiLCJhIjoiY202OXk4MmoxMGo5bDJrcXR1NjMydjYxZCJ9.oNOy1n4K_c-L6nk1UadTeA";

const MapCard: React.FC = () => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const [userLocation, setUserLocation] = useState<[number, number] | null>(
    null
  );

  useEffect(() => {
    // Get user's current position
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setUserLocation([position.coords.longitude, position.coords.latitude]);
      },
      (error) => {
        console.error("Error getting user location:", error);
        setUserLocation([0, 0]);
      }
    );
  }, []);

  useEffect(() => {
    if (!mapContainerRef.current || !userLocation) return;

    // Initialize the map at user's location
    const map: Map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/dark-v10",
      center: userLocation,
      zoom: 1,
      projection: "globe",
      scrollZoom: false,
    });

    // Remove labels from the map
    map.on("style.load", () => {
      map?.getStyle()?.layers?.forEach((layer) => {
        if (layer.type === "symbol") {
          map.removeLayer(layer.id);
        }
      });
    });
    return () => map.remove();
  }, [userLocation]);

  return (
    <div className={styles.mapCardContainer}>
      <div className={styles.textSection}>
        <h1>EXPLORE</h1>
        <p>
          Move the globe and see all your locations, click on a location to
          expand the informations
        </p>
      </div>
      <div ref={mapContainerRef} className={styles.mapContainer} />
    </div>
  );
};

export default MapCard;
