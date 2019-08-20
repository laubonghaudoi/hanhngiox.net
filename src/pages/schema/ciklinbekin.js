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
          本页为戚林八音
        </Header>
        <Table singleLine striped selectable unstackable>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>#</Table.HeaderCell>
              <Table.HeaderCell>Header</Table.HeaderCell>
              <Table.HeaderCell>Header</Table.HeaderCell>
              <Table.HeaderCell>Header</Table.HeaderCell>
              <Table.HeaderCell>Header</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            <Table.Row>
              <Table.Cell>1.001</Table.Cell>
              <Table.Cell>Lorem</Table.Cell>
              <Table.Cell>ipsum</Table.Cell>
              <Table.Cell>dolor</Table.Cell>
              <Table.Cell>sit</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>1,002</Table.Cell>
              <Table.Cell>amet</Table.Cell>
              <Table.Cell>consectetur</Table.Cell>
              <Table.Cell>adipiscing</Table.Cell>
              <Table.Cell>elit</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>1,003</Table.Cell>
              <Table.Cell>Integer</Table.Cell>
              <Table.Cell>nec</Table.Cell>
              <Table.Cell>odio</Table.Cell>
              <Table.Cell>Praesent</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>1,003</Table.Cell>
              <Table.Cell>libero</Table.Cell>
              <Table.Cell>Sed</Table.Cell>
              <Table.Cell>cursus</Table.Cell>
              <Table.Cell>ante</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>1,004</Table.Cell>
              <Table.Cell>dapibus</Table.Cell>
              <Table.Cell>diam</Table.Cell>
              <Table.Cell>Sed</Table.Cell>
              <Table.Cell>nisi</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </SchemaPageLayout>
    )
  }
}

export default Ciklinbekin