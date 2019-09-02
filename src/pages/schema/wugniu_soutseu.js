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

class Wugniu_soutseu extends Component {
  render(){
    return(
      <SchemaPageLayout
        activeItem='wugniu_soutseu'
        >
          吳語（蘇州）
      </SchemaPageLayout>
    )
  }
}

export default Wugniu_soutseu