/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React, { useCallback, useRef, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { Helmet } from 'react-helmet';
import StaticMap from 'react-map-gl';
import DeckGL from '@deck.gl/react';
import { IconLayer, LineLayer, ScatterplotLayer } from '@deck.gl/layers';
import { MapboxLayer } from '@deck.gl/mapbox';
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
  longitude: -74.5,
  latitude: 40,
  zoom: 9,
};

// Data to be used by the LineLayer
const data = [{ position: [-74.5, 40], size: 100 }];
// const layers = [
//   new IconLayer({
//     id: 'icon-layer',
//     data,
//     pickable: true,
//     // iconAtlas and iconMapping are required
//     // getIcon: return a string
//     iconAtlas:
//       'https://raw.githubusercontent.com/visgl/deck.gl-data/master/website/icon-atlas.png',
//     iconMapping: ICON_MAPPING,
//     getIcon: d => 'marker',
//
//     sizeScale: 15,
//     getPosition: d => d.coordinates,
//     getSize: d => 5,
//     getColor: d => [Math.sqrt(d.exits), 140, 0],
//   }),
// ];
// const layers = [new LineLayer({ id: 'line-layer', data })];

const MAP_STYLE = 'https://basemaps.cartocdn.com';
// const MAP_STYLE =
//   'https://api.mapbox.com/styles/v1/belhosary/cl29qvnco000314nsrt6yivjq.html?title=copy&access_token=pk.eyJ1IjoiYmVsaG9zYXJ5IiwiYSI6ImNsMjlscGhxbjA0YW0zYm1wc2treTJ4N3UifQ.erHRHl9HBTMILJ5wn8BpLw&zoomwheel=true&fresh=true#13.07/45.50169/-73.6038';

const MAPBOX_ACCESS_TOKEN =
  'pk.eyJ1IjoiYmVsaG9zYXJ5IiwiYSI6ImNsMjlscGhxbjA0YW0zYm1wc2treTJ4N3UifQ.erHRHl9HBTMILJ5wn8BpLw';
//
mapboxgl.accessToken =
  'pk.eyJ1IjoiYmVsaG9zYXJ5IiwiYSI6ImNsMjlscGhxbjA0YW0zYm1wc2treTJ4N3UifQ.erHRHl9HBTMILJ5wn8BpLw';
/*eslint-disable */

const ICON_MAPPING = {
  marker: { x: 0, y: 0, width: 128, height: 128, mask: true },
};

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
      ref={deckRef}
      layers={layers}
      initialViewState={INITIAL_VIEW_STATE}
      controller={true}
      onWebGLInitialized={setGLContext}
      glOptions={{
        /* To render vector tile polygons correctly */
        stencil: false,
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
