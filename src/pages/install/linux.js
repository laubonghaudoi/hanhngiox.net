import React, { Component } from 'react';
import {
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Message,
  Table,
} from 'semantic-ui-react';

import { Link } from 'gatsby';
import RecipeList from '../../components/RecipeList';
import InstallPageLayout from '../../layouts/InstallPageLayout';

class MacInstallPage extends Component { 
  state = { 
    activeItem: 'account',
    focus: {
      step1: false,
      step2a: false,
      step2b: false,
      step3: false,
    }
  };

  handleItemClick = (_e, { name }) => {
    return this.setState({ activeItem: name });
  }
  handleUpdate = (_e, { calculations }) => this.setState({ calculations });

  render() {
    const { activeItem } = this.state
    return (
      <InstallPageLayout
        activeItem='linux'
      >
        <Grid columns='equal' padded stackable>
          <Grid.Column width={13}>
            <Header textAlign='center' size="Massive" as="h1">
              <Header.Content>Linux平臺安裝部署教程</Header.Content>
              <Header.Subheader>
              以Ubuntu 18.04爲例
              </Header.Subheader>
            </Header>
            <p>如概述所說，安裝過程只有兩步：</p>
            <List ordered>
              <List.Item>安装ibus-rime输入法</List.Item>
              <List.Item>部署拼音方案</List.Item>
            </List>
            <p>本章就以Ubuntu 18.04系統為例手把手教你如何操作。</p>
            
            <Divider style={{ paddingBottom: '4rem' }} id='step1'/>
            
            <Header textAlign='center' size="huge" as="h2" style={{ paddingBottom: '1rem' }}>
              <Header.Content>第一步 安装ibus-rime入法</Header.Content>
            </Header>
            <Table structured padded inverted>
              <Table.Header>
                <Table.Row>
                  <Table.Cell textAlign='center'><strong>序</strong></Table.Cell>
                  <Table.Cell textAlign='center'><strong>操作</strong></Table.Cell>
                </Table.Row>
              </Table.Header>
              <Table.Row>
                <Table.Cell>1</Table.Cell>
                <Table.Cell>
                  <p>在終端中運行以下命令</p>
                  <p><code>sudo apt-get update</code><br/>
                  <code>sudo apt-get install ibus-rime</code></p>
                  <p>然後重啓電腦</p>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell rowspan='2'>2</Table.Cell>
                <Table.Cell>
                  打開系統設置，點“區域和語言”，再點“輸入源”下面的 <kbd>+</kbd> 號
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <Image src='/linux/linux1_1.png' fluid/>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell rowspan='2'>3</Table.Cell>
                <Table.Cell>
                  找到漢語，點擊選擇
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <Image src='/linux/linux1_2.png' fluid/>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell rowspan='2'>4</Table.Cell>
                <Table.Cell>
                  安裝成功後，註銷並重新登錄（或者重啓）
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <Image src='/linux/linux1_4.png' fluid/>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell rowspan='2'>5</Table.Cell>
                <Table.Cell>
                  點擊右上角的輸入法圖標，發現已經成功安裝Rime，選擇
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <Image src='/linux/linux1_5.png'/>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell rowspan='2' fluid>6</Table.Cell>
                <Table.Cell>
                  然後會顯示Rime正在維護，稍等一會之後嘗試輸入幾個字，發現可以使用普通話拼音了
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <Image src='/linux/linux1_6.png' fluid/>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell rowspan='2'>7</Table.Cell>
                <Table.Cell>
                  要切換成簡體字輸入呢？只需要按下<kbd>Ctrl</kbd>和<kbd>`</kbd>（數字1左邊那個鍵，和波浪號~相同）這兩個鍵，就會彈出一個設置菜單
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <Image src='/linux/linux1_7.png' fluid/>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell rowspan='2'>8</Table.Cell>
                <Table.Cell>
                  可以看到按1、3、4、5都是選擇不同的輸入方案，按2則進入格式設置
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <Image src='/linux/linux1_8.png' fluid/>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell rowspan='2'>9</Table.Cell>
                <Table.Cell>
                  可以看到不只有簡繁體切換，還有全半角和中英文切換，按下4，然後就可以用簡體字輸入了
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <Image src='/linux/linux1_9.png' fluid/>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>10</Table.Cell>
                <Table.Cell>
                  到這裏第一步就完成了。你可以直接使用ibus-rime中的普通話拼音、倉頡來打字。要啓用漢語方言拼音，就繼續按照下面的步驟啓用方言拼音方案。
                </Table.Cell>
              </Table.Row>
            </Table>

            <Divider style={{ paddingBottom: '4rem' }} id='step2a'/>

            <Header textAlign='center' size="huge" as="h2" style={{ paddingBottom: '1rem' }}>
              <Header.Content>第二步（其一） 快捷啟用拼音方案</Header.Content>
              <Header.Subheader>
                僅限部分語言
              </Header.Subheader>
            </Header>
            <Message>
              <p><Icon name='info circle'/>
              如果你的想輸入的語言<strong>在下方列表中</strong>，可繼續閱讀本節快速啓用方言拼音，<strong>否則直接<Link to='/install/linux/#step2b'>跳到下一節</Link></strong>使用通用方法部署拼音方案。</p>
              <p>下面列表中每一行的格式都是是<code>語言名：方案名稱 方案代號</code>，有的語言例如潮汕話，是多個方音共用一個方案代號 <code>Kahaani/dieghv</code>。找到自己語言的方案名稱和代號之後按以下步驟啓用方案。</p>
            </Message>
            <RecipeList/>
            <Table structured inverted padded>
              <Table.Header>
                <Table.Row>
                  <Table.Cell textAlign='center'><strong>序</strong></Table.Cell>
                  <Table.Cell textAlign='center'><strong>操作</strong></Table.Cell>
                </Table.Row>
              </Table.Header>
              <Table.Row>
                <Table.Cell rowspan='2'>1</Table.Cell>
                <Table.Cell>
                  <p>打開終端，運行以下命令：</p>
                  <Message><code>curl -fsSL https://git.io/rime-install | bash</code></Message>
                  <p>注意如果提示未安裝git，需要先安裝git</p>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <Image src='/linux/linux2a_1.png' fluid/>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell rowspan='2' fluid>2</Table.Cell>
                <Table.Cell>
                  <p>然後運行以下命令，安裝你想要的方言拼音方案：</p>
                  <Message><code>cd plum</code><br/>
                  <code>bash rime-install NGLI/rime-wugniu_soutseu</code></Message>
                  這裏以蘇州話爲例，因此上面的方案代號是<code>NGLI/rime-wugniu_soutseu</code>，自行把這個代號替換爲你想安裝的方案代號。例如你要安裝粵語拼音，那第二項命令就是
                  <p><code>bash rime-install cantonese</code></p>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <Image size='big' src='/linux/linux2a_2.png' fluid/>
                </Table.Cell>
              </Table.Row>
            </Table>
            <Message>
              请直接<Link to='/install/linux/#step3'>跳到第三步</Link>一节继续教程。
            </Message>

            <Divider style={{ paddingBottom: '4rem' }} id='step2b'/>

            <Header textAlign='center' size="huge" as="h2" style={{ paddingBottom: '1rem' }}>
              <Header.Content>第二步（其二）  手動複製方言拼音方案</Header.Content>
              <Header.Subheader>
                通用方法
              </Header.Subheader>
            </Header>
            <Table structured inverted padded>
              <Table.Header>
                <Table.Row>
                  <Table.Cell textAlign='center'><strong>序</strong></Table.Cell>
                  <Table.Cell textAlign='center'><strong>操作</strong></Table.Cell>
                </Table.Row>
              </Table.Header>
              <Table.Row>
                <Table.Cell rowspan='2'>1</Table.Cell>
                <Table.Cell>
                  首先點擊<a href="">這裏</a>下載最新版的漢語方言拼音方案合集，打開壓縮包可以看到裏面有一個 <code>default.custom.yaml</code> 和 <code>default.yaml</code> 文件（這兩個文件是給其他平臺用戶的，這裏忽略它就行了）和以各大方言區命名的文件夾。
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <Image src='/linux/linux2b_1.png' fluid/>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell rowspan='2'>2</Table.Cell>
                <Table.Cell>
                  我們這裏以蘇州話爲例，打開 <code>吳語/蘇州話</code> ，可以看見裏面有兩個文件：<code>wugniu_soutseu.dict.yaml</code> 和 <code>wugniu_soutseu.schema.yaml</code> ，如下圖，這就是我們要的拼音方案了。（如果你好奇這兩個文件是什麼來的，看這裏）
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <Image src='/linux/linux2b_2.png' fluid/>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell rowspan='2'>3</Table.Cell>
                <Table.Cell>
                  打開 <code>~/.config/ibus/rime</code> 路徑（其中<code>.config</code> 爲隱藏文件夾，需要按 <kbd>Ctrl</kbd> + <kbd>H</kbd> 顯示），可以見到如圖所示的一些文件
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <Image src='/linux/linux2a_3_2b_3.png' fluid/>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell rowspan='2'>4</Table.Cell>
                <Table.Cell>
                  把剛纔的兩個拼音方案文件複製到這個路徑下，這裏以蘇州話爲例，我們複製 <code>wugniu_soutseu.dict.yaml</code> 和 <code>wugniu_soutseu.schema.yaml</code> 到這個文件夾下
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <Image src='/linux/linux2b_4.png' fluid/>
                </Table.Cell>
              </Table.Row>
            </Table>

            <Divider style={{ paddingBottom: '4rem' }} id='step3'/>

            <Header textAlign='center' size="huge" as="h2" style={{ paddingBottom: '1rem' }}>
              <Header.Content>第三步  啓用方案</Header.Content>
            </Header>
            <Table structured inverted padded>
              <Table.Header>
                <Table.Row>
                  <Table.Cell textAlign='center'><strong>序</strong></Table.Cell>
                  <Table.Cell textAlign='center'><strong>操作</strong></Table.Cell>
                </Table.Row>
              </Table.Header>
              <Table.Row>
                <Table.Cell rowspan='2'>1</Table.Cell>
                <Table.Cell>
                  打開 <code>~/.config/ibus/rime</code> 下的 <code>default.yaml</code> 文件，可以見到裏面有一些配置語句
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <Image src='/linux/linux2a_4_2b_5.png' fluid/>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell rowspan='2'>2</Table.Cell>
                <Table.Cell>
                  <p>在 <code>schema-list:</code> 的那一塊的後面加上一行字（保持縮進對齊）：</p>
                  <Message><code> - schema: ID</code></Message>
                  其中把裏面的ID替換成你的方案id，也就是<code>.schema.yaml</code>文件的文件名。例如我們這裏用的是蘇州話，所以就加上了<code>- schema: wugniu_soutseu</code>，如下圖
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <Image src='/linux/linux2b_6.png'/>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell rowspan='2'>3</Table.Cell>
                <Table.Cell>
                  如果你想把輸入法的候選詞數量增加到10個（最多10個），則把下面的 <code>page_size: 5</code> 改成 <code>page_size: 10</code> ，如圖
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <Image src='/linux/linux3_3.png'/>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell rowspan='2'>4</Table.Cell>
                <Table.Cell>
                保存後關閉文件，點擊右上方的rime輸入法圖標，點“同步”，然後點擊“部署”
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <Image src='/linux/linux3_4.png'/>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell rowspan='2'>5</Table.Cell>
                <Table.Cell>
                  再按下 <kbd>Ctrl</kbd> 和 <kbd>`</kbd> ，可以發現蘇州話方案已經成功添加。嘗試打幾個字，可見部署成功，候選詞數量也增加到10個
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <Image.Group size='big'>
                    <Image src='/linux/linux3_5a.png'/>
                    <Image src='/linux/linux3_5b.png'/>
                  </Image.Group>
                </Table.Cell>
              </Table.Row>
            </Table>


            <Divider style={{ paddingBottom: '4rem' }} id='wrapup'/>

            <Header textAlign='center' size="huge" as="h2" style={{ paddingBottom: '1rem' }}>
              <Header.Content>小結</Header.Content>
            </Header>
              至此，我們終於實現了在macOS下的漢語方言拼音輸入。所以以後如果需要添加其他漢語方言的輸入方案，只需要記住以下三步就可以了
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

            <Divider style={{ paddingBottom: '4rem' }} id='lookup'/>

            <Header textAlign='center' size="huge" as="h2" style={{ paddingBottom: '1rem' }}>
              <Header.Content>但我只會普通話拼音，方言拼音該怎麼打？</Header.Content>
            </Header>
            <Table inverted structured padded>
              <Table.Header>
                <Table.Row>
                  <Table.Cell textAlign='center'><strong>序</strong></Table.Cell>
                  <Table.Cell textAlign='center'><strong>操作</strong></Table.Cell>
                </Table.Row>
              </Table.Header>
              <Table.Row>
                <Table.Cell rowspan='2'>1</Table.Cell>
                <Table.Cell>
                  ibus-rime有一個很強大的拼音反查功能，如果你有個字只會普通話拼音，不知道他的方言拼音怎麼打，就按下<code>`</code> ，然後打這個字的普通話拼音，這樣就能像查字典一樣查到任何字的方言拼音了
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <Image size='big' src='/linux/linux_l.png'/>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell rowspan='2'>2</Table.Cell>
                <Table.Cell>
                  當然，最重要的還是學會自己母語方言的拼音。所有的漢語方言拼音普通話拼音一樣，很快就能掌握，如果你是母語者那就更輕鬆了。本站的<Link to='/schema'>拼音方案頁</Link>列出了所有方言拼音方案的介紹和教程。只需稍加練習，以後和老鄉親戚聊天就都能舒暢地打家鄉話啦
                </Table.Cell>
              </Table.Row>
            </Table>

            <Divider style={{ paddingBottom: '4rem' }} id='customize'/>

            <Header textAlign='center' size="huge" as="h2" style={{ paddingBottom: '1rem' }}>
              <Header.Content>（可選）自定義ibus-rime外觀</Header.Content>
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
                to='/install/linux/#step1'
              >
                1 安装ibus-rime
              </Menu.Item>
              <Menu.Item
                name='step2a'
                active={activeItem === 'step2a'}
                onClick={this.handleItemClick}
                as={Link}
                to='/install/linux/#step2a'
              >
                2a 快捷下載方案
              </Menu.Item>
              <Menu.Item
                name='step2b'
                active={activeItem === 'step2b'}
                onClick={this.handleItemClick}
                as={Link}
                to='/install/linux/#step2b'
              >
                2b 手動複製方案
              </Menu.Item>
              <Menu.Item
                name='step3'
                active={activeItem === 'step3'}
                onClick={this.handleItemClick}
                as={Link}
                to='/install/linux/#step3'
              >
                3 啓用方案
              </Menu.Item>
              <Menu.Item
                name='wrapup'
                active={activeItem === 'wrapup'}
                onClick={this.handleItemClick}
                as={Link}
                to='/install/linux/#wrapup'
              >
                小結
              </Menu.Item>
              <Menu.Item
                name='lookup'
                active={activeItem === 'lookup'}
                onClick={this.handleItemClick}
                as={Link}
                to='/install/linux/#lookup'
              >
                拼音反查
              </Menu.Item>
              <Menu.Item
                name='customize'
                active={activeItem === 'customize'}
                onClick={this.handleItemClick}
                as={Link}
                to='/install/linux/#customize'
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
