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
// import '../../css/schema.css'
import { Link } from "gatsby-plugin-transition-link";
import SchemaPageLayout from '../../layouts/SchemaPageLayout'

class Ciklinbekin extends Component {
  render(){
    return(
      <SchemaPageLayout
        activeItem='ciklinbekin'
        >
        <Header dividing size="huge" as="h1">
          戚林八音
        </Header>
      </SchemaPageLayout>
    )
  }
}

export default Ciklinbekin