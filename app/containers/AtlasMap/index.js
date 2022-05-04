import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import React from 'react';
import messages from '../NotFoundPage/messages';

// https://deck.gl/docs/get-started/using-with-react

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

/*eslint-disable */
function AtlasMap() {
  return (
    <div>
      <p>Hello!</p>
    </div>
  );
}

export default AtlasMap;
