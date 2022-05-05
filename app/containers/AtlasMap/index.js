import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import React, { useEffect } from 'react';
import 'leaflet/dist/leaflet.css';

import * as L from 'leaflet';
import messages from '../NotFoundPage/messages';

// https://deck.gl/docs/get-started/using-with-react

// Viewport settings
// const INITIAL_VIEW_STATE = {
//   longitude: -122.41669,
//   latitude: 37.7853,
//   zoom: 13,
//   pitch: 0,
//   bearing: 0,
// };

// Data to be used by the LineLayer
// const data = [
//   {
//     sourcePosition: [-122.41669, 37.7853],
//     targetPosition: [-122.41669, 37.781],
//   },
// ];

/*eslint-disable */
function AtlasMap() {
  useEffect(() => {
    //   L.map('map', {
    //     center: [46.813877, -71.207977],
    //     zoom: 16,
    //     // style: { height: '100vh' },
    //     layers: [
    //       L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    //         attribution:
    //           '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
    //       }),
    //     ],
    //   });
    // }, []);
    const qbc = [46.813877, -71.207977];

    const map = L.map('map').setView(qbc, 13);
    L.Icon.Default.mergeOptions({
      // eslint-disable-next-line global-require
      iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
      // eslint-disable-next-line global-require
      iconUrl: require('leaflet/dist/images/marker-icon.png'),
      // eslint-disable-next-line global-require
      shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
    });

    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    L.marker(qbc)
      .addTo(map)
      .bindPopup('Bonjour.<br> Je me souviens.')
      .openPopup();
  }, []);

  return <div id="map" style={{ height: '100vh' }} />;
}

export default AtlasMap;
