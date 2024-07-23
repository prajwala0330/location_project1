// MapComponent.js
import React from 'react';
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const geojsonFeature = {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "properties": {
          "name": "Montana",
          "density": 6.858
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [-104.05, 48.99],
              [-104.05, 45.94],
              [-111.05, 45.94],
              [-111.05, 48.99],
              [-104.05, 48.99]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "name": "California",
          "density": 241.7
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [-124.48, 32.53],
              [-114.13, 32.53],
              [-114.13, 42.01],
              [-124.48, 42.01],
              [-124.48, 32.53]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Texas",
          "density": 105.2
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [-106.65, 31.75],
              [-93.51, 31.75],
              [-93.51, 36.5],
              [-106.65, 36.5],
              [-106.65, 31.75]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "name": "New York",
          "density": 412.3
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [-79.76, 40.5],
              [-72.6, 40.5],
              [-72.6, 45.01],
              [-79.76, 45.01],
              [-79.76, 40.5]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Florida",
          "density": 378.0
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [-87.63, 24.39],
              [-80.03, 24.39],
              [-80.03, 31.0],
              [-87.63, 31.0],
              [-87.63, 24.39]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Nevada",
          "density": 28.3
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [-120.0, 42.0],
              [-114.0, 42.0],
              [-114.0, 35.0],
              [-120.0, 35.0],
              [-120.0, 42.0]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Arizona",
          "density": 57.05
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [-114.81, 32.49],
              [-109.04, 32.49],
              [-109.04, 37.0],
              [-114.81, 37.0],
              [-114.81, 32.49]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Illinois",
          "density": 231.1
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [-91.51, 36.98],
              [-87.49, 36.98],
              [-87.49, 42.5],
              [-91.51, 42.5],
              [-91.51, 36.98]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Pennsylvania",
          "density": 283.9
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [-80.52, 39.72],
              [-74.69, 39.72],
              [-74.69, 42.27],
              [-80.52, 42.27],
              [-80.52, 39.72]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Ohio",
          "density": 286.1
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [-84.82, 38.4],
              [-80.52, 38.4],
              [-80.52, 41.98],
              [-84.82, 41.98],
              [-84.82, 38.4]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Michigan",
          "density": 174.8
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [-90.42, 41.7],
              [-82.41, 41.7],
              [-82.41, 48.0],
              [-90.42, 48.0],
              [-90.42, 41.7]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Virginia",
          "density": 213.1
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [-83.68, 36.54],
              [-75.24, 36.54],
              [-75.24, 39.47],
              [-83.68, 39.47],
              [-83.68, 36.54]
            ]
          ]
        }
      }
    ]
  };
  
  

const MapComponent = ({ onStateClick }) => {
  const onEachFeature = (feature, layer) => {
    if (feature.properties && feature.properties.name) {
      layer.bindPopup(`<h4>${feature.properties.name}</h4><p>Density: ${feature.properties.density} people per square mile</p>`);
      layer.on({
        click: () => onStateClick(feature.properties)
      });
    }
  };

  return (
    <MapContainer center={[37.8, -96]} zoom={4} style={{ height: "500px", width: "100%" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <GeoJSON data={geojsonFeature} onEachFeature={onEachFeature} />
    </MapContainer>
  );
};

export default MapComponent;
