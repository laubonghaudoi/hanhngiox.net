import PropTypes from 'prop-types';
import React from 'react';
import {
  Grid,
  Link,
  Menu,
} from 'semantic-ui-react'
import 'semantic-ui-less/semantic.less';

import PageLayout from './PageLayout';

const LinkedItem = ({ children, ...props }) => (
    <Menu.Item as={Link} activeClassName='active' {...props}>{children}</Menu.Item>
  )
  
const InstallPageLayout = ({children}) => (
  <PageLayout>
    <Grid relaxed stackable>
      <Grid.Column mobile={16} tablet={4} computer={4}>
        <Menu vertical fluid>
          <Menu.Item as={Link} to='/install'>開始</Menu.Item>
          <Menu.Item as={Link} to='/schema'>拼音方案</Menu.Item>
          <LinkedItem to='/404'>404 Example Page</LinkedItem>
        </Menu>
      </Grid.Column>

      <Grid.Column mobile={16} tablet={8} computer={8}>
        {children}
      </Grid.Column>
    </Grid>
  </PageLayout>
)

InstallPageLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default InstallPageLayout;