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

class Wugniu_zaonhe extends Component {
  render(){
    return(
      <SchemaPageLayout
        activeItem='wugniu_zaonhe'
        >
          吳語（上海）
      </SchemaPageLayout>
    )
  }
}

export default Wugniu_zaonhe