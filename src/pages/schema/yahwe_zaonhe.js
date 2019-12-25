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

import { Link } from 'gatsby';
import { rhythm } from "../../utils/grandViewTypography"
import SchemaPageLayout from '../../layouts/SchemaPageLayout'

class Yahwe_zaonhe extends Component {
  render(){
    return(
      <SchemaPageLayout
        activeItem='yahwe_zaonhe'
        >
        <Header dividing size="huge" as="h1">
          吳語協會式上海話拼音方案
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
              <p>
                吳語協會式上海話拼音方案是吳語協會制定的吳語拼音方案，以中派上海音爲標準，區分尖團.
              </p>
              <ul>
                <li>官方頁面：<a href="http://wu-chinese.com/romanization/shanghai.html">上海話拼音方案</a></li>
                <li>℞ 所屬配方名：<code>edward-martyr/rime-yahwe_zaonhe</code></li>
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
                <List.Item as={Link} to='/schema/yahwe_zaonhe/#onset'>聲母</List.Item>
                <List.Item as={Link} to='/schema/yahwe_zaonhe/#final'>
                  韻母
                  <List.List style={{paddingLeft: '2rem', paddingTop: '0.5rem', paddingBottom: '0.5rem'}}>
                    <List.Item>介音</List.Item>
                    <List.Item>韻腹</List.Item>
                    <List.Item>韻尾</List.Item>
                  </List.List>  
                </List.Item>
                <List.Item as={Link} to='/schema/yahwe_zaonhe/#final_table'>韻母表</List.Item>
                <List.Item as={Link} to='/schema/yahwe_zaonhe/#tone'>聲調</List.Item>
                <List.Item as={Link} to='/schema/yahwe_zaonhe/#reference'>參考</List.Item>
              </List>
            </Grid.Column>
          </Grid>
        </Message>

        <Header dividing size="large" as="h3" id='onset' style={{ paddingTop: '5rem' }}>
          聲母
        </Header>
        <Message info>
          上海話中共有27個聲母（含零聲母「'」），有清濁送氣三路對立，有腭化音。
        </Message>
        <Table celled definition unstackable textAlign='center' color='blue'>
          <Table.Header>
            <Table.Row textAlign='center'>
              <Table.HeaderCell></Table.HeaderCell>
              <Table.HeaderCell>脣音</Table.HeaderCell>
              <Table.HeaderCell>脣齒音</Table.HeaderCell>
              <Table.HeaderCell>齒齦音</Table.HeaderCell>
              <Table.HeaderCell>齦顎音</Table.HeaderCell>
              <Table.HeaderCell>硬齶音</Table.HeaderCell>
              <Table.HeaderCell>軟齶音</Table.HeaderCell>
              <Table.HeaderCell>喉音</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            <Table.Row>
              <Table.Cell>塞音</Table.Cell>
              <Table.Cell>p <ipa>[p]</ipa> 幫<br/>ph <ipa>[pʰ]</ipa>  滂<br/>b <ipa>[b]</ipa> 並</Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell>t <ipa>[t]</ipa> 端<br/>th <ipa>[tʰ]</ipa>  透<br/>d <ipa>[d]</ipa> 定</Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell>k <ipa>[k]</ipa> 光<br/>kh  <ipa>[kʰ]</ipa>  框<br/>g <ipa>[g]</ipa> 狂</Table.Cell>
              <Table.Cell>' <ipa>[ʔ]</ipa> 影</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>塞擦音</Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell>ts <ipa>[t͡s]</ipa>  早<br/>tsh  <ipa>[t͡sʰ]</ipa>  草</Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell>c <ipa>[t͡ɕ]</ipa> 見<br/>ch <ipa>[t͡ɕʰ]</ipa> 溪<br/>j <ipa>[d͡ʑ]</ipa> 羣</Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
            </Table.Row>
            <Table.Row textAlign='center'>
              <Table.Cell>鼻音</Table.Cell>
              <Table.Cell>m <ipa>[m]</ipa> 媽</Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell>n <ipa>[n]</ipa> 那</Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell>ny <ipa>[ɲ]</ipa> 拈</Table.Cell>
              <Table.Cell>ng  <ipa>[ŋ]</ipa> 牙</Table.Cell>
              <Table.Cell></Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>擦音</Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell>f <ipa>[f]</ipa> 敷<br/>v <ipa>[v]</ipa> 奉</Table.Cell>
              <Table.Cell>s <ipa>[s]</ipa> 燒<br/>z <ipa>[z]</ipa> 曹</Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell>sh <ipa>[ɕ]</ipa> 曉</Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell>h <ipa>[h]</ipa> 好<br/>gh <ipa>[ɦ]</ipa> 匣</Table.Cell>
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
        
        <Header dividing size="large" as="h2" id="final" style={{ paddingTop: '5rem' }}>
          韻母
        </Header>
        <Header dividing size="big" as="h3" id="medial">
          介音
        </Header>


        <Header dividing size="large" as="h2" id="reference">
          參考
        </Header>
        <List bulleted>
          <List.Item><ipa>http://wu-chinese.com/romanization/shanghai.html</ipa></List.Item>
          <List.Item><ipa>Chen, Y., & Gussenhoven, C. (2015). Shanghai Chinese. <i>Journal of the International Phonetic Association,</i> 45(3), 321-337. doi:10.1017/S0025100315000043</ipa></List.Item>
        </List>
      </SchemaPageLayout>
    )
  }
}

export default Yahwe_zaonhe