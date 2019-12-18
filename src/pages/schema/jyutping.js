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
  Message,
  Menu,
  Table
} from "semantic-ui-react";

import { rhythm } from "../../utils/grandViewTypography"
import SchemaPageLayout from '../../layouts/SchemaPageLayout'

class Jyutping extends Component {
  render(){
    return(
      <SchemaPageLayout
        activeItem='jyutping'
        >
        <Header dividing size="huge" as="h1">
          粤拼
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
            粤拼全稱「香港語言學學會粵語拼音方案」，亦稱LSHK粵拼。是香港語言學學會於1993年定案的粵語拼音方案。其特點是完全使用ASCII字符，用數字表示聲調，設計科學合理。是目前最通用的粵語拼音方案。
          </p>
          <p>
           
          </p>
          <p>
            
          </p>
          <ul>
            <li>官方頁面：<a href="https://www.lshk.org/jyutping">Jyutping 粵拼 | lshk</a></li>
            <li>℞ 所屬配方名稱：
              <ul>
                <li>無聲調版：<code>rime/rime-jyutping</code></li>
                <li>顯示聲調及IPA版：<code>rime/rime-cantonese</code></li>
              </ul>
            </li>
          </ul>
        </Message>

        <Header dividing size="large" as="h3">
          聲母
        </Header>
        粵拼中共有19個聲母，無清濁對立，無腭化音。
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
              <Table.Cell>b [p] 巴<br/>p [pʰ]  怕</Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell>d [t] 打<br/>t [tʰ]  他</Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell>g [k] 家<br/>k  [kʰ]  卡<br/>gw [kʷ] 瓜<br/>kw  [kʷ]  夸</Table.Cell>
              <Table.Cell></Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>塞擦音</Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell>z [t͡s]  渣<br/>c  [t͡sʰ]  叉</Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
            </Table.Row>
            <Table.Row textAlign='center'>
              <Table.Cell>鼻音</Table.Cell>
              <Table.Cell>m [m] 媽</Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell>n [n] 那</Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell>ng  [ŋ] 牙</Table.Cell>
              <Table.Cell></Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>擦音</Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell>f [f] 花</Table.Cell>
              <Table.Cell>s [s] 沙</Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell>h [h] 蝦</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>近音</Table.Cell>
              <Table.Cell>w [w] 蛙</Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell>j [j] 也</Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>邊近音</Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell>l [l] 啦</Table.Cell>
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
        <Table celled unstackable textAlign='center'>
          <Table.Row>
            <Table.Cell>i [i] 詩<br/>yu [y] 書</Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell>u [u] 夫</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>e [e] 姐<br/>eo [ø] </Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell></Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>oe [œ]</Table.Cell>
            <Table.Cell>a [ɐ] 不</Table.Cell>
            <Table.Cell>o [ɔ] 波</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell></Table.Cell>
            <Table.Cell>aa [a] 花</Table.Cell>
            <Table.Cell></Table.Cell>
          </Table.Row>
        </Table>
        <Header dividing size="large" as="h3">
          韻尾
        </Header>
        <Table celled definition unstackable textAlign='center'>
          <Table.Row>
            <Table.Cell>塞音（入聲）</Table.Cell>
            <Table.Cell>p [p̚]</Table.Cell>
            <Table.Cell>t [t̚]</Table.Cell>
            <Table.Cell>k [k̚]</Table.Cell>
          </Table.Row>
          <Table.Row>
          <Table.Cell>鼻音</Table.Cell>
            <Table.Cell>m [m]</Table.Cell>
            <Table.Cell>n [n]</Table.Cell>
            <Table.Cell>ng [ŋ]</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>元音</Table.Cell>
            <Table.Cell>i [i]</Table.Cell>
            <Table.Cell>u [u]</Table.Cell>
            <Table.Cell></Table.Cell>
          </Table.Row>
        </Table>
        <Header dividing size="large" as="h3">
          鼻音單獨成韻
        </Header>
        <Table textAlign="center">
          <Table.Row>
            <Table.Cell>m [m] 唔</Table.Cell>
            <Table.Cell>ng [ŋ] 吳</Table.Cell>
          </Table.Row>
        </Table>
        <Header dividing size="large" as="h3">
          聲調
        </Header>
        <Table textAlign="center">
          <Table.Row>
            <Table.Cell>1 陰平 [˥˥]</Table.Cell>
            <Table.Cell>2 陰上 [˧˥]</Table.Cell>
            <Table.Cell>3 陰去 [˧˧]</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>4 陽平 [˨˩]</Table.Cell>
            <Table.Cell>5 陽上 [˩˧]</Table.Cell>
            <Table.Cell>6 陽去 [˨˨]</Table.Cell>
          </Table.Row>
        </Table>
        <Header dividing size="large" as="h2">
          參考資料
        </Header>
        https://www.lshk.org/jyutping
      </SchemaPageLayout>
    )
  }
}

export default Jyutping