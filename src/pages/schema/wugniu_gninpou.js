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

class Wugniu_gninpou extends Component {
  render(){
    return(
      <SchemaPageLayout
        activeItem='wugniu_gninpou'
        >
          吳語（寧波）
      </SchemaPageLayout>
    )
  }
}

export default Wugniu_gninpou