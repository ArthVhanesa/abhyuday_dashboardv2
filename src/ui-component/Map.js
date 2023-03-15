import React, { useEffect, useState } from "react";
import MapData from "./map.geojson";

const Map = () => {
	const [map, setMap] = useState(null);

	useEffect(() => {
		//load geojson file with json data

		// Load the Google Maps JavaScript API
		const script = document.createElement("script");
		script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyC8jFaJQLEBL7MiZzB9Mp-9ais0siNwVfI&libraries=data`;
		script.defer = true;
		document.head.appendChild(script);

		// Initialize the map once the API has loaded
		script.addEventListener("load", () => {
			const map = new window.google.maps.Map(document.getElementById("map"), {
				center: { lat: 21.18, lng: 72.80 },
				zoom: 10,
			});
			setMap(map);

			// Load the GeoJSON data as a data layer on the map
			map.data.loadGeoJson(MapData);
		});
	}, []);

	return <div id='map' style={{ height: "100%", width: "100%", borderRadius:"10px" }} />;
};

export default Map;
