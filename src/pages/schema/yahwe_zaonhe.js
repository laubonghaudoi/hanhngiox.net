import React, { Component } from 'react'

import {
  Header,
  Message,
  Table
} from "semantic-ui-react";

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
        <Message>
          <Header 
            size="big"
            as="h1"
            color="blue"
            textAlign="right"
            style={{
              display:'inline-block',
              marginBottom: rhythm(0.5),
            }}>
            简介
          </Header>
          <p>
            吳語協會式上海話拼音方案是吳語協會制定的吳語拼音方案，以中派上海音爲標準，區分尖團
          </p>
          <p>
           
          </p>
          <p>
            
          </p>
          <ul>
            <li>官方頁面：<a href="http://wu-chinese.com/romanization/shanghai.html">上海話拼音方案</a></li>
            <li>℞ 所屬配方名稱：<code>edward-martyr/rime-yahwe_zaonhe</code></li>
          </ul>
        </Message>

        <Header dividing size="large" as="h3">
          聲母
        </Header>
        上海話中共有27個聲母（含零聲母「'」），有清濁送氣三路對立，有腭化音。
        <Table celled definition unstackable textAlign='center'>
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
        
      </SchemaPageLayout>
    )
  }
}

export default Yahwe_zaonhe