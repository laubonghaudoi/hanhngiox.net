import React, { Component } from 'react'

import {
  Divider,
  Grid,
  Header,
  Icon,
  List,
  Message,
  Table
} from "semantic-ui-react";

import { Link } from "gatsby-plugin-transition-link";
import { rhythm } from "../../utils/grandViewTypography"
import SchemaPageLayout from '../../layouts/SchemaPageLayout'

class Hakka extends Component {
  render(){
    return(
      <SchemaPageLayout
        activeItem='hakka'
      >
        <Header dividing size="huge" as="h1">
          客語拼音
        </Header>
        <Message 
          info
        >
          <Grid columns={2} stackable>
            <Divider vertical><Icon name="map"></Icon></Divider>
            <Grid.Column>
              <Header 
                size="big"
                as="h2"
                color="black"
                textAlign="right"
                style={{
                  display:'inline-block',
                  marginBottom: rhythm(0.5),
                }}>
                简介
              </Header>
              <p>薪典方案臺灣教育部客語羅馬字方案修改而成。</p>
              <p>本方案描述的是客家話梅縣音，其他地區的客家話會有梅縣音中不存在的韻母，例如 y 和 iai 等。</p>
              <ul>
                <li>官方頁面：<a href="https://syndict.com/hakka/tutorial/1.8.htm">客語拼音結構</a></li>
                <li>℞ 所屬配方名稱：<code>syndict/hakka</code></li>
              </ul>
            </Grid.Column>
            
            <Grid.Column>
              <Header 
                size="big"
                as="h2"
                // color="blue"
                textAlign="right"
                style={{
                  display:'inline-block',
                  marginBottom: rhythm(0.5),
                  paddingLeft: '1rem'
                }}>
                目錄
              </Header>
              <List bulleted style={{paddingLeft: '2rem'}}>
                <List.Item as={Link} to='/schema/hakka/#onset'>聲母</List.Item>
                <List.Item as={Link} to='/schema/hakka/#final'>
                  韻母
                  <List.List style={{paddingLeft: '2rem', paddingTop: '0.5rem', paddingBottom: '0.5rem'}}>
                    <List.Item>介音</List.Item>
                    <List.Item>韻腹</List.Item>
                    <List.Item>韻尾</List.Item>
                  </List.List>  
                </List.Item>
                <List.Item as={Link} to='/schema/hakka/#final_table'>韻母表</List.Item>
                <List.Item as={Link} to='/schema/hakka/#tone'>聲調</List.Item>
                <List.Item as={Link} to='/schema/hakka/#reference'>參考</List.Item>
              </List>
            </Grid.Column>
          </Grid>
        </Message>
      
        <Header dividing size="large" as="h2" id="onset" style={{ paddingTop: '5rem' }}>
          聲母
        </Header>
        <Grid columns={2} stackable>
          <Grid.Column>
            <Message info>
              <p>客拼中共有21個聲母，無清濁對立，無腭化音。</p>
            </Message>
          </Grid.Column>
          <Grid.Column>
            <Message positive>
              <Message.Header>
                音變規則
              </Message.Header>
              <p>
                <ul>
                  <li>z 和 c 均有一個齦腭音自由變體（精照合流），即 z 可讀作 <ipa>[t͡ʃ]</ipa>，c 可讀作 <ipa>[t͡ʃʰ]</ipa></li>
                </ul>
              </p>
            </Message>            
          </Grid.Column>
        </Grid>
        <Table structured celled unstackable textAlign='center' color='blue'>
          <Table.Header>
            <Table.Row textAlign='center'>
              <Table.HeaderCell></Table.HeaderCell>
              <Table.HeaderCell>脣音</Table.HeaderCell>
              <Table.HeaderCell>脣齒音</Table.HeaderCell>
              <Table.HeaderCell>齒齦音</Table.HeaderCell>
              <Table.HeaderCell>齦腭音</Table.HeaderCell>
              <Table.HeaderCell>硬腭音</Table.HeaderCell>
              <Table.HeaderCell>軟腭音</Table.HeaderCell>
              <Table.HeaderCell>喉音</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            <Table.Row>
              <Table.Cell>塞音</Table.Cell>
              <Table.Cell>b <ipa>[p]</ipa> 巴<br/>p <ipa>[pʰ]</ipa>  怕</Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell>d <ipa>[t]</ipa> 打<br/>t <ipa>[tʰ]</ipa>  他</Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell>zh <ipa>[c]</ipa> 見<br/>ch <ipa>[cʰ]</ipa> 溪</Table.Cell>
              <Table.Cell>g <ipa>[k]</ipa> 家<br/>k <ipa>[kʰ]</ipa> 卡</Table.Cell>
              <Table.Cell></Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>塞擦音</Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell>z <ipa>[t͡s]</ipa>  渣<br/>c  <ipa>[t͡sʰ]</ipa>  叉</Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
            </Table.Row>
            <Table.Row textAlign='center'>
              <Table.Cell>鼻音</Table.Cell>
              <Table.Cell>m <ipa>[m]</ipa> 媽</Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell>n <ipa>[n]</ipa> 那</Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell>nj <ipa>[ɲ]</ipa> 二</Table.Cell>
              <Table.Cell>ng  <ipa>[ŋ]</ipa> 牙</Table.Cell>
              <Table.Cell></Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>擦音</Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell>f <ipa>[f]</ipa> 花<br/>v  <ipa>[v]</ipa> 蛙</Table.Cell>
              <Table.Cell>s <ipa>[s]</ipa> 沙</Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell>sh <ipa>[ç]</ipa> 沙<br/></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell>h <ipa>[h]</ipa> 蝦</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>近音</Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>邊近音</Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell>l <ipa>[l]</ipa> 啦</Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
        <Header dividing size="big" as="h3">
          鼻音單獨成韻
        </Header>
        <Grid columns={2} stackable>
          <Grid.Column>
          <Table textAlign="center" color='teal'>
            <Table.Row>
              <Table.Cell>m <ipa>[m]</ipa> 唔</Table.Cell>
              <Table.Cell>n <ipa>[n]</ipa> 魚</Table.Cell>
            </Table.Row>
          </Table>
          </Grid.Column>
        </Grid>

        <Header dividing size="large" as="h2" id="final" style={{ paddingTop: '5rem' }}>
          韻母
        </Header>
        <Header dividing size="big" as="h3" id="medial">
          介音
        </Header>
        <Grid columns={2} stackable>
          <Grid.Column>
            <Table celled unstackable textAlign='center' color='yellow'>
              <Table.Row>
                <Table.Cell>Ø</Table.Cell>
                <Table.Cell>i <ipa>[i]</ipa></Table.Cell>
                <Table.Cell>u <ipa>[ʷ]</ipa></Table.Cell>
              </Table.Row>
            </Table>
            <Message warning>
              <Icon name='info circle'/>
              根據 Lee 2009，本頁面將客家話中合口呼處理爲聲母 gu、ku 中的原脣特徵<ipa>[ʷ]</ipa>，不同於部分學者將其視作元音 <ipa>[u]</ipa>的轉寫方式。
            </Message>
          </Grid.Column>
          <Grid.Column>
            <Message info>客家話共有兩個介音（含零介音）。</Message>
            <Message positive>
              <Message.Header>音變規則</Message.Header>
              <p>
                <ul>
                  <li>當介音 i- 拼寫爲韻母 ioe 時，的韻尾，會受韻腹 oe 影響產生圓唇化，實際音值爲<ipa>[ʏ]</ipa>。</li>
                </ul>
              </p>
            </Message>
          </Grid.Column>
        </Grid>

        <Header dividing size="big" as="h3" id="nuclei">
          韻腹
        </Header>
        <Grid columns={2} stackable>
          <Grid.Column>
            <Table celled unstackable textAlign='center' color='orange'>
              <Table.Row>
                <Table.Cell>i <ipa>[i]</ipa> 西<br/>ii<sub><allophone>開音節</allophone></sub> <ipa>[ɹ̩]</ipa> 師</Table.Cell>
                <Table.Cell></Table.Cell>
                <Table.Cell>u <ipa>[u]</ipa> 夫</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>e <ipa>[e]</ipa> 姐</Table.Cell>
                <Table.Cell>ii<sub><allophone>閉音節</allophone></sub> <ipa>[ə]</ipa> </Table.Cell>
                <Table.Cell></Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell></Table.Cell>
                <Table.Cell></Table.Cell>
                <Table.Cell>o <ipa>[ɔ]</ipa> 波</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell></Table.Cell>
                <Table.Cell>a <ipa>[a]</ipa> 花</Table.Cell>
                <Table.Cell></Table.Cell>
              </Table.Row>
            </Table>
          </Grid.Column>
          <Grid.Column>
            <Message info>
              <p>薪典拼音方案中共有7個韻腹，具體與韻尾的搭配請見下方韻母表。 </p>
            </Message>
            <Message positive>
              <Message.Header>音變規則</Message.Header>
              <p>
                <ul>
                  <li></li>
                </ul>
              </p>
            </Message>
          </Grid.Column>
        </Grid>

        <Header dividing size="big" as="h3" id="coda">
          韻尾
        </Header>
        <Grid columns={2} stackable>
          <Grid.Column>
            <Table celled definition unstackable textAlign='center' color='olive'>
              <Table.Row>
                <Table.Cell>塞音</Table.Cell>
                <Table.Cell>b <ipa>[p̚]</ipa> 溼</Table.Cell>
                <Table.Cell>d <ipa>[t̚]</ipa> 失</Table.Cell>
                <Table.Cell>g <ipa>[k̚]</ipa> 塞</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>鼻音</Table.Cell>
                <Table.Cell>m <ipa>[m]</ipa> 心</Table.Cell>
                <Table.Cell>n <ipa>[n]</ipa> 身</Table.Cell>
                <Table.Cell>ng <ipa>[ŋ]</ipa> 生</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>元音</Table.Cell>
                <Table.Cell></Table.Cell>
                <Table.Cell>i <ipa>[i]</ipa> 西</Table.Cell>
                <Table.Cell>u <ipa>[u]</ipa> 收</Table.Cell>
              </Table.Row>
            </Table>
          </Grid.Column>
          <Grid.Column>
            <Message info>
              客家話共有8個韻尾，其中三個塞音韻尾（入聲韻）均爲不除阻。
            </Message>
            <Message positive>
              <Message.Header>音變規則</Message.Header>
              <p>
                <ul>
                  <li>韻尾 -i 拼寫成 eoi 和 ui 時，會受 eo 和 u 韻腹影響產生圓唇化，即發音更接近於 <ipa>[y]</ipa>。</li>
                </ul>
              </p>
            </Message>
          </Grid.Column>
        </Grid>

        <Header dividing size="large" as="h2" id="final_table" style={{ paddingTop: '5rem' }}>
          韻母表
        </Header>
        <Table celled structured unstackable textAlign='center' color='red'>
          <Table.Header>
            <Table.Row textAlign='center'>
              <Table.HeaderCell rowSpan='2'>韻尾</Table.HeaderCell>
              <Table.HeaderCell colSpan='2' rowSpan='2'>韻腹</Table.HeaderCell>
              <Table.HeaderCell colSpan='3'>介音</Table.HeaderCell>
            </Table.Row>
            <Table.Row textAlign='center'>
              <Table.HeaderCell>Ø-</Table.HeaderCell>
              <Table.HeaderCell>i-</Table.HeaderCell>
              <Table.HeaderCell>u-</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            <Table.Row textAlign='center'>
              <Table.Cell rowSpan='6'>-Ø</Table.Cell>
              <Table.Cell>i</Table.Cell>
              <Table.Cell><ipa>[i]</ipa></Table.Cell>
              <Table.Cell>i 西</Table.Cell>
              <Table.Cell active></Table.Cell>
              <Table.Cell active></Table.Cell>
            </Table.Row>
            <Table.Row textAlign='center'>
              <Table.Cell>ii</Table.Cell>
              <Table.Cell><ipa>[ɹ̩]</ipa></Table.Cell>
              <Table.Cell>ii 師</Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
            </Table.Row>
            <Table.Row textAlign='center'>
              <Table.Cell>u</Table.Cell>
              <Table.Cell><ipa>[u]</ipa></Table.Cell>
              <Table.Cell>u 書</Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell active></Table.Cell>
            </Table.Row>
            <Table.Row textAlign='center'>
              <Table.Cell>e</Table.Cell>
              <Table.Cell><ipa>[e]</ipa></Table.Cell>
              <Table.Cell>e 驢</Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
            </Table.Row>
            <Table.Row textAlign='center'>
              <Table.Cell>o</Table.Cell>
              <Table.Cell><ipa>[ɔ]</ipa></Table.Cell>
              <Table.Cell>o 梳</Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
            </Table.Row>
            <Table.Row textAlign='center'>
              <Table.Cell>a</Table.Cell>
              <Table.Cell><ipa>[a]</ipa></Table.Cell>
              <Table.Cell>a 沙</Table.Cell>
              <Table.Cell>ia 些</Table.Cell>
              <Table.Cell>ua 瓜</Table.Cell>
            </Table.Row>
            <Table.Row textAlign='center'>
              <Table.Cell rowSpan='3'>-i</Table.Cell>
              <Table.Cell>u</Table.Cell>
              <Table.Cell><ipa>[u]</ipa></Table.Cell>
              <Table.Cell>ui 雖</Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell active></Table.Cell>
            </Table.Row>
            <Table.Row textAlign='center'>
              <Table.Cell>o</Table.Cell>
              <Table.Cell><ipa>[ɔ]</ipa></Table.Cell>
              <Table.Cell>oi 衰</Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
            </Table.Row>
            <Table.Row textAlign='center'>
              <Table.Cell>a</Table.Cell>
              <Table.Cell><ipa>[a]</ipa></Table.Cell>
              <Table.Cell>ai 曬</Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell>uai 乖</Table.Cell>
            </Table.Row>
            <Table.Row textAlign='center'>
              <Table.Cell rowSpan='3'>-u</Table.Cell>
              <Table.Cell>i</Table.Cell>
              <Table.Cell><ipa>[i]</ipa></Table.Cell>
              <Table.Cell>iu 修</Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell active></Table.Cell>
            </Table.Row>
            <Table.Row textAlign='center'>
              <Table.Cell>e</Table.Cell>
              <Table.Cell><ipa>[e]</ipa></Table.Cell>
              <Table.Cell>eu 瘦</Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
            </Table.Row>
            <Table.Row textAlign='center'>
              <Table.Cell>a</Table.Cell>
              <Table.Cell><ipa>[a]</ipa></Table.Cell>
              <Table.Cell>au 燒</Table.Cell>
              <Table.Cell>iau 消</Table.Cell>
              <Table.Cell></Table.Cell>
            </Table.Row>
            <Table.Row textAlign='center'>
              <Table.Cell rowSpan='4'>-m</Table.Cell>
              <Table.Cell>i</Table.Cell>
              <Table.Cell><ipa>[i]</ipa></Table.Cell>
              <Table.Cell>im 心</Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
            </Table.Row>
            <Table.Row textAlign='center'>
              <Table.Cell>ii</Table.Cell>
              <Table.Cell><ipa>[ə]</ipa></Table.Cell>
              <Table.Cell>iim 沈</Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
            </Table.Row>
            <Table.Row textAlign='center'>
              <Table.Cell>e</Table.Cell>
              <Table.Cell><ipa>[e]</ipa></Table.Cell>
              <Table.Cell>em 森</Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
            </Table.Row>
            <Table.Row textAlign='center'>
              <Table.Cell>a</Table.Cell>
              <Table.Cell><ipa>[a]</ipa></Table.Cell>
              <Table.Cell>am 衫</Table.Cell>
              <Table.Cell>iam 尖</Table.Cell>
              <Table.Cell></Table.Cell>
            </Table.Row>
            <Table.Row textAlign='center'>
              <Table.Cell rowSpan='6'>-n</Table.Cell>
              <Table.Cell>i</Table.Cell>
              <Table.Cell><ipa>[i]</ipa></Table.Cell>
              <Table.Cell>in 新</Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
            </Table.Row>
            <Table.Row textAlign='center'>
              <Table.Cell>u</Table.Cell>
              <Table.Cell><ipa>[u]</ipa></Table.Cell>
              <Table.Cell>un 孫</Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell active></Table.Cell>
            </Table.Row>
            <Table.Row textAlign='center'>
              <Table.Cell>ii</Table.Cell>
              <Table.Cell><ipa>[ə]</ipa></Table.Cell>
              <Table.Cell>iin 身</Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
            </Table.Row>
            <Table.Row textAlign='center'>
              <Table.Cell>e</Table.Cell>
              <Table.Cell><ipa>[e]</ipa></Table.Cell>
              <Table.Cell>en 星</Table.Cell>
              <Table.Cell>ien 先</Table.Cell>
              <Table.Cell></Table.Cell>
            </Table.Row>
            <Table.Row textAlign='center'>
              <Table.Cell>o</Table.Cell>
              <Table.Cell><ipa>[ɔ]</ipa></Table.Cell>
              <Table.Cell>on 酸</Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
            </Table.Row>
            <Table.Row textAlign='center'>
              <Table.Cell>a</Table.Cell>
              <Table.Cell><ipa>[a]</ipa></Table.Cell>
              <Table.Cell>an 山</Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
            </Table.Row>
            <Table.Row textAlign='center'>
              <Table.Cell rowSpan='3'>-ng</Table.Cell>
              <Table.Cell>u</Table.Cell>
              <Table.Cell><ipa>[u]</ipa></Table.Cell>
              <Table.Cell>ung 雙</Table.Cell>
              <Table.Cell>iung 崇</Table.Cell>
              <Table.Cell></Table.Cell>
            </Table.Row>
            <Table.Row textAlign='center'>
              <Table.Cell>o</Table.Cell>
              <Table.Cell><ipa>[ɔ]</ipa></Table.Cell>
              <Table.Cell>ong 商</Table.Cell>
              <Table.Cell>iong 箱</Table.Cell>
              <Table.Cell></Table.Cell>
            </Table.Row>
            <Table.Row textAlign='center'>
              <Table.Cell>a</Table.Cell>
              <Table.Cell><ipa>[a]</ipa></Table.Cell>
              <Table.Cell>ang 聲</Table.Cell>
              <Table.Cell>iang 腥</Table.Cell>
              <Table.Cell></Table.Cell>
            </Table.Row>
            <Table.Row textAlign='center'>
              <Table.Cell rowSpan='4'>-b</Table.Cell>
              <Table.Cell>i</Table.Cell>
              <Table.Cell><ipa>[i]</ipa></Table.Cell>
              <Table.Cell>ib 集</Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
            </Table.Row>
            <Table.Row textAlign='center'>
              <Table.Cell>ii</Table.Cell>
              <Table.Cell><ipa>[ə]</ipa></Table.Cell>
              <Table.Cell>iib 十</Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
            </Table.Row>
            <Table.Row textAlign='center'>
              <Table.Cell>e</Table.Cell>
              <Table.Cell><ipa>[e]</ipa></Table.Cell>
              <Table.Cell>eb 圾</Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
            </Table.Row>
            <Table.Row textAlign='center'>
              <Table.Cell>a</Table.Cell>
              <Table.Cell><ipa>[a]</ipa></Table.Cell>
              <Table.Cell>ab 涉</Table.Cell>
              <Table.Cell>iab 接</Table.Cell>
              <Table.Cell></Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>

        <Header dividing size="large" as="h2" id="reference">
          參考
        </Header>
        <List bulleted>
          <List.Item><ipa>https://syndict.com/hakka/tutorial/1.8.htm</ipa></List.Item>
          <List.Item><ipa>Lee, W., & Zee, E. (2009). Hakka Chinese. Journal of the International Phonetic Association, 39(1), 107-111. doi:10.1017/S0025100308003599</ipa></List.Item>
          <List.Item><ipa>客家語拼音方案使用手冊</ipa></List.Item>
        </List>
      </SchemaPageLayout>
    )
  }
}

export default Hakka