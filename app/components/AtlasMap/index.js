import styled from 'styled-components';
import DeckGL from '@deck.gl/react';
import { LineLayer } from '@deck.gl/layers';
import { StaticMap } from 'react-map-gl';
import { FormattedMessage } from 'react-intl';
import React from 'react';
import messages from '../../containers/NotFoundPage/messages';

// https://deck.gl/docs/get-started/using-with-react

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
  return (
    <DeckGL
      initialViewState={INITIAL_VIEW_STATE}
      controller={true}
      layers={layers}
    >
      <StaticMap mapStyle={MAP_STYLE} />
    </DeckGL>
  );
}

export default AtlasMap;
