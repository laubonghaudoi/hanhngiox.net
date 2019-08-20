import React, { Component } from 'react'
import PropTypes from 'prop-types';
import {
  Button,
  Divider,
  Grid,
  Header,
  Icon,
  Input,
  Image,
  Label,
  Menu,
  Table
} from "semantic-ui-react";

import PageLayout from '../layouts/PageLayout';
import SchemaMenu from '../components/SchemaMenu';

class SchemaPageLayout extends Component {
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
        <Grid padded>
          <Grid.Column
            tablet={3}
            computer={3}
            only="tablet computer"
            id="sidebar"
          >
            <SchemaMenu
              activeItem={this.state.activeItem}
              onActiveChange={this.handleActiveChange}
            />
          </Grid.Column>
          <Grid.Column
            mobile={16}
            tablet={13}
            computer={13}
            floated="right"
            id="content"
          >
            {children}
          </Grid.Column>
        </Grid>
      </PageLayout>
    )
  }
}

SchemaPageLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default SchemaPageLayout;