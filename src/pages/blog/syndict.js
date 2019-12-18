import React from "react"
import { css } from "@emotion/core"
import { useStaticQuery, graphql } from "gatsby"
import { 
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Image,
  Icon,
  List,
  Message,
  Segment
} from "semantic-ui-react"
import Link from 'gatsby-plugin-transition-link'
import { rhythm } from "../../utils/grandViewTypography"
import BlogPageLayout from "../../layouts/BlogPageLayout";

export default () => (
  <BlogPageLayout>
    <Header as="h1" size="massive">
      <Header.Content>
        關於薪典
      </Header.Content>
      <Header.Subheader>
        作者 laubonghaudoi
      </Header.Subheader>
    </Header>
    <Divider/>
    <Message>
      本文原載於薪典官網，地址 <a href="https://syndict.com/about.htm">syndict.com/about.htm</a>
    </Message>
    <Header as="h2" size="large">
        創立時間
    </Header>
    <p>SYNDICT 係 Synchronic Dictionary（共時辭典）个合成詞，由熱心客語傳承个網友共建於 2008 年 5 月 4 日，至今已逾十一年，有可能係全世界第一隻以客語作為標準功能語言个網站。</p>
    <p>為展示各地客語特色，並在一定程度上縮小邇兜差別，方便全球客家人溝通，SYNDICT 採用開放資源获取个方式，由網友提交詞條信息、並經過公開討論之後，再正式發佈在網頁上。在過訖个歲月當中，已收錄矣梅縣、惠陽、五華、松口、英德等大陸地區个客語單字語音近 3 萬條，並收集矣大量日用詞彙，其中單淨見於客語、毋見於普通話个詞彙既達 10000 條以上，超過矣目前市面上大部分个紙版客語辭典。隨等緊來緊多个熱心網友參與本項目，邇兜數字還在持續增加中。</p>
    <Header as="h2" size="large">
        我等个目標
    </Header>
    <p>我等个目標係團結全球各地个客家人，建立最廣泛个客語統一戰綫。</p>
    <p>隨著各地客語資料个增長，我等相信，定著可以尋到一種口音，能使得 90% 以上个客家人聼懂 90% 以上。在諸地口音个基礎上，復興客語，將其永久流傳下去！</p>
    <Header as="h2" size="large">
        今下做緊个事情……
    </Header>
    <p>我等正在收集客家話詞彙，製作客語通用教材，開發客語輸入法，並致力於客語文藝成長計劃，包括文學、漫畫、音樂、影視傳媒等等。</p>
    <p>係話爾對 SYNDICT 項目感興趣，做得隨時用電郵聯係我等：info#syndict.com （將其中「#」號改爲「@」。）</p>
    <p>還過，也歡迎關注 SYNDICT 个新浪微博：<a href="http://weibo.com/u/2722108034">http://weibo.com/u/2722108034</a>。</p>
    <Header as="h2" size="large">
        捐助薪典
    </Header>
    <p>係話汝相挺薪典項目，做得用微信（WeChat）掃描下背个二維碼來捐助我等，承蒙。</p>
    <Image src='/syndict.jpg'/>
  </BlogPageLayout>
)