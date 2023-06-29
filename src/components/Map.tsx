import React, { useEffect, useRef } from "react";
import "../styles.css";

function Map() {
    const mapRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let map: google.maps.Map | null = null;
        const center: google.maps.LatLngLiteral = { lat: 30, lng: -110 };

        function initMap(): void {
            map = new google.maps.Map(mapRef.current as HTMLElement, {
                center,
                zoom: 8,
            });
        }

        initMap();

        // Clean up map instance
        const currentMapRef = mapRef.current;

        return () => {
            if (map && currentMapRef) {
                // Remove the map instance from the DOM
                currentMapRef.removeChild(currentMapRef.firstChild as Node);
                map = null;
            }
        };
    }, []);

    return (
        <div className="container">
            <div id="map" ref={mapRef} style={{ width: "100%", height: "400px" }}></div>
        </div>
    );
}

export default Map;
