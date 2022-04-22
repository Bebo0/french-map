/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React, { useRef, useState } from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

import { MapboxLayer } from '@deck.gl/mapbox';
import { ScatterplotLayer } from '@deck.gl/layers';
import mapboxgl from 'mapbox-gl';
import StaticMap from 'react-map-gl';
import DeckGL from '@deck.gl/react';
import GlobalStyle from '../../global-styles';
import AtlasMap from '../../components/AtlasMap';

const MAPBOX_ACCESS_TOKEN =
  'pk.eyJ1IjoiYmVsaG9zYXJ5IiwiYSI6ImNsMjlscGhxbjA0YW0zYm1wc2treTJ4N3UifQ.erHRHl9HBTMILJ5wn8BpLw';
//
mapboxgl.accessToken =
  'pk.eyJ1IjoiYmVsaG9zYXJ5IiwiYSI6ImNsMjlscGhxbjA0YW0zYm1wc2treTJ4N3UifQ.erHRHl9HBTMILJ5wn8BpLw';

const INITIAL_VIEW_STATE = {
  longitude: -74.5,
  latitude: 40,
  zoom: 9,
};
const data = [{ position: [-74.5, 40], size: 100 }];
/*eslint-disable */
export default function App() {
  const [glContext, setGLContext] = useState();
  const deckRef = useRef(null);
  const mapRef = useRef(null);

  const layers = [
    new ScatterplotLayer({
      id: 'my-scatterplot',
      data,
      getPosition: d => d.position,
      getRadius: d => d.size,
      getFillColor: [255, 0, 0],
    }),
  ];

  const onMapLoad = () => {
    const map = mapRef.current.getMap();
    const deck = deckRef.current.deck;

    // You must initialize an empty deck.gl layer to prevent flashing
    // map.addLayer(new MapboxLayer({ id: 'dummy-layer', deck }));
    map.addLayer(
      // This id has to match the id of the deck.gl layer
      new MapboxLayer({ id: 'my-scatterplot', deck }),
      // Optionally define id from Mapbox layer stack under which to add deck layer
      // 'before-layer-id'
      new MapboxLayer({ id: 'dummy-layer', deck }),
    );
    // map.addLayer(new MapboxLayer({ id: 'dummy-layer', deck }));

    // map.addLayer(new MapboxLayer({ id: 'dummy-layer', deck }));
  };

  /*eslint-disable */

  return (
    <DeckGL
      ref={deckRef}
      layers={layers}
      initialViewState={INITIAL_VIEW_STATE}
      controller={true}
      onWebGLInitialized={setGLContext}
      glOptions={{
        /* To render vector tile polygons correctly */
        stencil: true,
      }}
    >
      {glContext && (
        /* This is important: Mapbox must be instantiated after the WebGLContext is available */
        <StaticMap
          ref={mapRef}
          gl={glContext}
          mapStyle="mapbox://styles/mapbox/light-v9"
          mapboxApiAccessToken={MAPBOX_ACCESS_TOKEN}
          onLoad={onMapLoad}
        />
      )}
    </DeckGL>
  );
}
