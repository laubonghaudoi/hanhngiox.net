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

class Shupin extends Component {
  render(){
    return(
      <SchemaPageLayout
        activeItem='shupin'
        >
          蜀拼
      </SchemaPageLayout>
    )
  }
}

export default Shupin