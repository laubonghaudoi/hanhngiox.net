import React from 'react'

import { 
  Container,
  Grid,
  Header,
  List,
  Segment
 } from 'semantic-ui-react';

const Footer = () => (
  <Segment inverted vertical style={{ padding: '5em 0em' }}>
    <Container>
      <Grid divided inverted stackable>
        <Grid.Row>
          <Grid.Column width={3}>
            <Header inverted as='h4' content='实用链接' />
            <List link inverted>
              <List.Item 
                icon='mail'
                content={<a href='mailto:laubonghaudoi@icloud.com'>联系邮箱</a>}
              />
              <List.Item
                icon='twitter'
                content={<a href='https://www.zhihu.com/people/lau-bong-hau-doi'>知乎私信</a>}
              />
              <List.Item
                icon='facebook'
                content={<a href='https://rime.im/'>中州韵官网</a>}
              />
              <List.Item 
                icon='github'
                content={<a href='https://github.com/laubonghaudoi/Chinese_Rime'>拼音方案收集项目</a>}
              />
            </List>
          </Grid.Column>
          <Grid.Column width={3}>
            <Header inverted as='h4' content='Services' />
            <List link inverted>
              <List.Item as='a'>Banana Pre-Order</List.Item>
              <List.Item as='a'>DNA FAQ</List.Item>
              <List.Item as='a'>How To Access</List.Item>
              <List.Item as='a'>Favorite X-Men</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={7}>
            <Header as='h4' inverted>
              Footer Header
            </Header>
            <p>
              Extra space for a call to action inside the footer that could help re-engage users.
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  </Segment>
)

export default Footer;