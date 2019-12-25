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
  Table,
  Message,
  List
} from "semantic-ui-react";
// import '../css/schema.css'
import { Link } from "gatsby";
import SchemaPageLayout from '../layouts/SchemaPageLayout'

class SchemaPage extends Component {
  state = {
    dropdownMenuStyle: {
      display: "none"
    }
  };

  render(){
    return (
      <SchemaPageLayout>
        <Grid padded>
          <Grid.Row>
            <Header dividing size="huge" as="h1">
              拼音方案一覽
            </Header>
          </Grid.Row>
          <Message info>
            <Message.Header>拼音與音位</Message.Header>
            <List bulleted>
              <List.Item>拼音系統在一定程度上是該語言的音位轉寫，即「一個符號對應一個音位」，但這並不恆成立。當下大部分漢語方言仍缺少全面的音系研究，即使是普通話，學界對於其元音音位數量也尚未有廣泛共識（學界主流觀點中，普通話的元音音位有2-5個不等）。</List.Item>
              <List.Item>因此，「一個符號對應一個音位」的理想效果並不總能實現，不可避免會出現「一個符號代表多個音位」和「多個符號代表同一個音位」的情況。</List.Item>
              <List.Item>例如根據橋本万太郎的音位分析，普通話中僅有中、低兩個元音音位，那麼《漢語拼音》中的兩個符號 e 和 o 就都對應同一個「中音位」，此時它們更接近於音值轉寫而非音位轉寫，此爲「多個符號代表同一個音位」。而端木三系統將普通話介音處理爲半元音 j- w- ，那麼《漢語拼音》中的符號 i 就同時代表了元音音位 i 和介音音位 j- ，符號 u 同時代表了元音音位 u 和介音音位 w-，此爲「一個符號代表多個音位」。</List.Item>
              <List.Item>因此，爲避免混淆，本站在列出聲母、介音、韻腹、韻尾表時，表格內數據<strong>均指音值而非音位</strong>，表格後會補充介紹音變規則，即該拼音符號在不同環境下的對應音值。</List.Item>
              <List.Item>當不同文獻的數據有所衝突時，一般採用歷時上<strong>偏保守</strong>（更老派，排除外來借詞）的描述轉寫。</List.Item>
              <List.Item>若有任何意見或疑問，歡迎<a href="mailto:laubonghaudoi@icloud.com">郵件反饋</a>。</List.Item>
            </List>
            <Message.Header>邊緣音節</Message.Header>
            <List bulleted>
              <List.Item>每一門漢語都不可避免有一些邊緣音節和罕見音，例如普通話中的 fai 和 duang </List.Item>
              
              <List.Item>Hashimoto, M. (1970). Notes on Mandarin phonology. Jakobson, Roman; Kawamoto, Shigeo. Studies in General and Oriental Linguistics. Tokyo: TEC, 207-220.</List.Item>
            </List>
          </Message>
          <Grid.Row textAlign="center">
            <Grid.Column mobile={8} tablet={4} computer={4}>
              <Label basic size="large">
                Jyutping
              </Label>
              <p>粵拼</p>
            </Grid.Column>
          </Grid.Row>
          <Divider section hidden />
        </Grid>
      </SchemaPageLayout>
    )
  }
}

export default SchemaPage;
