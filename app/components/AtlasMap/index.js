import styled from 'styled-components';
import DeckGL from '@deck.gl/react';
import { LineLayer, ScatterplotLayer } from '@deck.gl/layers';
import { StaticMap } from 'react-map-gl';
import { FormattedMessage } from 'react-intl';
import React, { useCallback, useRef, useState } from 'react';
import { MapboxLayer } from '@deck.gl/mapbox';
import messages from '../../containers/NotFoundPage/messages';

// https://deck.gl/docs/get-started/using-with-react
// https://deck.gl/docs/api-reference/mapbox/mapbox-layer
// https://deck.gl/docs/api-reference/mapbox/overview

const MAPBOX_ACCESS_TOKEN =
  'pk.eyJ1IjoiYmVsaG9zYXJ5IiwiYSI6ImNsMjlscGhxbjA0YW0zYm1wc2treTJ4N3UifQ.erHRHl9HBTMILJ5wn8BpLw';

// Viewport settings
const INITIAL_VIEW_STATE = {
  longitude: -122.41669,
  latitude: 37.7853,
  zoom: 13,
  pitch: 0,
  bearing: 0,
};

// Data to be used by the LineLayer
const data = [
  {
    sourcePosition: [-122.41669, 37.7853],
    targetPosition: [-122.41669, 37.781],
  },
];
const layers = [new LineLayer({ id: 'line-layer', data })];

const MAP_STYLE =
  'https://basemaps.cartocdn.com/gl/positron-nolabels-gl-style/style.json';

/*eslint-disable */
function AtlasMap() {
  const [glContext, setGLContext] = useState();
  const deckRef = useRef(null);
  const mapRef = useRef(null);

  const onMapLoad = useCallback(() => {
    const map = mapRef.current.getMap();
    const deck = deckRef.current.deck;
    map.addLayer(new MapboxLayer({ id: 'my-scatterplot', deck }));
  }, []);

  const layers = [
    new ScatterplotLayer({
      id: 'my-scatterplot',
      data,
      getPosition: d => d.position,
      getRadius: d => d.size,
      getFillColor: [255, 0, 0],
    }),
  ];

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

export default AtlasMap;
