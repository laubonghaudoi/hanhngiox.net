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

class Langjin extends Component {
  render(){
    return(
      <SchemaPageLayout
        activeItem='langjin'
        >
        <Header dividing size="huge" as="h1">
          南京話拼音输入法
        </Header>
        https://uliloewi.github.io/LangJinPinIn/PinInFangAng
      </SchemaPageLayout>
    )
  }
}

export default Langjin