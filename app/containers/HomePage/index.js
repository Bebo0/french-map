/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Helmet } from 'react-helmet';
import StaticMap from 'react-map-gl';
import DeckGL from '@deck.gl/react';
import { LineLayer } from '@deck.gl/layers';
import messages from './messages';
import H2 from '../../components/H2';
import CenteredSection from './CenteredSection';
import Section from './Section';
import H1 from '../../components/H1';
import Header from '../../components/Header';
import mapboxgl from '!mapbox-gl';
import AtlasMap from '../../components/AtlasMap';

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

// const MAP_STYLE = 'https://basemaps.cartocdn.com';
const MAP_STYLE =
  'https://api.mapbox.com/styles/v1/belhosary/cl29qvnco000314nsrt6yivjq.html?title=copy&access_token=pk.eyJ1IjoiYmVsaG9zYXJ5IiwiYSI6ImNsMjlscGhxbjA0YW0zYm1wc2treTJ4N3UifQ.erHRHl9HBTMILJ5wn8BpLw&zoomwheel=true&fresh=true#13.07/45.50169/-73.6038';

const MAPBOX_ACCESS_TOKEN =
  'pk.eyJ1IjoiYmVsaG9zYXJ5IiwiYSI6ImNsMjlscGhxbjA0YW0zYm1wc2treTJ4N3UifQ.erHRHl9HBTMILJ5wn8BpLw';

mapboxgl.accessToken =
  'pk.eyJ1IjoiYmVsaG9zYXJ5IiwiYSI6ImNsMjlscGhxbjA0YW0zYm1wc2treTJ4N3UifQ.erHRHl9HBTMILJ5wn8BpLw';
/*eslint-disable */

export default function HomePage() {
  return (
    // <div>
    //   <Helmet>
    //     <title>Home Page</title>
    //     <meta name="description" content="Demo" />
    //   </Helmet>
    //   <div>
    //     <CenteredSection>
    //       <Header>
    //         <FormattedMessage {...messages.homeHeader} />
    //       </Header>
    //     </CenteredSection>

    <DeckGL
      initialViewState={INITIAL_VIEW_STATE}
      controller={true}
      layers={layers}
    >
      <StaticMap
        mapStyle={MAP_STYLE}
        // mapboxApiAccessToken={MAPBOX_ACCESS_TOKEN}
      />
    </DeckGL>
  );
}
