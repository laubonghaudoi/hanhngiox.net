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

import { rhythm } from "../../utils/grandViewTypography"
import { Link } from "gatsby-plugin-transition-link";
import SchemaPageLayout from '../../layouts/SchemaPageLayout'

class Langjin extends Component {
  render(){
    return(
      <SchemaPageLayout
        activeItem='langjin'
        >
        <Header dividing size="huge" as="h1">
          南京官話拼音方案
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
              <p>南京官話拼音方案以老派南京音爲基礎，由 <a href="mailto:uli_loewi@hotmail.com">uli_loewi</a> 基於中華人民共和國教育部漢語拼音方案修改而成。</p>
              <p>相比於《漢語拼音》，南京官話拼音方案更遵循一音對應一符號原則，不縮寫韻母或採用y、w作聲母，以避免混淆。</p>
              <ul>
                <li>官方頁面：<a href="https://uliloewi.github.io/LangJinPinIn/PinInFangAng">南京官話拼音方案</a></li>
                <li>℞ 所屬配方名稱：<code>uliloewi/lang2jin1</code></li>
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
                <List.Item as={Link} to='/schema/langjin/#onset'>聲母</List.Item>
                <List.Item as={Link} to='/schema/langjin/#final'>
                  韻母
                  <List.List style={{paddingLeft: '2rem', paddingTop: '0.5rem', paddingBottom: '0.5rem'}}>
                    <List.Item>介音</List.Item>
                    <List.Item>韻腹</List.Item>
                    <List.Item>韻尾</List.Item>
                  </List.List>  
                </List.Item>
                <List.Item as={Link} to='/schema/langjin/#final_table'>韻母表</List.Item>
                <List.Item as={Link} to='/schema/langjin/#tone'>聲調</List.Item>
                <List.Item as={Link} to='/schema/langjin/#reference'>參考</List.Item>
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
              <p>南京官話中共有21個聲母，無清濁對立。</p>
            </Message>
          </Grid.Column>
          <Grid.Column>
            <Message warning>
              <Icon name='info circle'/>符號 r 既可作聲母 <ipa>[ʐ]</ipa>，也可以作韻母 <ipa>[ʐ]</ipa>，詳見下方韻母一節。
            </Message>            
          </Grid.Column>
        </Grid>
        
        <Table celled definition unstackable textAlign='center' color='blue'>
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
              <Table.Cell>b <ipa>[p]</ipa> 把<br/>p <ipa>[pʰ]</ipa>  怕</Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell>d <ipa>[t]</ipa> 大<br/>t <ipa>[tʰ]</ipa>  他</Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell>g <ipa>[k]</ipa> 嘎<br/>k  <ipa>[kʰ]</ipa>  卡</Table.Cell>
              <Table.Cell></Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>塞擦音</Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell>z <ipa>[t͡s]</ipa>  砸<br/>c  <ipa>[t͡sʰ]</ipa>  擦</Table.Cell>
              <Table.Cell>zh <ipa>[ʈ͡ʂ]</ipa>  渣<br/>ch  <ipa>[ʈ͡ʂʰ]</ipa>  差</Table.Cell>
              <Table.Cell>j <ipa>[t͡ɕ]</ipa> 見<br/>q <ipa>[t͡ɕʰ]</ipa> 溪</Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
            </Table.Row>
            <Table.Row textAlign='center'>
              <Table.Cell>鼻音</Table.Cell>
              <Table.Cell>m <ipa>[m]</ipa> 麻</Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell>n <ipa>[n]</ipa> 那</Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>擦音</Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell>f <ipa>[f]</ipa> 法</Table.Cell>
              <Table.Cell>s <ipa>[s]</ipa> 撒</Table.Cell>
              <Table.Cell>sh <ipa>[ʂ]</ipa> 沙<br/>r <ipa>[ʐ]</ipa> 日</Table.Cell>
              <Table.Cell>x <ipa>[ɕ]</ipa> 曉</Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell>h <ipa>[h]</ipa> 哈</Table.Cell>
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
              <Table.Cell>l <ipa>[l]</ipa> 拉</Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>

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
                <Table.Cell>i <ipa>[j]</ipa></Table.Cell>
                <Table.Cell>u <ipa>[w]</ipa></Table.Cell>
                <Table.Cell>ü <ipa>[ɥ]</ipa></Table.Cell>
              </Table.Row>
            </Table>
            <Message warning><Icon name='info circle'/>本頁面遵循端木三 (2007) 對普通話介音的處理方法，即將南京話介音處理爲半元音<ipa>[j] [w] [ɥ]</ipa>，不同於部分學者將其視作元音<ipa>[i] [u] [y]</ipa>的處理方法。</Message>
          </Grid.Column>
          <Grid.Column>
            <Message info>南京官話拼音方案有4種介音（含零介音），即開合齊撮四呼。</Message>
          </Grid.Column>
        </Grid>

        <Header dividing size="big" as="h3" id="nuclei">
          韻腹
        </Header>
        <Grid columns={2} stackable>
          <Grid.Column>
            <Table celled unstackable textAlign='center' color='orange'>
              <Table.Row>
                <Table.Cell>i <ipa>[i]</ipa> 衣<br/>in <ipa>[ĩ]</ipa> 音<br/>ü <ipa>[y]</ipa> 雨<br/>y <ipa>[z̩]</ipa> 思<sup><Icon name='info circle'/></sup></Table.Cell>
                <Table.Cell>r <ipa>[ʐ̩]</ipa> 日<sup><Icon name='info circle'/></sup></Table.Cell>
                <Table.Cell>u <ipa>[u]</ipa> 污</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>e <ipa>[e]</ipa> 車<br/>än <ipa>[ẽ]</ipa> 限</Table.Cell>
                <Table.Cell>en <ipa>[ə̃]</ipa> 恩<br/>er <ipa>[ɚ]</ipa> 而</Table.Cell>
                <Table.Cell>o <ipa>[o]</ipa> 我<br/>ong <ipa>[õ]</ipa> 嗡</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>ä <ipa>[ɛ]</ipa> 哎</Table.Cell>
                <Table.Cell></Table.Cell>
                <Table.Cell>ao <ipa>[ɔ]</ipa> 奧</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell></Table.Cell>
                <Table.Cell>a <ipa>[a]</ipa> 啊<br/>ang <ipa>[ã]</ipa> 安</Table.Cell>
                <Table.Cell></Table.Cell>
              </Table.Row>
            </Table>
          </Grid.Column>
          <Grid.Column>
            <Message info>
              南京官話中共有16個韻腹，其中符號 r 亦可代表聲母 <ipa>[ʐ̩]</ipa>。
            </Message>
            <Message warning><Icon name='info circle'/>本頁面遵循端木三 (2007) 對韻腹 y 和 r 的轉寫方式，即將「思」字的韻腹轉寫爲音節化輔音 <ipa>[z̩]</ipa> 和 <ipa>[ʐ̩]</ipa>，不同於部分學者將其視作元音 <ipa>[ɿ]</ipa> 和 <ipa>[ʅ]</ipa> 的寫法。</Message>
            <Message positive>
              <Message.Header>音變規則</Message.Header>
              <p>
                <ul>
                  <li>韻腹 o 在拼寫成 ou時，發音變爲 <ipa>[ə]</ipa></li>
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
              <Table.Cell>元音</Table.Cell>
              <Table.Cell>i <ipa>[i]</ipa> 西</Table.Cell>
              <Table.Cell>u <ipa>[ɯ]</ipa> 收</Table.Cell>
            </Table.Row>
          </Table>
          </Grid.Column>
          <Grid.Column>
            <Message info>
              南京官話共有2個韻尾，無塞音韻尾（入聲韻已演化爲一個調類），無鼻音韻尾（鼻音韻尾已演化爲鼻化元音）。
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
              <Table.HeaderCell colSpan='4'>介音</Table.HeaderCell>
            </Table.Row>
            <Table.Row textAlign='center'>
              <Table.HeaderCell>Ø-</Table.HeaderCell>
              <Table.HeaderCell>i-</Table.HeaderCell>
              <Table.HeaderCell>u-</Table.HeaderCell>
              <Table.HeaderCell>ü-</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            <Table.Row textAlign='center'>
              <Table.Cell rowSpan='16'>-Ø</Table.Cell>
              <Table.Cell>i</Table.Cell>
              <Table.Cell><ipa>[i]</ipa></Table.Cell>
              <Table.Cell>i 衣</Table.Cell>
              <Table.Cell active></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
            </Table.Row>
            <Table.Row textAlign='center'>
              <Table.Cell>in</Table.Cell>
              <Table.Cell><ipa>[ĩ]</ipa></Table.Cell>
              <Table.Cell>in 音</Table.Cell>
              <Table.Cell active></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell>üin 云</Table.Cell>
            </Table.Row>
            <Table.Row textAlign='center'>
              <Table.Cell>ü</Table.Cell>
              <Table.Cell><ipa>[y]</ipa></Table.Cell>
              <Table.Cell>ü 雨</Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell active></Table.Cell>
            </Table.Row>
            <Table.Row textAlign='center'>
              <Table.Cell>y</Table.Cell>
              <Table.Cell><ipa>[z̩]</ipa></Table.Cell>
              <Table.Cell>y 思</Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
            </Table.Row>
            <Table.Row textAlign='center'>
              <Table.Cell>r</Table.Cell>
              <Table.Cell><ipa>[ʐ̩]</ipa></Table.Cell>
              <Table.Cell>r 日</Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
            </Table.Row>
            <Table.Row textAlign='center'>
              <Table.Cell>u</Table.Cell>
              <Table.Cell><ipa>[u]</ipa></Table.Cell>
              <Table.Cell>u 污</Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell active></Table.Cell>
              <Table.Cell></Table.Cell>
            </Table.Row>
            <Table.Row textAlign='center'>
              <Table.Cell>e</Table.Cell>
              <Table.Cell><ipa>[e]</ipa></Table.Cell>
              <Table.Cell>e 車</Table.Cell>
              <Table.Cell>ie 也</Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell>üe 月</Table.Cell>
            </Table.Row>
            <Table.Row textAlign='center'>
              <Table.Cell>än</Table.Cell>
              <Table.Cell><ipa>[ẽ]</ipa></Table.Cell>
              <Table.Cell>än 限</Table.Cell>
              <Table.Cell>iän 淹</Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
            </Table.Row>
            <Table.Row textAlign='center'>
              <Table.Cell>en</Table.Cell>
              <Table.Cell><ipa>[ə̃]</ipa></Table.Cell>
              <Table.Cell>en 恩</Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell>uen 文</Table.Cell>
              <Table.Cell></Table.Cell>
            </Table.Row>
            <Table.Row textAlign='center'>
              <Table.Cell>er</Table.Cell>
              <Table.Cell><ipa>[ɚ]</ipa></Table.Cell>
              <Table.Cell>er 而</Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
            </Table.Row>
            <Table.Row textAlign='center'>
              <Table.Cell>o</Table.Cell>
              <Table.Cell><ipa>[o]</ipa></Table.Cell>
              <Table.Cell>o 我</Table.Cell>
              <Table.Cell>io 岳</Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
            </Table.Row>
            <Table.Row textAlign='center'>
              <Table.Cell>ong</Table.Cell>
              <Table.Cell><ipa>[õ]</ipa></Table.Cell>
              <Table.Cell>ong 嗡</Table.Cell>
              <Table.Cell>iong 容</Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
            </Table.Row>
            <Table.Row textAlign='center'>
              <Table.Cell>ä</Table.Cell>
              <Table.Cell><ipa>[ɛ]</ipa></Table.Cell>
              <Table.Cell>ä 哎</Table.Cell>
              <Table.Cell>iä 崖</Table.Cell>
              <Table.Cell>uä 外</Table.Cell>
              <Table.Cell>üän 冤</Table.Cell>
            </Table.Row>
            <Table.Row textAlign='center'>
              <Table.Cell>ao </Table.Cell>
              <Table.Cell><ipa>[ɔ]</ipa></Table.Cell>
              <Table.Cell>ao 奧</Table.Cell>
              <Table.Cell>iao 腰</Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
            </Table.Row>
            <Table.Row textAlign='center'>
              <Table.Cell>a</Table.Cell>
              <Table.Cell><ipa>[a]</ipa></Table.Cell>
              <Table.Cell>a 啊</Table.Cell>
              <Table.Cell>ia 丫</Table.Cell>
              <Table.Cell>ua 哇</Table.Cell>
              <Table.Cell></Table.Cell>
            </Table.Row>
            <Table.Row textAlign='center'>
              <Table.Cell>ang</Table.Cell>
              <Table.Cell><ipa>[ã]</ipa></Table.Cell>
              <Table.Cell>ang 安</Table.Cell>
              <Table.Cell>iang 央</Table.Cell>
              <Table.Cell>uang 完</Table.Cell>
              <Table.Cell></Table.Cell>
            </Table.Row>
            <Table.Row textAlign='center'>
              <Table.Cell>-i</Table.Cell>
              <Table.Cell>e</Table.Cell>
              <Table.Cell><ipa>[ə]</ipa></Table.Cell>
              <Table.Cell>ei 眉</Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell>uei 威</Table.Cell>
              <Table.Cell></Table.Cell>
            </Table.Row>
            <Table.Row textAlign='center'>
              <Table.Cell>-u</Table.Cell>
              <Table.Cell>o</Table.Cell>
              <Table.Cell><ipa>[ə]</ipa></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell>iou 由</Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>

        <Header dividing size="large" as="h3" id="tone" style={{ paddingTop: '5rem' }}>
          聲調
        </Header>
        <Grid columns={2} stackable>
          <Grid.Column>
            <Table definition celled structured textAlign="center" color='violet'>
              <Table.Header>
                <Table.Row textAlign='center'>
                  <Table.HeaderCell />
                  <Table.HeaderCell>平</Table.HeaderCell>
                  <Table.HeaderCell>上</Table.HeaderCell>
                  <Table.HeaderCell>去</Table.HeaderCell>
                  <Table.HeaderCell>入</Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Row>
                <Table.Cell>陰</Table.Cell>
                <Table.Cell>1 <ipa>[˧˩]</ipa> 衣</Table.Cell>
                <Table.Cell rowSpan='2'>3 <ipa>[˨˩˨]</ipa> 已</Table.Cell>
                <Table.Cell rowSpan='2'>4 <ipa>[˦˦]</ipa> 意</Table.Cell>
                <Table.Cell rowSpan='2'>5 <ipa>[˥]</ipa> 一</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>陽</Table.Cell>
                <Table.Cell>2 <ipa>[˩˧]</ipa> 移</Table.Cell>
              </Table.Row>
            </Table>
          </Grid.Column>
          <Grid.Column>
            <Message info>南京官話拼音共有5個聲調，其中入聲已演化爲一個鯛類。</Message>
          </Grid.Column>
        </Grid>

        <Header dividing size="large" as="h2" id="reference">
          參考
        </Header>
        <List bulleted>
          <List.Item><ipa>https://www.lshk.org/langjin</ipa></List.Item>
          <List.Item><ipa>Duanmu, San. 2007. <i>The phonology of standard Chinese</i>. OUP Oxford.</ipa></List.Item>
        </List>
        
      </SchemaPageLayout>
    )
  }
}

export default Langjin