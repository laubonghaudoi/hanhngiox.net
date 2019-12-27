import React from 'react'

import {
  Container,
  Grid,
  Header,
  List,
  Segment
} from 'semantic-ui-react';

import { useStaticQuery, graphql } from "gatsby"
const Footer = () => {
  const data = useStaticQuery(graphql`
    {
      allFile(filter: { extension: { eq: "pdf" } }) {
        edges {
          node {
            publicURL
            name
          }
        }
      }
    }
  `)
  return (
    <Segment
      inverted
      vertical
      style={{
        padding: '3%',
        width: '100%',
      }}
    >
      <Container>
        <Grid
          divided
          inverted
          stackable
        >
          <Grid.Row>
            <Grid.Column width={3}>
              <Header inverted as='h4' content='實用鏈接' />
              <List link inverted>
                <List.Item
                  icon='mail'
                  content={<a href='mailto:laubonghaudoi@icloud.com'>聯繫郵箱</a>}
                />
                <List.Item
                  icon='twitter'
                  content={<a href='https://www.zhihu.com/people/lau-bong-hau-doi'>知乎私信</a>}
                />
                <List.Item
                  icon='facebook'
                  content={<a href='https://rime.im/'>中州韻官網</a>}
                />
                <List.Item
                  icon='github'
                  content={<a href='https://github.com/laubonghaudoi/Chinese_Rime'>拼音方案支持項目</a>}
                />
              </List>
            </Grid.Column>
            <Grid.Column width={3}>
              <Header inverted as='h4' content='資源' />
              <List link inverted>
                <List.Item
                  icon='download'
                  content={<a href='../../download.zip' download>下載包</a>}
                />
                <List.Item
                  icon='google'
                  content={<a href='https://share.weiyun.com/5BqauQb'>拼音方案相關文件</a>}
                />
              </List>
            </Grid.Column>
            <Grid.Column width={3}>
              <Header inverted as='h4' content='分享本站' />
              <List link inverted>
                <List.Item
                  icon='facebook'
                  content={<a href='https://github.com/laubonghaudoi/Chinese_Rime'>Facebook</a>}
                />
                <List.Item
                  icon='twitter'
                  content={<a href='https://share.weiyun.com/5BqauQb'>Twitter</a>}
                />
              </List>
            </Grid.Column>
            <Grid.Column width={4}>
              <Header as='h4' inverted>
                © 2019 by @laubonghaudoi
            </Header>
              <p>
                Powered by: Gatsby, React, Semantic UI
            </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  )
}
export default Footer;