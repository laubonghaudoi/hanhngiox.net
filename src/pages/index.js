import React from 'react'

import {
  Button,
  Container,
  Grid,
  Header,
  Image,
  Segment
} from 'semantic-ui-react';

import { Link } from 'gatsby';

import HomepageLayout from '../layouts/HomepageLayout';
import SchemaList from '../components/SchemaList';
import { hidden } from 'ansi-colors';

class IndexPage extends React.Component {
  render() {
    return (
      <div>
        <HomepageLayout>
          <Segment
            style={{
              padding: '8em 0em',
              overflow: 'hidden'
            }}
            vertical>
            <Grid container stackable verticalAlign='middle'>
              <Grid.Row>
                <Grid.Column width={8}>
                  <Header as='h3' style={{ fontSize: '2em' }}>
                    拼音 = 普通話拼音？
                  </Header>
                  <p style={{ fontSize: '1.33em' }}>
                    當然不是！現在經過民間各界有識之士的共同努力，我們終於可以在手機和電腦上用自己的母語方言來打字了。
                  </p>
                  <Header as='h3' style={{ fontSize: '2em' }}>
                    我的家鄉話也有拼音？
                  </Header>
                  <p style={{ fontSize: '1.33em' }}>
                    普通話也只是一門漢語方言，任何漢語都可以有自己的拼音。本網站將手把手教讀者在自己的電腦（Windows、Linux、macOS）和手機（iOS和Android）上安裝輸入法並部署自己母語的方言輸入方案。只需要按照本站的教程一步一步配置好，從此跟家人和老鄉聊天就再也不用彆扭地用普通話輸入法了！
                  </p>
                </Grid.Column>
                <Grid.Column floated='right' width={8}>
                  <Image bordered rounded src='/demo.gif' />
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Segment>

          <Segment
            style={{
              padding: '0em',
              overflow: hidden
            }}
            vertical>
            <Grid columns='equal' stackable>
              <Grid.Row>
                <Grid.Column style={{ padding: '5em' }} textAlign='center'>
                  <Header as='h3' style={{ fontSize: '2em' }}>
                    我的家鄉話也有拼音？
                  </Header>
                  <p style={{ fontSize: '1.33em' }}>我們目前已經支持了最主流的漢語方言，快來看看自己的家鄉話在不在右邊的列表裏（點擊箭頭展開）</p>
                  <Header as='h4' style={{ fontSize: '1.5em' }}>
                    不在列表里？
                  </Header>
                  <p style={{ fontSize: '1.33em' }}>如果你的家鄉話不在上表中，非常歡迎告訴我們，讓我們可以儘快添加支持。</p>
                </Grid.Column>

                <Grid.Column style={{ padding: '5em' }}>
                  <SchemaList />
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Segment>

          <Segment
            style={{
              padding: '8em 0em',
              overflow: 'hidden'
            }}
            vertical>
            <Container text textAlign='center'>
              <Header as='h3' style={{ fontSize: '2em' }}>
                我也要用家鄉話打字！
              </Header>
              <p style={{ fontSize: '1.33em' }}>

              </p>
              <Button color='blue' as={Link} to='/install' size='massive'>
                起
              </Button>
            </Container>
          </Segment>
        </HomepageLayout>
      </div>
    )
  }
}
export default IndexPage
