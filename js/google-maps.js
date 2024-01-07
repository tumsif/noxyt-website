// Initialize and add the map
let map, infoWindow;

async function initMap() {
  // The location of Magufuli hostel
  const position = { lat: -6.781639, lng: 39.21375 };
  // Request needed libraries.
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  // The map, centered at Magufuli hostel
  map = new Map(document.getElementById("map"), {
    zoom: 15,
    center: position,
    mapId: "map-1",
    mapTypeControl: true,
  });

  // The marker, positioned at magufuli hostel
  const marker = new AdvancedMarkerElement({
    map: map,
    position: position,
    title: "Magufuli hostel",
  });
}

initMap();
