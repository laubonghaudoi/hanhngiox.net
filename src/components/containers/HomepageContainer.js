import PropTypes from 'prop-types'
import React from 'react'

import HomepageDesktopContainer from './HomepageDesktopContainer';
import HomepageMobileContainer from './HomepageMobileContainer';


const HomepageContainer = ({ children }) => (
  <div>
    <HomepageDesktopContainer>{children}</HomepageDesktopContainer>
    <HomepageMobileContainer>{children}</HomepageMobileContainer>
  </div>
)

HomepageContainer.propTypes = {
  children: PropTypes.node,
}

export default HomepageContainer;