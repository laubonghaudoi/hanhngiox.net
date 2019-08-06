import PropTypes from 'prop-types';
import React from 'react';
import {
  Grid,
  Menu,
  Container,
} from 'semantic-ui-react'
import 'semantic-ui-less/semantic.less';
import { Link } from 'gatsby';

import PageLayout from './PageLayout';

const LinkedItem = ({ children, ...props }) => (
  <Menu.Item as={Link} activeClassName='active' {...props}>{children}</Menu.Item>
)

const TocPageLayout = ({ children }) => (
  <PageLayout>
    <Grid relaxed stackable>
      <Grid.Column mobile={16} tablet={4} computer={4}>
        <Menu vertical fluid style={{ margin: '2em 2em 0em', padding: '1em 1em' }}>
          <Menu.Item as={Link} to='/install'>開始</Menu.Item>
          <Menu.Item as={Link} to='/schema'>拼音方案</Menu.Item>
          <LinkedItem to='/404'>404 Example Page</LinkedItem>
        </Menu>
      </Grid.Column>

      <Grid.Column mobile={16} tablet={8} computer={8}>
        <Container style={{ 
          margin: '2em 2em 2em 2em', 
          padding: '1em 0em 2em 4em' 
        }}>
          {children}
        </Container>
      </Grid.Column>
    </Grid>
  </PageLayout>
)

TocPageLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default TocPageLayout;