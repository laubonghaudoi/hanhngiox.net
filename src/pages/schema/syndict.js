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

class Jyutping extends Component {
  render(){
    return(
      <SchemaPageLayout
      activeItem='syndict'
      >
        本页为薪典
      </SchemaPageLayout>
    )
  }
}

export default Jyutping