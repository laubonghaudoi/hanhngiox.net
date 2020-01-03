import React, { Component } from 'react'

import {
  Card,
  Divider,
  Grid,
  Header,
  Image,
  Message,
  List
} from "semantic-ui-react";
import SchemaPageLayout from '../layouts/SchemaPageLayout'

class SchemaPage extends Component {
  state = {
    dropdownMenuStyle: {
      display: "none"
    }
  };

  render() {
    return (
      <SchemaPageLayout>
        <Grid padded>
          <Grid.Row>
            <Header dividing size="huge" as="h1">
              拼音方案一覽
            </Header>
          </Grid.Row>
          <Grid.Row stretched columns={3}>
            <Grid.Column>
              <Card
                href='/schema/jyutping'
              >
                {/* <Image src='/card/jyutping.png'/> */}
                <Card.Content>
                  <Card.Header>LSHK粵拼</Card.Header>
                  <Card.Meta>香港語言學學會</Card.Meta>
                  <Card.Description>
                    粵語拼音方案
                  </Card.Description>
                </Card.Content>
              </Card>
            </Grid.Column>
            <Grid.Column>
              <Card
                href='schema/langjin'
              >
                {/* <Image src='/card/lower_yangtze_mandarin.png'/> */}
                <Card.Content>
                  <Card.Header>南京官話拼音方案</Card.Header>
                  <Card.Meta>LSHK</Card.Meta>
                  <Card.Description>
                    香港語言學學會粵語拼音方案
                </Card.Description>
                </Card.Content>
              </Card>
            </Grid.Column>
            <Grid.Column>
              <Card
                href='schema/yahwe_zaonhe'
              >
                {/* <Image src='/card/lower_yangtze_mandarin.png'/> */}
                <Card.Content>
                  <Card.Header>吳語協會式上海話拼音</Card.Header>
                  <Card.Meta>吳語協會</Card.Meta>
                  <Card.Description>
                    吳協式上海言話
                </Card.Description>
                </Card.Content>
              </Card>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <Card
                href='schema/hakka'
              >
                {/* <Image src='/card/lower_yangtze_mandarin.png'/> */}
                <Card.Content>
                  <Card.Header>臺灣教育部客家話拼音方案</Card.Header>
                  <Card.Meta>LSHK</Card.Meta>
                  <Card.Description>
                    香港語言學學會粵語拼音方案
                </Card.Description>
                </Card.Content>
              </Card>
            </Grid.Column>
          </Grid.Row>
          <Divider section hidden />
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
              <List.Item>You, Rujie, Nairong Qian & Zhengxia Gao. 1980. Lun Putonghua de yinwei xitong [On the
phonemic system of Standard Chinese]. Zhongguo Yuwen 1980.5 (158): 328-334.</List.Item>
              <List.Item>Hashimoto, M. (1970). Notes on Mandarin phonology. Jakobson, Roman; Kawamoto, Shigeo. Studies in General and Oriental Linguistics. Tokyo: TEC, 207-220.</List.Item>
            </List>
          </Message>
        </Grid>
      </SchemaPageLayout>
    )
  }
}

export default SchemaPage;
