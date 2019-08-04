import { graphql, Link, StaticQuery } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import Helmet from 'react-helmet';
import 'semantic-ui-less/semantic.less';
import { Button, 
  Container, 
  Divider, 
  Dropdown, 
  Grid, 
  Icon, 
  Image, 
  List,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility} from 'semantic-ui-react';

import ResponsiveContainer from '../components/ResponsiveContainer';

const LinkedItem = ({ children, ...props }) => (
  <Menu.Item as={Link} activeClassName='active' {...props}>{children}</Menu.Item>
)

const HomepageLayout = ({ children, data }) => (
  <ResponsiveContainer>
    {children}
  </ResponsiveContainer>
)

HomepageLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default HomepageLayout
