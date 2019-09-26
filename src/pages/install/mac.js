import React, { Component, createRef } from 'react';
import {
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Message,
  Table,
  Ref,
  Visibility,
} from 'semantic-ui-react';

import { Link } from 'gatsby';
import RecipeList from '../../components/RecipeList';
import InstallPageLayout from '../../layouts/InstallPageLayout';

if (typeof macdow !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]')
}

class MacInstallPage extends Component { 
  state = { 
    activeItem: 'account',
    focus: {
      step1: false,
      step2a: false,
      step2b: false,
      step3: false,
    }
   }
  contextRef = createRef();

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  handleUpdate = (e, { calculations }) => this.setState({ calculations })

  render() {
    const { activeItem, focus } = this.state
    return (
      <InstallPageLayout
        activeItem='mac'
      >
        <Grid columns='equal' padded stackable>
          <Grid.Column width={13}>
            <Header textAlign='center' size="Massive" as="h1">
              <Header.Content>macOS安装部署教程</Header.Content>
              <Header.Subheader>
                以Mojave 10.14为例
              </Header.Subheader>
            </Header>
            <p>如概述所說，安裝過程只有兩步：</p>
            <List ordered>
              <List.Item>安装鼠须管输入法</List.Item>
              <List.Item>部署方言拼音方案</List.Item>
            </List>
            <p>本章就以Mojave 10.14系統為例手把手教你如何操作。</p>
            <Divider></Divider>
            <Header textAlign='center' size="huge" as="h2" id='step1'>
              <Header.Content>第一步 安装鼠须管输入法</Header.Content>
            </Header>
            <Table structured padded
              style={{
                backgroundColor: '#7BC2FB',
                color:'black',
              }}>
              <Table.Header             
                style={{
                backgroundColor: '#7BC2FB',
                color:'black',
                borderRadius: '200px',
              }}>
                <Table.Row>
                  <Table.Cell>#</Table.Cell>
                  <Table.Cell>操作</Table.Cell>
                </Table.Row>
              </Table.Header>
              <Table.Row>
                <Table.Cell rowspan='2'>1</Table.Cell>
                <Table.Cell>
                  首先前往<a href="https://rime.im">中州韻官网</a>，下载鼠须管输入法
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <Image src='/mac/mac1_1.png' fluid/>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell rowspan='2'>2</Table.Cell>
                <Table.Cell>
                  下載完成後，雙擊安裝
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <Image.Group>
                    <Image size='tiny' src='/mac/mac1_2a.png' fluid/>
                    <Image size='large' src='/mac/mac1_2b.png' fluid/>
                  </Image.Group>
                  
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell rowspan='2'>3</Table.Cell>
                <Table.Cell>
                  mac10可能會彈出安全提醒，這時點擊“更多信息→仍要運行”，然後通過管理員權限
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <Image src='/mac/mac1_3.png' fluid/>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell rowspan='2'>4</Table.Cell>
                <Table.Cell>
                  正式進入小狼毫安裝界面，點擊“我接受”，然後選擇安裝路徑，再點擊“安裝”
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <Image.Group size='medium'>
                    <Image src='/mac/mac1_4a.jpg' fluid/>
                    <Image src='/mac/mac1_4b.png' fluid/>
                  </Image.Group>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell rowspan='2'>5</Table.Cell>
                <Table.Cell>
                  安裝成功後，出現安裝選項界面
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <Image size='large' src='/mac/mac1_5.jpg' fluid/>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell rowspan='2'>6</Table.Cell>
                <Table.Cell>
                  選擇好輸入大陸或臺灣字體後點擊“安裝”，即出現安裝成功界面
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <Image.Group size='medium'>
                    <Image src='/mac/mac1_6a.png' fluid/>
                    <Image src='/mac/mac1_6b.png' fluid/>
                  </Image.Group>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell rowspan='2'>7</Table.Cell>
                <Table.Cell>
                  這時再點擊任務欄右下角的輸入法圖標，就可以看到小狼毫輸入法
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <Image size='medium' src='/mac/mac1_7.png' fluid/>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell rowspan='2'>8</Table.Cell>
                <Table.Cell>
                  點擊切換到小狼毫輸入法，隨便打幾個字，可以發現默認用的是普通話拼音輸入，而且是繁體字
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <Image size='medium' src='/mac/mac1_8.png' fluid/>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell rowspan='2'>9</Table.Cell>
                <Table.Cell>
                  怎麼切換成簡體字輸入呢？只需要按下<code>Ctrl</code>和<code>`</code>（數字1左邊那個鍵，和波浪號~相同）這兩個鍵，就會彈出一個設置菜單
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <Image size='medium' src='/mac/mac1_9.png' fluid/>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell rowspan='2'>10</Table.Cell>
                <Table.Cell>
                  可以看到按1、3、4、5都是選擇不同的輸入方案，按2則進入格式設置
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <Image size='medium' src='/mac/mac1_10.png' fluid/>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell rowspan='2'>11</Table.Cell>
                <Table.Cell>
                  可以看到不只有簡繁體切換，還有全半角和中英文切換，按下4，然後就可以用簡體字輸入了
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <Image size='medium' src='/mac/mac1_11.png' fluid/>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell rowspan='2'>12</Table.Cell>
                <Table.Cell>
                  再打開開始菜單，可以見到新添加的一系列小狼毫輸入法程序，點擊“【小狼毫】輸入法設定”
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <Image size='medium' src='/mac/mac1_12_2a_1.png' fluid/>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell rowspan='2'>13</Table.Cell>
                <Table.Cell>
                  進入輸入法設定界面後可以看到有各種可選的輸入方案，勾選自己想要的然後點“中”（一般只要勾選「明月拼音一項即可，就是普通話拼音輸入」）
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <Image size='big' src='/mac/mac1_13.png' fluid/>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell rowspan='2'>14</Table.Cell>
                <Table.Cell>
                  然後進入皮膚選擇界面，選擇自己喜歡的皮膚，再點“中”，就大功告成啦
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <Image.Group size='medium'>
                    <Image src='/mac/mac1_14a.jpg' fluid/>
                    <Image src='/mac/mac1_14b.png' fluid/>
                  </Image.Group>
                </Table.Cell>
              </Table.Row>
            </Table>
            <Divider/>

            <Header textAlign='center' size="huge" as="h2" id='step2a'>
              <Header.Content>第二步 快捷啟用拼音方案</Header.Content>
              <Header.Subheader>
                僅限部分語言
              </Header.Subheader>
            </Header>
            <Message>
              <p><Icon name='info circle'/>
              小狼毫默認自帶了部分語言的拼音方案，可以免去較繁瑣的部署過程直接啓拼音方案。如果你的想輸入的語言在以下列表中，可繼續閱讀本節快速啓用方言拼音，否則直接<Link to='/install/mac/#step2b'>跳到下一節</Link>使用通用方法部署拼音方案。</p>
            </Message>
            <RecipeList/>
            <Message>
              <p>上面列表中每一行的格式都是是“語言名：方案名稱 方案代號”，有的語言例如潮汕話，是多個方音共用一個方案代號Kahaani/dieghv。找到自己語言的方案名稱和代號之後按以下步驟啓用方案</p>
            </Message>
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
                  打開“【小狼毫】輸入法設定”
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <Image size='medium' src='/mac/mac1_12_2a_1.png' fluid/>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell rowspan='2'>2</Table.Cell>
                <Table.Cell>
                  點擊左下方的“獲取更多輸入方案”
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <Image size='big' src='/mac/mac2a_2.png' fluid/>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell rowspan='2'>3</Table.Cell>
                <Table.Cell>
                  這時會彈出一個命令行界面
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <Image size='big' src='/mac/mac2a_3.png' fluid/>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell rowspan='2'>4</Table.Cell>
                <Table.Cell>
                  然後把你想輸入的語言的方案代號複製進去，再按回車。例如要輸入廣州話，則複製<code>jyutping</code>再按回車，然後可以見到方案部署成功
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <Image size='big' src='/mac/mac2a_4.png' fluid/>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell rowspan='2'>5</Table.Cell>
                <Table.Cell>
                  關閉命令行界面，回到小狼毫設定界面，可以見到方案列表可以勾選拼音方案了
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <Image size='big' src='/mac/mac2a_5.png' fluid/>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell rowspan='2'>6</Table.Cell>
                <Table.Cell>
                  點“中”完成配置後，重複剛纔的步驟按<code>Ctrl</code>和<code>`</code> （數字1左邊那個鍵，和波浪號~相同）兩個鍵，選擇粵拼方案，就可以打廣州話拼音了！
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <Image.Group size='medium'>
                    <Image src='/mac/mac2a_6a.png' fluid/>
                    <Image src='/mac/mac2a_6b.png' fluid/>
                  </Image.Group>
                </Table.Cell>
              </Table.Row>
            </Table>
            <Message>
              请直接<Link to='/install/mac/#wrapup'>跳到「小结」</Link>一节继续教程。
            </Message>
            <Divider/>

            <Header textAlign='center' size="huge" as="h2" id='step2b'>
              <Header.Content>第二步  部署方言拼音方案</Header.Content>
              <Header.Subheader>
                通用方法
              </Header.Subheader>
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
                  首先點擊這裏下載最新版的漢語方言拼音方案合集，打開壓縮包可以看到裏面有一個<code>default.custom.yaml</code>和<code>default.yaml</code>文件（這兩個文件是給其他平臺用戶的，我們macdows忽略它就行了）和以各大方言區命名的文件夾。
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <Image src='/mac/mac2b_1.png' fluid/>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell rowspan='2'>2</Table.Cell>
                <Table.Cell>
                  我們這裏以蘇州話爲例，打開吳語/蘇州話，可以看見裏面有兩個文件：wugniu_soutseu.dict.yaml和wugniu_soutseu.schema.yaml，如下圖，這就是我們要的拼音方案了。（如果你好奇這兩個文件是什麼來的，看這裏）
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <Image src='/mac/mac2b_2.png' fluid/>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell rowspan='2'>3</Table.Cell>
                <Table.Cell>
                  右鍵點擊任務欄右下角的小狼毫圖標，可以看到彈出一個菜單
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <Image size='medium' src='/mac/mac2b_3.png' fluid/>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell rowspan='2'>4</Table.Cell>
                <Table.Cell>
                  點擊“用戶文件夾（C）”，這時會自動打開C:\Users\用戶名\AppData\Roaming\Rime下的文件夾，可以看到裏面有幾個文件和文件夾
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <Image src='/mac/mac2b_4.png' fluid/>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell rowspan='2'>5</Table.Cell>
                <Table.Cell>
                  然後把wugniu_soutseu.dict.yaml和wugniu_soutseu.schema.yaml這兩個文件複製到這裏，如下圖
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <Image src='/mac/mac2b_5.png' fluid/>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell rowspan='2'>6</Table.Cell>
                <Table.Cell>
                  右鍵小狼毫圖標，點“用戶資料同步”
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <Image size='medium' src='/mac/mac2b_6.png' fluid/>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell rowspan='2'>7</Table.Cell>
                <Table.Cell>
                  再從開始菜單打開“【小狼毫】輸入法設定”，可以看到現在能勾選蘇州話拼音方案了
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <Image size='big' src='/mac/mac2b_7.png' fluid/>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell rowspan='2'>8</Table.Cell>
                <Table.Cell>
                  點“中”完成配置後，重複剛纔的步驟按<code>Ctrl</code>和<code>`</code>（數字1左邊那個鍵，和波浪號~相同）兩個鍵，選擇蘇州話拼音方案，就可以打蘇州話拼音了！
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <Image.Group size='medium'>
                    <Image src='/mac/mac2b_8a.png' fluid/>
                    <Image src='/mac/mac2b_8b.png' fluid/>
                  </Image.Group>
                </Table.Cell>
              </Table.Row>
            </Table>
            <Divider/>

            <Header textAlign='center' size="huge" as="h2" id='wrapup'>
              <Header.Content>小結</Header.Content>
            </Header>
              至此，我們終於實現了在macdows系統下的漢語方言拼音輸入。所以以後如果需要添加其他漢語方言的輸入方案，只需要記住以下三步就可以了
              <Message>
                <Header size="small">
                  快捷方式（僅限部分語言）：
                </Header>
                <List as='ol'>
                  <List.Item as='li' value='1.'>打開小狼毫輸入法設定界面，點“獲取更多輸入方案”</List.Item>
                  <List.Item as='li' value='2.'>輸入方案代號後回車，直接下載部署拼音方案</List.Item>
                  <List.Item as='li' value='3.'>回到界面勾選輸入方案</List.Item>
                </List>
                <Divider/>
                <Header size="small">
                  通用方式（適用於全部語言）：
                </Header>
                <List as='ol'>
                  <List.Item as='li' value='1.'>複製後綴爲<code>.dict.yaml</code>和<code>.schema.yaml</code>的方案文件到用戶文件夾</List.Item>
                  <List.Item as='li' value='2.'>用戶資料同步</List.Item>
                  <List.Item as='li' value='3.'>小狼毫輸入法設定勾選方案</List.Item>
                </List>
              </Message>
            <Divider/>

            <Header textAlign='center' size="huge" as="h2" id='lookup'>
              <Header.Content>但我只會普通話拼音，方言拼音該怎麼打？</Header.Content>
            </Header>
            <Table inverted structured padded>
              <Table.Row>
                <Table.Cell rowspan='2'>1</Table.Cell>
                <Table.Cell>
                  小狼毫有一個很強大的拼音反查功能，如果你有個字只會普通話拼音，不知道他的方言拼音怎麼打，就按下<code>`</code> ，然後打這個字的普通話拼音，這樣就能像查字典一樣查到任何字的方言拼音了
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <Image src='/mac/mac_l.png'></Image>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell rowspan='2'>2</Table.Cell>
                <Table.Cell>
                  當然，最重要的還是學會自己母語方言的拼音。所有的漢語方言拼音普通話拼音一樣，很快就能掌握，如果你是母語者那就更輕鬆了。本站的<Link to='/schema'>拼音方案頁</Link>列出了所有方言拼音方案的介紹和教程。只需稍加練習，以後和老鄉親戚聊天就都能舒暢地打家鄉話啦
                </Table.Cell>
              </Table.Row>
            </Table>
            <Divider/>

            <Header textAlign='center' size="huge" as="h2" id='customize'>
              <Header.Content>（可選）自定義小狼毫外觀</Header.Content>
            </Header>
            <Header size="large" as="h3">
              <Header.Content>橫排顯示</Header.Content>
            </Header>
            <Table inverted structured padded>
              <Table.Row>
                <Table.Cell rowspan='2'>1</Table.Cell>
                <Table.Cell>
                  右鍵點擊屏幕右下角的小狼毫輸入法圖標，在彈出菜單中點擊“用戶文件夾”
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <Image src='/mac/mac_c1_1.png'></Image>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell rowspan='2'>2</Table.Cell>
                <Table.Cell>
                  打開小狼毫的用戶文件夾，可以見到有個名爲<code>weasel.custom.yaml</code>的文件
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <Image src='/mac/mac_c1_2.png' fluid></Image>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell rowspan='2'>3</Table.Cell>
                <Table.Cell>
                  用記事本打開，可以看到裏面有一些配置語句
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <Image src='/mac/mac_c1_3.png' fluid></Image>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell rowspan='2'>4</Table.Cell>
                <Table.Cell>
                  我們在最後面加上下面這行字（保持縮進），保存
                  <p><code>"style/horizontal": true</code></p>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <Image src='/mac/mac_c1_4.png' fluid></Image>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell rowspan='2'>5</Table.Cell>
                <Table.Cell>
                  然後右鍵打開小狼毫菜單，點“重新部署”
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <Image src='/mac/mac_c1_5.png'size='medium' fluid></Image>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell rowspan='2'>5</Table.Cell>
                <Table.Cell>
                  再打幾個字，可以見到小狼毫變成橫排顯示了
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <Image src='/mac/mac_c1_6.png' fluid></Image>
                </Table.Cell>
              </Table.Row>
            </Table>
            <Header size="large" as="h3">
              <Header.Content>更改候選詞數量</Header.Content>
            </Header>
            <Table inverted structured padded>
              <Table.Row>
                <Table.Cell rowspan='2'>1</Table.Cell>
                <Table.Cell>
                  右鍵點擊屏幕右下角的小狼毫輸入法圖標，在彈出菜單中點擊“用戶文件夾”
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <Image src='/mac/mac_c1_1.png' size='medium' fluid></Image>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell rowspan='2'>2</Table.Cell>
                <Table.Cell>
                  打開小狼毫的用戶文件夾，可以見到有個名爲<code>default.custom.yaml</code>的文件
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <Image src='/mac/mac_c2_2.png' fluid></Image>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell rowspan='2'>3</Table.Cell>
                <Table.Cell>
                  打開這個<code>default.custom.yaml</code>，可以見到裏面有一些配置語句
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <Image src='/mac/mac_c2_3.png' fluid></Image>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell rowspan='2'>4</Table.Cell>
                <Table.Cell>
                  再最後面加上這行字（保持原有的兩格縮進，裏面的數字10可以改成你想要的數量，但不能超過10），然後保存
                  <p><code>"menu/page_size": 10</code></p>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <Image src='/mac/mac_c2_4.png' fluid></Image>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell rowspan='2'>5</Table.Cell>
                <Table.Cell>
                  右鍵打開小狼毫菜單，點“重新部署”
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <Image src='/mac/mac_c1_5.png' size='medium' fluid></Image>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell rowspan='2'>6</Table.Cell>
                <Table.Cell>
                  可以看到小狼毫的候選詞數量變成10個了
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <Image src='/mac/mac_c2_6.png' fluid></Image>
                </Table.Cell>
              </Table.Row>
            </Table>

            <Header size="large" as="h3">
              <Header.Content>高級定製</Header.Content>
            </Header>
            <Message>
              小狼毫是一個非常強大的輸入法，可以任意配置最適合自己的輸入方案，詳情請參考Rime官網的<a href='https://github.com/rime/home/wiki/CustomizationGuide'>定製指南</a>。
            </Message>
          </Grid.Column>

          <Grid.Column width={3}>
            <Menu 
              vertical
              text
              style={{
                position:'fixed',
                width:'14em',
                marginLeft:'1em'
              }}
            >
              <Menu.Item
                name='step1'
                active={activeItem === 'step1'}
                onClick={this.handleItemClick}
                as={Link}
                to='/install/mac/#step1'
              >
                1 安装小狼毫
              </Menu.Item>
              <Menu.Item
                name='step2a'
                active={activeItem === 'step2a'}
                onClick={this.handleItemClick}
                as={Link}
                to='/install/mac/#step2a'
              >
                2a 快捷启用方案
              </Menu.Item>
              <Menu.Item
                name='step2b'
                active={activeItem === 'step2b'}
                onClick={this.handleItemClick}
                as={Link}
                to='/install/mac/#step2b'
              >
                2b 部署方案
              </Menu.Item>
              <Menu.Item
                name='step3'
                active={activeItem === 'wrapup'}
                onClick={this.handleItemClick}
                as={Link}
                to='/install/mac/#wrapup'
              >
                小結
              </Menu.Item>
              <Menu.Item
                name='step3'
                active={activeItem === 'lookup'}
                onClick={this.handleItemClick}
                as={Link}
                to='/install/mac/#lookup'
              >
                拼音反查
              </Menu.Item>
              <Menu.Item
                name='step3'
                active={activeItem === 'customize'}
                onClick={this.handleItemClick}
                as={Link}
                to='/install/mac/#customize'
              >
                自定義外觀
              </Menu.Item>
            </Menu>
          </Grid.Column>
        </Grid>
      </InstallPageLayout >
    )
  }
}

export default MacInstallPage;
