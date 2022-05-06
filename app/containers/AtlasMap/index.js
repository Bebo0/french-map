import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import React, { useEffect } from 'react';
import 'leaflet/dist/leaflet.css';

import '../../data/test.mp3';
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
    var stadia_outdoors_map = L.tileLayer(
      'https://tiles.stadiamaps.com/tiles/outdoors/{z}/{x}/{y}{r}.png',
      {
        maxZoom: 20,
        attribution:
          '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors',
      },
    );

    stadia_outdoors_map.addTo(map);

    // var base_map = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    //   attribution:
    //     '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
    // });

    // L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    //   attribution:
    //     '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
    // }).addTo(map);

    // https://link.springer.com/article/10.1007/s42489-019-00006-2
    const test_content =
      '<b>Bebo Elhosary </b><br><iframe src="../../data/test.mp3" width="640" height="480"></iframe>';

    const test_content2 =
      ' <audio controls>  <source src="../../data/test.mp3" type="audio/mp3"> Your browser does not support the audio element. </audio>';

    L.marker(qbc)
      .addTo(map)
      .bindPopup(test_content)
      .openPopup();
  }, []);

  return <div id="map" style={{ height: '100vh' }} />;
}

export default AtlasMap;
