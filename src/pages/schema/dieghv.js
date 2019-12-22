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

class Dieghv extends Component {
  render(){
    return(
      <SchemaPageLayout
        activeItem='dieghv'
      >
        潮語拼音輸入法
        https://kahaani.github.io/gatian/appendix1/index.html
      </SchemaPageLayout>
    )
  }
}

export default Dieghv