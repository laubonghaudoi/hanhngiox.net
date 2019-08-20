import React, { Component } from 'react'

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
// import '../css/schema.css'
import { Link } from "gatsby";
import SchemaPageLayout from '../layouts/SchemaPageLayout'

class SchemaPage extends Component {
  state = {
    dropdownMenuStyle: {
      display: "none"
    }
  };

  render(){
    return (
      <SchemaPageLayout>
        <Grid padded>
          <Grid.Row>
            <Header dividing size="huge" as="h1">
              Dashboard
            </Header>
          </Grid.Row>
          <Grid.Row textAlign="center">
            <Grid.Column mobile={8} tablet={4} computer={4}>
              <Label basic size="large">
                Jyutping
              </Label>
              <p>粵拼</p>
            </Grid.Column>
            <Grid.Column mobile={8} tablet={4} computer={4}>
              <Image
                centered
                circular
                size="small"
                src="/static/images/wireframe/square-image.png"
              />
              <Label basic size="large">
                Label
              </Label>
              <p>Something else</p>
            </Grid.Column>
            <Grid.Column mobile={8} tablet={4} computer={4}>
              <Label basic size="large">
                Jyutping
              </Label>
              <p>Something else</p>
            </Grid.Column>
            <Grid.Column mobile={8} tablet={4} computer={4}>
              <Image
                centered
                circular
                size="small"
                src="/static/images/wireframe/square-image.png"
              />
              <Label basic size="large">
                Label
              </Label>
              <p>Something else</p>
            </Grid.Column>
          </Grid.Row>
          <Divider section hidden />
          <Grid.Row>

          </Grid.Row>
          <Grid.Row>

          </Grid.Row>
        </Grid>
      </SchemaPageLayout>
    )
  }
}

export default SchemaPage;
