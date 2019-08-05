import PropTypes from 'prop-types';
import React from 'react';
import 'semantic-ui-less/semantic.less';

import ResponsiveContainer from '../components/ResponsiveContainer';


const HomepageLayout = ({ children }) => (
  <ResponsiveContainer>
    {children}
  </ResponsiveContainer>
)

HomepageLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default HomepageLayout
