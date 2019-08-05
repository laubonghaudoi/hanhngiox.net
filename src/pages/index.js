import React from 'react'

import { 
  Button,
  Container,
  Grid,
  Header,
  Image,
  List,
  Segment
 } from 'semantic-ui-react';

import { Link } from 'gatsby';

import HomepageLayout from '../layouts/HomepageLayout';
import SchemaList from '../components/SchemaList';
import Footer from '../components/Footer';

const IndexPage = () => (
  <div>
    <HomepageLayout>
      <Segment style={{ padding: '8em 0em' }} vertical>
        <Grid container stackable verticalAlign='middle'>
          <Grid.Row>
            <Grid.Column width={8}>
              <Header as='h3' style={{ fontSize: '2em' }}>
              拼音输入法都只能打普通话吗？
              </Header>
              <p style={{ fontSize: '1.33em' }}>
                当然不是！现在经过民间各界有识之士的共同努力，我们终于可以在手机和电脑上用自己的母语方言来打字了。
              </p>
              <Header as='h3' style={{ fontSize: '2em' }}>
                我的家乡话也有拼音？
              </Header>
              <p style={{ fontSize: '1.33em' }}>
                普通话也只是一门汉语方言，任何汉语都可以有自己的拼音。本网站将手把手教读者在自己的电脑（Windows、Linux、macOS）和手机（iOS和Android）上安装输入法并部署自己母语的方言输入方案。只需要按照本站的教程一步一步配置好，从此跟家人和老乡聊天就再也不用别扭地用普通话输入法了！
              </p>
            </Grid.Column>
            <Grid.Column floated='right' width={8}>
              <Image bordered rounded size='huge' src='/wuyu.png' />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <Segment style={{ padding: '0em' }} vertical>
        <Grid celled='internally' columns='equal' stackable>
          <Grid.Row>
            <Grid.Column style={{ padding: '5em' }} textAlign='center'>
              <Header as='h3' style={{ fontSize: '2em' }}>
                我的家乡话也有拼音？
              </Header>
              <p style={{ fontSize: '1.33em' }}>我们目前已经支持了最主流的汉语方言，快来看看自己的家乡话在不在右边的列表里</p>
            </Grid.Column>
            <Grid.Column style={{ padding: '5em'}}>
              <SchemaList/>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <Segment style={{ padding: '8em 0em' }} vertical>
        <Container text textAlign='center'>
          <Header as='h3' style={{ fontSize: '2em' }}>
            我也要用家乡话打字！
          </Header>
          <p style={{ fontSize: '1.33em' }}>
            如果你的家乡话不在上表中，非常欢迎告诉我们，让我们可以尽快添加支持。
          </p>
          <Button color='blue' as={ Link } to='/install' size='massive'>
            开始
          </Button>
        </Container>
      </Segment>

      <Footer/>
    </HomepageLayout>
  </div>
)

export default IndexPage
