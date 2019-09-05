import React, { Component } from 'react'

import {
  Button,
  Divider,
  Grid,
  Header,
  Icon,
  Input,
  Image,
  Label,
  Menu,
  Message,
  Table
} from "semantic-ui-react";

import { rhythm } from "../../utils/grandViewTypography"
import SchemaPageLayout from '../../layouts/SchemaPageLayout'

class Wugniu_zaonhe extends Component {
  render(){
    return(
      <SchemaPageLayout
        activeItem='wugniu_zaonhe'
        >
        <Header dividing size="huge" as="h1">
          吳語（上海）
        </Header>
        <Message>
          <Header 
            size="huge"
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
            本方案全稱「上海吳語拼音輸入方案」，由吳語學堂團隊編制。本方案由吳語協會的吳語拼音方案修改而成。
          </p>
          <p>
           
          </p>
          <p>
            
          </p>
          <ul>
            <li>℞ 所屬配方名稱：<code>NGLI/rime-wugniu_zaonhe</code></li>
            <li>方案名稱：<code>wugniu_zaonhe</code></li>
          </ul>
        </Message>

        <Header dividing size="large" as="h3">
          聲母
        </Header>
        上海吳語拼音方案中共有27個聲母，有清濁送氣三路對立，有腭化音。
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
              <Table.Cell>p [p] 布幫北<br/>ph [pʰ]  怕胖劈<br/>b  [b] 步盆拔</Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell>t [t] 膽懂德<br/>th [tʰ]  透聽鐵<br/>d  [d] 地動奪</Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell>k [k] 干公夾<br/>kh  [kʰ]  開墾擴<br/>g [g] 葵共軋</Table.Cell>
              <Table.Cell></Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>塞擦音</Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell>ts [t͡s]  煮正質<br/>tsh  [t͡sʰ]  處倉出</Table.Cell>
              <Table.Cell>c [t͡ɕ]  舉精腳<br/>ch [t͡ɕʰ]  丘輕切<br/>j  [t͡ʑ]  旗群劇</Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
            </Table.Row>
            <Table.Row textAlign='center'>
              <Table.Cell>鼻音</Table.Cell>
              <Table.Cell>m [m] 美門墨</Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell>n [n] 乃能捺</Table.Cell>
              <Table.Cell>gn  [ɲ]  粘牛熱</Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell>ng  [ŋ] 捱硬額</Table.Cell>
              <Table.Cell></Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>擦音</Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell>f [f] 飛粉福<br/>v  [v] 扶奉服</Table.Cell>
              <Table.Cell>s [s] 書松色<br/>z [z] 樹從石</Table.Cell>
              <Table.Cell>sh  [ɕ]  修勛血<br/>zh [ʑ]  齊秦絕</Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell>h [h] 花荒忽<br/>gh [ɦ]  鞋移呼雨</Table.Cell>
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
              <Table.Cell>l [l] 撈領勒</Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
        <Header dividing size="large" as="h3">
          介音
        </Header>
          粵語無介音
        <Header dividing size="large" as="h3">
          韻腹
        </Header>
        <Header dividing size="large" as="h3">
          韻尾
        </Header>
        <Header dividing size="large" as="h3">
          鼻音單獨成韻
        </Header>
        <Header dividing size="large" as="h3">
          聲調
        </Header>
        <Header dividing size="large" as="h2">
          參考資料
        </Header>
        https://www.wugniu.com/yinxi/shanghai
        https://github.com/NGLI/rime-wugniu_zaonhe
      </SchemaPageLayout>
    )
  }
}

export default Wugniu_zaonhe