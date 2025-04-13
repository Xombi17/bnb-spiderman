import "./styles.css"
import csvtojson from "csvtojson"
import renderMap from "./render-map"
;(async () => {
  // https://simplemaps.com/data/world-cities
  const citiesFetch = await fetch("/world-cities.csv")
  const csvText = await citiesFetch.text()
  const points = await csvtojson({
    output: "json"
  }).fromString(csvText)
  console.log("points : " + points.length)
  const svg = await renderMap({ points })
  document.body.innerHTML = svg
})()
