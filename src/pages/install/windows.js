import React, { Component, createRef } from 'react';
import {
  Accordion,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Message,
  Segment,
  Table,
  Ref,
  Visibility,
} from 'semantic-ui-react';

import Link from 'gatsby-plugin-transition-link';
import RecipeList from '../../components/RecipeList';
import InstallPageLayout from '../../layouts/InstallPageLayout';

if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]')
}

class WindowsInstallPage extends Component { 
  state = { 
    activeItem: 'account',
    focus: {
      step1: false,
      step2a: false,
      step2b: false,
      step3: false,
    }
   }
  contextRef = createRef()

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  handleUpdate = (e, { calculations }) => this.setState({ calculations })

  render() {
    const { activeItem, focus } = this.state
    return (
      <InstallPageLayout
        activeItem='windows'
      >
        <Grid columns='equal' padded stackable>
          <Grid.Column width={13}>
            <Header textAlign='center' size="Massive" as="h1">
              <Header.Content>Windows平台安装部署教程</Header.Content>
              <Header.Subheader>
                以Win 10爲例
              </Header.Subheader>
            </Header>
            <p>如概述所說，安裝過程只有兩步：</p>
            <List ordered>
              <List.Item>安裝小狼毫輸入法</List.Item>
              <List.Item>部署方言拼音方案</List.Item>
            </List>
            <p>本章就以Windows 10系統為例手把手教你如何操作（別擔心Win7也一樣的，不行的話儘管<a href="mailto:laubonghaudoi@icloud.com">郵件</a>罵我）。</p>
            <Message>
              <Icon name="exclamation circle"/>
              有的版本Windows系統會檢測到小狼毫為惡意軟件和木馬，這是Windows Defender自身的誤判問題。小狼毫是一個開源的輸入法軟件，不含任何惡意程序。如果安裝包被系統檢測為惡意程序，請先參考這篇文章的第一步關閉實時保護，再開始安裝。
            </Message>
            <Divider></Divider>
            <Container>
            <Header textAlign='center' size="huge" as="h2" id='step1'>
              <Header.Content>第一步  安裝小狼毫輸入法</Header.Content>
            </Header>
            <Table structured inverted padded>
              <Table.Header>
                <Table.Row>
                  <Table.Cell>#</Table.Cell>
                  <Table.Cell>操作</Table.Cell>
                </Table.Row>
              </Table.Header>
              <Table.Row>
                <Table.Cell rowspan='2'>1</Table.Cell>
                <Table.Cell>
                  首先前往rime官网，下载小狼毫输入法
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <Image src='/win/win1_1.png' fluid/>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell rowspan='2'>2</Table.Cell>
                <Table.Cell>
                  下载完成后，双击安装
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <Image size='tiny' src='/win/win1_2.jpg' fluid/>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell rowspan='2'>3</Table.Cell>
                <Table.Cell>
                  Win10可能会弹出安全提醒，这时点击“更多信息→仍要运行”，然后通过管理员权限
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <Image.Group size='medium'>
                    <Image src='/win/win1_3a.jpg' fluid/>
                    <Image src='/win/win1_3b.jpg' fluid/>
                  </Image.Group>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell rowspan='2'>4</Table.Cell>
                <Table.Cell>
                  正式进入小狼毫安装界面，点击“我接受”，然后选择安装路径，再点击“安装”
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <Image.Group size='medium'>
                    <Image src='/win/win1_4a.jpg' fluid/>
                    <Image src='/win/win1_4b.png' fluid/>
                  </Image.Group>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell rowspan='2'>5</Table.Cell>
                <Table.Cell>
                  安装成功后，出现安装选项界面
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <Image size='large' src='/win/win1_5.jpg' fluid/>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell rowspan='2'>6</Table.Cell>
                <Table.Cell>
                  选择好输入大陆或台湾字体后点击“安装”，即出现安装成功界面
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <Image.Group size='medium'>
                    <Image src='/win/win1_6a.png' fluid/>
                    <Image src='/win/win1_6b.png' fluid/>
                  </Image.Group>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell rowspan='2'>7</Table.Cell>
                <Table.Cell>
                  这时再点击任务栏右下角的输入法图标，就可以看到小狼毫输入法
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <Image size='medium' src='/win/win1_7.png' fluid/>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell rowspan='2'>8</Table.Cell>
                <Table.Cell>
                  点击切换到小狼毫输入法，随便打几个字，可以发现默认用的是普通话拼音输入，而且是繁体字
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <Image size='medium' src='/win/win1_8.png' fluid/>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell rowspan='2'>9</Table.Cell>
                <Table.Cell>
                  怎么切换成简体字输入呢？只需要按下<code>Ctrl</code>和<code>`</code>（数字1左边那个键，和波浪号~相同）这两个键，就会弹出一个设置菜单
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <Image size='medium' src='/win/win1_9.png' fluid/>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell rowspan='2'>10</Table.Cell>
                <Table.Cell>
                  可以看到按1、3、4、5都是选择不同的输入方案，按2则进入格式设置
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <Image size='medium' src='/win/win1_10.png' fluid/>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell rowspan='2'>11</Table.Cell>
                <Table.Cell>
                  可以看到不只有简繁体切换，还有全半角和中英文切换，按下4，然后就可以用简体字输入了
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <Image size='medium' src='/win/win1_11.png' fluid/>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell rowspan='2'>12</Table.Cell>
                <Table.Cell>
                  再打开开始菜单，可以见到新添加的一系列小狼毫输入法程序，点击“【小狼毫】输入法设定”
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <Image size='medium' src='/win/win1_12_2a_1.png' fluid/>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell rowspan='2'>13</Table.Cell>
                <Table.Cell>
                  进入输入法设定界面后可以看到有各种可选的输入方案，勾选自己想要的然后点“中”（一般只要勾選「明月拼音一項即可，就是普通話拼音輸入」）
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <Image size='big' src='/win/win1_13.png' fluid/>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell rowspan='2'>14</Table.Cell>
                <Table.Cell>
                  然后进入皮肤选择界面，选择自己喜欢的皮肤，再点“中”，就大功告成啦
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <Image.Group size='medium'>
                    <Image src='/win/win1_14a.jpg' fluid/>
                    <Image src='/win/win1_14b.png' fluid/>
                  </Image.Group>
                </Table.Cell>
              </Table.Row>
            </Table>
            </Container>
            
            <Header textAlign='center' size="huge" as="h2" id='step2a'>
              <Header.Content>第二步 快捷啟用拼音方案</Header.Content>
              <Header.Subheader>
                僅限部分語言
              </Header.Subheader>
            </Header>
            <Message>
              <Icon name='info circle'/>
              小狼毫默认自带了部分语言的拼音方案，可以免去较繁琐的部署过程直接启拼音方案。如果你的想输入的语言在以下列表中，可继续阅读本节快速启用方言拼音，否则直接<Link to='/install/windows/#step2b'>跳到下一节</Link>使用通用方法部署拼音方案。
            </Message>
            <RecipeList/>
            <Table structured inverted padded>
              <Table.Header>
                <Table.Row>
                  <Table.Cell>#</Table.Cell>
                  <Table.Cell>操作</Table.Cell>
                </Table.Row>
              </Table.Header>
              <Table.Row>
                <Table.Cell rowspan='2'>1</Table.Cell>
                <Table.Cell>
                  首先前往rime官网，下载小狼毫输入法
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <Image src='/win/win1_1.png' fluid/>
                </Table.Cell>
              </Table.Row> 
            </Table>

            <Header textAlign='center' size="huge" as="h2" id='step2b'>
              <Header.Content>第二步  部署方言拼音方案</Header.Content>
              <Header.Subheader>
                通用方法
              </Header.Subheader>
            </Header>

            <Header textAlign='center' size="huge" as="h2" id='wrapup'>
              <Header.Content>小結</Header.Content>
            </Header>
            
            <Header textAlign='center' size="huge" as="h2" id='lookup'>
              <Header.Content>但是我只會打普通話拼音，方言拼音該怎麼打？</Header.Content>
            </Header>

            <Header textAlign='center' size="huge" as="h2" id='customize'>
              <Header.Content>（可選步驟）自定義小狼毫外觀</Header.Content>
            </Header>
          </Grid.Column>


          <Grid.Column width={3}>
            <Menu 
              vertical
              text
              style={{
                position:'fixed',
                width:'14em'
              }}
            >
              <Menu.Item
                name='step1'
                active={activeItem === 'step1'}
                onClick={this.handleItemClick}
                as={Link}
                to='/install/windows/#step1'
              >
                1 安装小狼毫
              </Menu.Item>
              <Menu.Item
                name='step2a'
                active={activeItem === 'step2a'}
                onClick={this.handleItemClick}
                as={Link}
                to='/install/windows/#step2a'
              >
                2a 快捷启用方案
              </Menu.Item>
              <Menu.Item
                name='step2b'
                active={activeItem === 'step2b'}
                onClick={this.handleItemClick}
                as={Link}
                to='/install/windows/#step2b'
              >
                2b 部署方案
              </Menu.Item>
              <Menu.Item
                name='step3'
                active={activeItem === 'wrapup'}
                onClick={this.handleItemClick}
                as={Link}
                to='/install/windows/#wrapup'
              >
                小結
              </Menu.Item>
              <Menu.Item
                name='step3'
                active={activeItem === 'lookup'}
                onClick={this.handleItemClick}
                as={Link}
                to='/install/windows/#lookup'
              >
                拼音反查
              </Menu.Item>
              <Menu.Item
                name='step3'
                active={activeItem === 'customize'}
                onClick={this.handleItemClick}
                as={Link}
                to='/install/windows/#customize'
              >
                自定義
              </Menu.Item>
            </Menu>
          </Grid.Column>
        </Grid>
      </InstallPageLayout >
    )
  }
}

export default WindowsInstallPage;
