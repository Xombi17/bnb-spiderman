import { mapPath } from "./map-path.js"
import mercatorProjection from "mercator-projection"

const mapOpacity = 0.4

const containerWidth = 1011
const containerHeight = 565

const lngToX = lng => {
  lng = parseFloat(lng)
  return 3.57 * mercatorProjection.fromLatLngToPoint({ lng, lat: 0 }).x - 30
  return (containerWidth * (180 + lng)) / 360
}
const latToY = lat => {
  lat = parseFloat(lat)
  return 3.57 * mercatorProjection.fromLatLngToPoint({ lat, lng: 0 }).y - 130
  return (containerHeight * (90 - lat)) / 180
}

export default async ({ points }) => {
  const svg = `
  <div>
  <img 
    _src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Equirectangular-projection.jpg/1920px-Equirectangular-projection.jpg"
    src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Mercator-projection.jpg/1280px-Mercator-projection.jpg"
    style="width: 100%;position: absolute;top: 105px;left: -20px;opacity: 0;"
  />
  <svg
    style="width: 100%;position: absolute;"
    width="100%"
    viewBox="0 0 1011 585"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
  >
    <defs>
      <filter
        x="-50%"
        y="-50%"
        width="200%"
        height="200%"
        filterUnits="objectBoundingBox"
        id="filter-1"
      >
        <feGaussianBlur stdDeviation="30" in="SourceGraphic"></feGaussianBlur>
      </filter>
    </defs>

    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
      <g
        id="DATAWALL_16/9_Projets4"
        transform="translate(-945.000000, -4505.000000)"
        fill="rgba(255, 255, 255, .3)"
      >
        <g id="NEMO" transform="translate(-131, 4490)">
          <g id="MAP" transform="translate(1116.000000, 62.000000)">
            <path d="${mapPath}" id="Map-1" opacity="${mapOpacity}"></path>


            <g>
              ${points
                //.slice(0, 1000)
                .map(point => {
                  return `
                <g transform="translate(${lngToX(point.lng)}, ${latToY(
                    point.lat
                  )})">
                  <circle fill="rgba(255, 0, 0, 1)" r="1"></circle>
                </g>
                `
                })
                .join("")}
            </g>
          </g>
        </g>
      </g>
    </g>
  </svg>
  </div>
  `
  return svg
}
