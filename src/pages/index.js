import React, { Component } from 'react'

import {
  Button,
  Container,
  Divider,
  Dropdown,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Message,
  Segment,
  Sidebar,

} from 'semantic-ui-react';

import { Link } from 'gatsby';
import "../css/Homepage.css";
import SchemaList from '../components/SchemaList';
// import HomepageLayout from '../layouts/HomepageLayout';
// import SchemaList from '../components/SchemaList';
import Footer from '../components/Footer';

class IndexPage extends Component {
  state = {
    dropdownMenuStyle: {
      display: "none"
    }
  };

  handleToggleDropdownMenu = () => {
    let newState = Object.assign({}, this.state);
    if (newState.dropdownMenuStyle.display === "none") {
      newState.dropdownMenuStyle = { display: "flex" };
    } else {
      newState.dropdownMenuStyle = { display: "none" };
    }

    this.setState(newState);
  };

  render() {
    return (
      <div className="App">
        <Segment 
          inverted 
          vertical 
          textAlign="center" 
        >
          <Container as="nav" className="tablet computer only">
            <Header inverted as={Link} to="/">
              <Image src='/logo.png' size='tiny' style={{marginTop:'1em', height:'2em', width:'2em'}}></Image>
              Hanh Ngiox
            </Header>
            <Menu
              borderless
              compact
              inverted>
              <Menu.Item as={Link} to='/install'>
                <Icon name='compass' />
                開始
                </Menu.Item>
              <Menu.Item as={Link} to='/schema'>
                <Icon name='th' />
                方案
                </Menu.Item>
              <Menu.Item as={Link} to='/blog'>
                <Icon name='book' />
                雜談
                </Menu.Item>
              <Menu.Item as={Link} to='/about'>
                <Icon name='question circle' />
                關於
                </Menu.Item>
              <Dropdown item simple direction='left' text='界面語言'>
                <Dropdown.Menu color='blue'>
                  <Dropdown.Item>國語（普通話）繁體</Dropdown.Item>
                  <Dropdown.Item>国语（普通话）简体</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item>粵語 繁體</Dropdown.Item>
                  <Dropdown.Item>粤语 简体</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Menu>
          </Container>
          <Container className="content">
            <Header
              as='h1'
              content='漢語方言拼音輸入'
              inverted
              style={{
                fontSize: '4em',
                fontWeight: 'normal',
                marginBottom: 0,
                // marginTop: '3em',
              }}
            />
            <Header
              as='h2'
              content='拼音，不只屬於普通話'
              inverted
              style={{
                marginTop: '2em',
              }}
            />
          </Container>
        </Segment>

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
          <Grid columns='equal' stackable>
            <Grid.Row>
              <Grid.Column style={{ padding: '5em' }} textAlign='center'>
                <Header as='h3' style={{ fontSize: '2em' }}>
                  我的家乡话也有拼音？
               </Header>
                <p style={{ fontSize: '1.33em' }}>我们目前已经支持了最主流的汉语方言，快来看看自己的家乡话在不在右边的列表里（点击箭头展开）</p>
                <Header as='h4' style={{ fontSize: '1.5em' }}>
                  不在列表里？
                 </Header>
                <p style={{ fontSize: '1.33em' }}>如果你的家乡话不在上表中，非常欢迎告诉我们，让我们可以尽快添加支持。</p>
              </Grid.Column>

              <Grid.Column style={{ padding: '5em' }}>
                <SchemaList />
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

            </p>
            <Button color='blue' as={ Link } to='/install' size='massive'>
              起
            </Button>
          </Container>
        </Segment>

        <Segment inverted style={{ padding: '2em 0em' }} vertical>
          <Container text textAlign='center'>
            <Grid divided inverted stackable columns={3}>
              <Grid.Row centered floated>
                <Grid.Column>
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
                <Grid.Column >
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
                <Grid.Column >
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
      </div>
    );
  }
}


// const IndexPage = () => (
//   <div>
//     <HomepageLayout>
      // <Segment style={{ padding: '8em 0em' }} vertical>
      //   <Grid container stackable verticalAlign='middle'>
      //     <Grid.Row>
      //       <Grid.Column width={8}>
      //         <Header as='h3' style={{ fontSize: '2em' }}>
      //         拼音输入法都只能打普通话吗？
      //         </Header>
      //         <p style={{ fontSize: '1.33em' }}>
      //           当然不是！现在经过民间各界有识之士的共同努力，我们终于可以在手机和电脑上用自己的母语方言来打字了。
      //         </p>
      //         <Header as='h3' style={{ fontSize: '2em' }}>
      //           我的家乡话也有拼音？
      //         </Header>
      //         <p style={{ fontSize: '1.33em' }}>
      //           普通话也只是一门汉语方言，任何汉语都可以有自己的拼音。本网站将手把手教读者在自己的电脑（Windows、Linux、macOS）和手机（iOS和Android）上安装输入法并部署自己母语的方言输入方案。只需要按照本站的教程一步一步配置好，从此跟家人和老乡聊天就再也不用别扭地用普通话输入法了！
      //         </p>
      //       </Grid.Column>
      //       <Grid.Column floated='right' width={8}>
      //         <Image bordered rounded size='huge' src='/wuyu.png' />
      //       </Grid.Column>
      //     </Grid.Row>
      //   </Grid>
      // </Segment>

//       <Segment style={{ padding: '0em' }} vertical>
//         <Grid columns='equal' stackable>
//           <Grid.Row>
//             <Grid.Column style={{ padding: '5em' }} textAlign='center'>
//               <Header as='h3' style={{ fontSize: '2em' }}>
//                 我的家乡话也有拼音？
//               </Header>
//               <p style={{ fontSize: '1.33em' }}>我们目前已经支持了最主流的汉语方言，快来看看自己的家乡话在不在右边的列表里（点击箭头展开）</p>
//               <Header as='h4' style={{ fontSize: '1.5em' }}>
//                 不在列表里？
//               </Header>
//               <p style={{ fontSize: '1.33em' }}>如果你的家乡话不在上表中，非常欢迎告诉我们，让我们可以尽快添加支持。</p>
//             </Grid.Column>

//             <Grid.Column style={{ padding: '5em'}}>
//               <SchemaList/>
//             </Grid.Column>
//           </Grid.Row>
//         </Grid>
//       </Segment>

      // <Segment style={{ padding: '8em 0em' }} vertical>
      //   <Container text textAlign='center'>
      //     <Header as='h3' style={{ fontSize: '2em' }}>
      //       我也要用家乡话打字！
      //     </Header>
      //     <p style={{ fontSize: '1.33em' }}>

      //     </p>
      //     <Button color='blue' as={ Link } to='/install' size='massive'>
      //       起
      //     </Button>
      //   </Container>
      // </Segment>      
//     </HomepageLayout>
//   </div>
// )

export default IndexPage
