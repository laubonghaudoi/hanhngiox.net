import React from "react"
import { graphql } from "gatsby"
import Link from "gatsby-plugin-transition-link"
import { css } from "@emotion/core"
import { rhythm } from "../utils/grandViewTypography"
import {
  Button,
  Divider,
  Grid,
  Header,
  Label,
  List,
  Segment,
} from "semantic-ui-react";

import '../css/blog.css'
import PageLayout from "../layouts/PageLayout";

export default () => {
  return (
    <PageLayout>
      <Grid container stackable id='content'>
        <Grid.Row>
          <Segment basic>
            <Header as="h1" size="massive" href='/blog/write_cantonese'>
              雜談
              <Divider hidden />
              <Header.Subheader>
                各地漢語白話文文章集錦
              </Header.Subheader>
            </Header>
          </Segment>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={11}>
            <Header size="large" as="h2">
              <Header.Content>關於薪典</Header.Content>
              <Label as='a' color='red'>
                客家話
              </Label>
            </Header>
            <Divider hidden />
            <blockquote>
              原載於 <a href="https://syndict.com/about.htm">syndict.com/about.htm</a>
            </blockquote>
            <Button 
              color='blue'
              as={Link}
              to='/blog/syndict'>
              读
            </Button>{" "}
            <Divider />

            <Header size="large" as="h2">
              <Header.Content>寫廣東話嘅路，應該點行落去</Header.Content>
              <Label as='a' color='teal'>
                粵語
              </Label>
            </Header>
            <Header.Subheader>阿擇 （Chaaak） 2019.2.24</Header.Subheader>
            <Divider hidden />
            <blockquote>
              為大家解決幾個關於粵語書寫嘅困惑
            </blockquote>
            <Segment secondary>
              <code>原載於Medium。原文鏈接：https://link.medium.com/AwUPNZdb8Y</code>
            </Segment>
            <Button 
              color='blue'
              as={Link}
              to='/blog/write_cantonese'>
              读
            </Button>{" "}
            <Divider />

            <Header size="large" as="h2">
              <Header.Content>最大條道理可以寫廣東話嘅文體</Header.Content>
              <Label as='a' color='teal'>
                粵語
              </Label>
            </Header>
            <Header.Subheader>阿擇 （Chaaak） 2019.2.24</Header.Subheader>
            <Divider hidden />
            <blockquote>
              兒童書你都唔用全粵語，唔通連聽個故仔都要大人逐字翻譯？
            </blockquote>
            <Segment secondary>
              <code>原載於Medium https://link.medium.com/AwUPNZdb8Y</code>
            </Segment>
            <Button 
              color='blue'
              as={Link}
              to='/blog/why-no-one-writes-storybooks-in-cantonese'>
              读
            </Button>{" "}
            <Divider />
            
            <Header size="large" as="h2">
              <Header.Content>阿擇粵語文章合集</Header.Content>
              <Label as='a' color='teal'>
                粵語
              </Label>
            </Header>
            <Header.Subheader>阿擇 （Chaaak） 2019.2.24</Header.Subheader>
            <Divider hidden />
            <blockquote>
              不斷更新
            </blockquote>
            <Segment secondary>
              <code>原載於Medium https://link.medium.com/TMFfMh1I8Y</code>
            </Segment>
            <Button 
              color='blue'
              as={Link}
              to='/blog/write_cantonese'>
              读
            </Button>{" "}
            <Divider />
          </Grid.Column>


          <Grid.Column width={4} floated="right">
            <Segment secondary>
              <Header as="h4">雜談</Header>
              <p>
                本板塊將轉載以各地漢語白話文寫作的文章，幫助讀者瞭解漢語白話文和漢語方言拼音的知識。
              </p>
            </Segment>
            <Header as="h4">Archives</Header>
            <List>
              <List.Item as="a">Septempber 2017</List.Item>
              <List.Item as="a">August 2017</List.Item>
              <List.Item as="a">June 2017</List.Item>
            </List>
            <Header as="h4">Elsewhere</Header>
            <List>
              <List.Item as="a">Github</List.Item>
              <List.Item as="a">Twitter</List.Item>
              <List.Item as="a">Facebook</List.Item>
            </List>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </PageLayout>
  )
}