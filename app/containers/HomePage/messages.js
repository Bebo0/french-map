/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage container.
 */
import { defineMessages } from 'react-intl';

export const scope = 'app.containers.HomePage';

export default defineMessages({
  homeHeader: {
    id: `${scope}.homeHeader`,
    defaultMessage: 'French Atlas Demo',
  },
  testMessage: {
    id: `${scope}.testMessage`,
    defaultMessage: 'Test Message',
  },
  activitiesMessage: {
    id: `${scope}.activitiesMessage`,
    defaultMessage: 'Here are some activities you can try with your class...',
  },
});
