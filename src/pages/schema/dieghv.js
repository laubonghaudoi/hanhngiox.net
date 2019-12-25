import React, { Component } from 'react'

import {
  Divider,
  Grid,
  Header,
  Icon,
  List,
  Message,
} from "semantic-ui-react";

import { Link } from "gatsby-plugin-transition-link";
import { rhythm } from "../../utils/grandViewTypography"
import SchemaPageLayout from '../../layouts/SchemaPageLayout'

class Dieghv extends Component {
  render(){
    return(
      <SchemaPageLayout
        activeItem='dieghv'
      > 
        <Header dividing size="huge" as="h1">
          潮語拼音
        </Header>
        <Message 
          info
        >
          <Grid columns={2} stackable>
            <Divider vertical><Icon name="map"></Icon></Divider>
            <Grid.Column>
              <Header 
                size="big"
                as="h2"
                color="black"
                textAlign="right"
                style={{
                  display:'inline-block',
                  marginBottom: rhythm(0.5),
                }}>
                简介
              </Header>
              <p>
                潮語拼音
              </p>
              <ul>
                <li>官方頁面：<a href="https://kahaani.github.io/gatian/appendix1/index.html">潮语拼音方案</a></li>
                <li>℞ 所屬配方名稱：<code>kahaani/dieghv</code></li>
              </ul>
            </Grid.Column>
            
            <Grid.Column>
              <Header 
                size="big"
                as="h2"
                // color="blue"
                textAlign="right"
                style={{
                  display:'inline-block',
                  marginBottom: rhythm(0.5),
                  paddingLeft: '1rem'
                }}>
                目錄
              </Header>
              <List bulleted style={{paddingLeft: '2rem'}}>
                <List.Item as={Link} to='/schema/hakka/#onset'>聲母</List.Item>
                <List.Item as={Link} to='/schema/hakka/#final'>
                  韻母
                  <List.List style={{paddingLeft: '2rem', paddingTop: '0.5rem', paddingBottom: '0.5rem'}}>
                    <List.Item>介音</List.Item>
                    <List.Item>韻腹</List.Item>
                    <List.Item>韻尾</List.Item>
                  </List.List>  
                </List.Item>
                <List.Item as={Link} to='/schema/hakka/#final_table'>韻母表</List.Item>
                <List.Item as={Link} to='/schema/hakka/#tone'>聲調</List.Item>
                <List.Item as={Link} to='/schema/hakka/#reference'>參考</List.Item>
              </List>
            </Grid.Column>
          </Grid>
        </Message>
        
        <Header dividing size="large" as="h2" id="reference">
          參考
        </Header>
        <List bulleted>
          <List.Item><ipa>https://kahaani.github.io/gatian/appendix1/index.html</ipa></List.Item>
        </List>
        
        
      </SchemaPageLayout>
    )
  }
}

export default Dieghv