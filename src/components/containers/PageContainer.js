import PropTypes from 'prop-types'
import React from 'react'

import PageDesktopContainer from './PageDesktopContainer';
import PageMobileContainer from './PageMobileContainer';
  
const PageContainer = ({ children }) => (
  <div>
    <PageDesktopContainer>{children}</PageDesktopContainer>
    <PageMobileContainer>{children}</PageMobileContainer>
  </div>
)

PageContainer.propTypes = {
  children: PropTypes.node,
}

export default PageContainer;