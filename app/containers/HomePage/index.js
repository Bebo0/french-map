/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Helmet } from 'react-helmet';
import messages from './messages';
import H2 from '../../components/H2';
import CenteredSection from './CenteredSection';
import Section from './Section';
import H1 from '../../components/H1';
import Header from "../../components/Header";

export default function HomePage() {
  return (
    <div>
      <Helmet>
        <title>Home Page</title>
        <meta
          name="description"
          content="A React.js Boilerplate application homepage"
        />
      </Helmet>
      <div>
        <CenteredSection>
          <Header>
            <FormattedMessage {...messages.homeHeader} />
          </Header>
        </CenteredSection>
        {/*<Section>*/}
        {/*  <H2>*/}
        {/*    <FormattedMessage {...messages.testMessage} />*/}
        {/*  </H2>*/}
        {/*</Section>*/}
      </div>
    </div>
  );
}
