import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {
  Container,
  Grid,

} from 'semantic-ui-react'
import 'semantic-ui-less/semantic.less';

import InstallMenu from '../components/InstallMenu';
import PageLayout from '../layouts/PageLayout';
import Toc from '../components/Toc';

class InstallPageLayout extends Component {
  state = {activeItem: 'intro'}
  
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { children } = this.props
    
    return (
      <PageLayout>
          <Container fluid>
            <Grid padded stackable>
              <Grid.Column width={3}>
                <InstallMenu/>
              </Grid.Column>
              <Grid.Column width={10}>
                {children}
              </Grid.Column>
              <Grid.Column width={3}>
                <Toc/>
              </Grid.Column>
            </Grid>
          </Container>
      </PageLayout>
    );
  }
}

InstallPageLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default InstallPageLayout;