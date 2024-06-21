import Map from "ol/Map"
import View from "ol/View"

export const map = new Map({
  target: undefined,
  view: new View({
    projection: "EPSG:4326",
    center: [110.8167, -7.5666],
    zoom: 12,
  })
})
