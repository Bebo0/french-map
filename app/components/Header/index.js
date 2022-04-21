// import React from 'react';
// import { FormattedMessage } from 'react-intl';
//
// import A from './A';
// import Img from './Img';
// import NavBar from './NavBar';
// import HeaderLink from './HeaderLink';
// import Banner from './banner.jpg';
// import messages from './messages';
// import CenteredSection from "../../containers/HomePage/CenteredSection";

import styled from 'styled-components';

const Header = styled.h1`
  margin: 0;
  padding: 0;
  box-sizing: border-box; // not neccesary
`;

export default Header;

// export default H1;
//
//
// function Header() {
//   return (
//     <div>
//       <CenteredSection>
//
//
//       </CenteredSection>
//       <A href="https://www.reactboilerplate.com/">
//         <Img src={Banner} alt="react-boilerplate - Logo" />
//       </A>
//       <NavBar>
//         <HeaderLink to="/">
//           <FormattedMessage {...messages.home} />
//         </HeaderLink>
//         <HeaderLink to="/features">
//           <FormattedMessage {...messages.features} />
//         </HeaderLink>
//       </NavBar>
//     </div>
//   );
// }
