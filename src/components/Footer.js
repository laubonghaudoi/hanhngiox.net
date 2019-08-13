import React from 'react'

import { 
  Container,
  Grid,
  Header,
  List,
  Segment
 } from 'semantic-ui-react';

const Footer = () => (
  <Segment 
    inverted 
    vertical
    style={{ 
      padding: '4%',
    }}>
    <Container>
      <Grid 
        divided 
        inverted 
        stackable
      >
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
                content={<a href='https://github.com/laubonghaudoi/Chinese_Rime'>拼音方案支持项目</a>}
              />
            </List>
          </Grid.Column>
          <Grid.Column width={3}>
            <Header inverted as='h4' content='资源' />
            <List link inverted>
              <List.Item 
                icon='download'
                content={<a href='https://github.com/laubonghaudoi/Chinese_Rime'>拼音方案下载包</a>}
              />
              <List.Item
                icon='google'
                content={<a href='https://share.weiyun.com/5BqauQb'>拼音方案相关文件</a>}
              />
            </List>
          </Grid.Column>
          <Grid.Column width={3}>
            <Header inverted as='h4' content='分享本站' />
            <List link inverted>
              <List.Item 
                icon='download'
                content={<a href='https://github.com/laubonghaudoi/Chinese_Rime'>拼音方案下载包</a>}
              />
              <List.Item
                icon='google'
                content={<a href='https://share.weiyun.com/5BqauQb'>拼音方案相关文件</a>}
              />
            </List>
          </Grid.Column>
          <Grid.Column width={4}>
            <Header as='h4' inverted>
            © 2019 by 劉邦後代
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

export default Footer;