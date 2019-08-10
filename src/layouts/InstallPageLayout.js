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
  constructor(props){
    super(props);
    this.handleActiveChange = this.handleActiveChange.bind(this);
    this.state = { activeItem: this.props.activeItem};
  }

  handleActiveChange(name) {
    this.setState({activeItem: name})
  }

  render() {
    const { children } = this.props;

    return (
      <PageLayout>
          <Container fluid>
            <Grid columns='equal' padded stackable>
              <Grid.Column width={4}>
                <InstallMenu 
                  activeItem={this.state.activeItem}
                  onActiveChange={this.handleActiveChange}
                />
              </Grid.Column>
              <Grid.Column width={8}>
                {children}
              </Grid.Column>
              <Grid.Column width={4}>
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