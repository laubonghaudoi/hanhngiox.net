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
              <p>
                薪典方案以基於梅縣客家話，由臺灣教育部客語羅馬字方案修改而成。
              </p>
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
              <Table.Cell>g <ipa>[k]</ipa> 家<br/>k  <ipa>[kʰ]</ipa>  卡</Table.Cell>
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
              <Table.Cell>f <ipa>[f]</ipa> 花<br/>v  <ipa>[v]</ipa>  </Table.Cell>
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
              <Table.Cell>r <ipa>[j]</ipa></Table.Cell>
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
              <Table.Cell>ng <ipa>[ŋ]</ipa> 吳</Table.Cell>
            </Table.Row>
          </Table>
          </Grid.Column>
        </Grid>

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