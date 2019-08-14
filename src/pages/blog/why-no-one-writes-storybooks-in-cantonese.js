import React from "react"
import { 
  Card,
  Divider,
  Header,
  Message} from "semantic-ui-react"
import BlogPageLayout from "../../layouts/BlogPageLayout";

export default () => (
  <BlogPageLayout>
    <Header as="h1" size="huge">
      <Header.Content>
        寫廣東話嘅路，應該點行落去
      </Header.Content>
      <Header.Subheader>
        阿擇 （Chaaak）
        原載於Medium https://link.medium.com/dkBdkN8H8Y
      </Header.Subheader>
    </Header>
    <Divider/>
    <Message>
      兒童書你都唔用全粵語，唔通連聽個故仔都要大人逐字翻譯？
    </Message>
    <p>居然到 2019 年都仲係未有人寫</p>
    <p>呢幾日同幾個朋友傾粵語書寫問題，同文言文嘅定位。大家似乎都認為粵語要由文言去吸收養份，用文言文去建立「雅」嘅成份，避免粵語變得太「俗」。</p>
    <p>雅俗係語言群體慢慢建立出嚟嘅概念：家庭、日常生活可以用嘅語言，自然會有多啲俗嘅講法；正式場合、書寫先至用嘅語言，就發展唔出太多俗語。大眾覺得文言嘅行文高尚、典雅，係不爭嘅事實，呢點喺整個東亞文化圈皆然，唔易改變；但係呢點唔應該妨礙現代嘅書寫語言發展。如果因為粵語【有】粗俗嘅講法，就排除粵語書寫，排除佢嘅語法語彙，係極端嘅做法；為追求「雅」而無視文字嘅實際用途，亦都有啲離地。</p>
    <p>粵文發展經常被人誤解，我認為大家或者喺以下幾點要有共識：</p><Header as='h2' size='large'>
    </Header>
  
  </BlogPageLayout>
)