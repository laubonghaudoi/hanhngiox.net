import PropTypes from 'prop-types';
import React from 'react';
import 'semantic-ui-less/semantic.less';

import HomepageContainer from '../components/containers/HomepageContainer';
import Footer from '../components/Footer';

const HomepageLayout = ({ children }) => (
  <HomepageContainer>
    {children}
    <Footer/>
  </HomepageContainer>
)

HomepageLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default HomepageLayout
