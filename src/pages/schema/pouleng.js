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

class Pouleng extends Component {
  render(){
    return(
      <SchemaPageLayout
        activeItem='Pouleng'
        >
          興化韻莆仙話輸入方案
      </SchemaPageLayout>
    )
  }
}

export default Pouleng