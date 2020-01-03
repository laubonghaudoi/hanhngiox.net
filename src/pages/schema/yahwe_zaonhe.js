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
  render() {
    return (
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
                  display: 'inline-block',
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
                  display: 'inline-block',
                  marginBottom: rhythm(0.5),
                  paddingLeft: '1rem'
                }}>
                目錄
              </Header>
              <List bulleted style={{ paddingLeft: '2rem' }}>
                <List.Item as={Link} to='/schema/yahwe_zaonhe/#onset'>聲母</List.Item>
                <List.Item as={Link} to='/schema/yahwe_zaonhe/#final'>
                  韻母
                  <List.List style={{ paddingLeft: '2rem', paddingTop: '0.5rem', paddingBottom: '0.5rem' }}>
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
              <Table.Cell>p <ipa>[p]</ipa> 幫<br />ph <ipa>[pʰ]</ipa>  滂<br />b <ipa>[b]</ipa> 並</Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell>t <ipa>[t]</ipa> 端<br />th <ipa>[tʰ]</ipa>  透<br />d <ipa>[d]</ipa> 定</Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell>k <ipa>[k]</ipa> 光<br />kh  <ipa>[kʰ]</ipa>  框<br />g <ipa>[g]</ipa> 狂</Table.Cell>
              <Table.Cell>' <ipa>[ʔ]</ipa> 影</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>塞擦音</Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell>ts <ipa>[t͡s]</ipa>  早<br />tsh  <ipa>[t͡sʰ]</ipa>  草</Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell>c <ipa>[t͡ɕ]</ipa> 見<br />ch <ipa>[t͡ɕʰ]</ipa> 溪<br />j <ipa>[d͡ʑ]</ipa> 羣</Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
            </Table.Row>
            <Table.Row textAlign='center'>
              <Table.Cell>鼻音</Table.Cell>
              <Table.Cell>m <ipa>[m]</ipa> 媽</Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell>n <ipa>[n]</ipa> 那</Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell>ny <ipa>[nʲ]</ipa> 日<sup><Icon name='info circle' /></sup></Table.Cell>
              <Table.Cell>ng  <ipa>[ŋ]</ipa> 牙</Table.Cell>
              <Table.Cell></Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>擦音</Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell>f <ipa>[f]</ipa> 敷<br />v <ipa>[v]</ipa> 奉</Table.Cell>
              <Table.Cell>s <ipa>[s]</ipa> 燒<br />z <ipa>[z]</ipa> 曹</Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell>sh <ipa>[ɕ]</ipa> 曉</Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell>h <ipa>[h]</ipa> 好<br />gh <ipa>[ɦ]</ipa> 匣</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>近音</Table.Cell>
              <Table.Cell><ipa>[w]</ipa></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell><ipa>[j]</ipa></Table.Cell>
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
        <Message warning>
          <Icon name='info circle' />
          此處根據 Chen 2015 將日母轉寫爲顎化鼻音 <ipa>[nʲ]</ipa> ，不同於部分學者的轉寫 <ipa>[ɲ]</ipa> 。
        </Message>

        <Header dividing size="big" as="h3">
          鼻音單獨成韻
        </Header>
        <Grid columns={2} stackable>
          <Grid.Column>
            <Table textAlign="center" color='teal'>
              <Table.Row>
                <Table.Cell>m <ipa>[m]</ipa> 毋</Table.Cell>
                <Table.Cell>ng <ipa>[ŋ]</ipa> 魚</Table.Cell>
              </Table.Row>
            </Table>
          </Grid.Column>
        </Grid>


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
              </Table.Row>
            </Table>
          </Grid.Column>
          <Grid.Column>
            <Message info>上海話共有兩個介音（不含零介音）。</Message>
            <Message positive>
              <Message.Header>音變規則</Message.Header>
              <p>
                <ul>
                  <li>當介音 i- 拼寫爲韻母 ioe 時，的韻尾，會受韻腹 oe 影響產生圓唇化，實際音值爲<ipa>[ʏ]</ipa>。</li>
                </ul>
              </p>
            </Message>
          </Grid.Column>
        </Grid>

        <Header dividing size="big" as="h3" id="nuclei">
          韻腹
        </Header>
        <Grid columns={2} stackable>
          <Grid.Column>
            <Table celled unstackable textAlign='center' color='orange'>
              <Table.Row>
                <Table.Cell>
                  i <ipa>[i]</ipa> 衣<br />
                  i<sub><allophone>後接 -n,-h</allophone></sub> <ipa>[ɪ]</ipa> 滴<br />
                  iu <ipa>[y]</ipa> 驢<br />
                  iu<sub><allophone>後接 -n,-h</allophone></sub> <ipa>[ʏ]</ipa> 軍<br />
                  y <ipa>[z̩]</ipa> 詩<br />
                </Table.Cell>
                <Table.Cell></Table.Cell>
                <Table.Cell>u <ipa>[u]</ipa> 污</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>oe <ipa>[ø]</ipa> 看</Table.Cell>
                <Table.Cell>e<sub><allophone>後接 -n,-h</allophone></sub> <ipa>[ə]</ipa> 跟<br /></Table.Cell>
                <Table.Cell>
                  o <ipa>[o]</ipa> 瓜<br />
                  o<sub><allophone>後接 -n,-h</allophone></sub> <ipa>[ʊ]</ipa> 公<br />
                  eu <ipa>[ɤ]</ipa> 溝</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>e <ipa>[ɛ]</ipa> 該</Table.Cell>
                <Table.Cell></Table.Cell>
                <Table.Cell>au <ipa>[ɔ]</ipa> 高</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>ae <ipa>[æ]</ipa> 藍<sup><Icon name='info circle' /></sup></Table.Cell>
                <Table.Cell>
                  a <ipa>[a]</ipa> 街<br />
                  a<sub><allophone>後接 -n,-h</allophone></sub> <ipa>[ɐ]</ipa> 甲
                </Table.Cell>
                <Table.Cell>ao<sub><allophone>後接 -n</allophone></sub> <ipa>[ɑ]</ipa> 剛</Table.Cell>
              </Table.Row>
            </Table>
          </Grid.Column>
          <Grid.Column>
            <Message info>
              <p>上海話共有17個韻腹，與韻尾的具體搭配詳見下方<Link to='/schema/yahwe_zaonhe/#final_table'>韻母表</Link>。</p>
            </Message>
            <Message positive>
              <Message.Header>音變規則</Message.Header>
              <p>
                <ul>
                  <li>在輸入法當中，nyiu 簡寫爲 nyu</li>
                </ul>
              </p>
            </Message>
            <Message warning>
              <Icon name='info circle' />Chen (2015) 中所記錄的爲新派上海話，ae 已歸併到 e。
            </Message>
          </Grid.Column>
        </Grid>
        <Header dividing size="big" as="h3" id="coda">
          韻尾
        </Header>
        <Grid columns={2} stackable>
          <Grid.Column>
            <Table celled structured unstackable textAlign='center' color='olive'>
              <Table.Row>
                <Table.Cell>Ø</Table.Cell>
                <Table.Cell>n <ipa>[ŋ]</ipa></Table.Cell>
                <Table.Cell>h <ipa>[ʔ]</ipa></Table.Cell>
              </Table.Row>
            </Table>
          </Grid.Column>
          <Grid.Column>
            <Message info>
              上海話共有2個韻尾，一個塞音韻尾（入聲韻），一個鼻音韻尾（不區分前後鼻音）。
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
            </Table.Row>
          </Table.Header>
          <Table.Body>
            <Table.Row textAlign='center'>
              <Table.Cell rowSpan='11'>-Ø</Table.Cell>
              <Table.Cell>i</Table.Cell>
              <Table.Cell><ipa>[i]</ipa></Table.Cell>
              <Table.Cell>i 衣</Table.Cell>
              <Table.Cell active></Table.Cell>
              <Table.Cell></Table.Cell>
            </Table.Row>
            <Table.Row textAlign='center'>
              <Table.Cell>iu</Table.Cell>
              <Table.Cell><ipa>[y]</ipa></Table.Cell>
              <Table.Cell>iu 驢</Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
            </Table.Row>
            <Table.Row textAlign='center'>
              <Table.Cell>y</Table.Cell>
              <Table.Cell><ipa>[z̩]</ipa></Table.Cell>
              <Table.Cell>y 詩</Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
            </Table.Row>
            <Table.Row textAlign='center'>
              <Table.Cell>u</Table.Cell>
              <Table.Cell><ipa>[u]</ipa></Table.Cell>
              <Table.Cell>u 污</Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell active></Table.Cell>
            </Table.Row>
            <Table.Row textAlign='center'>
              <Table.Cell>oe</Table.Cell>
              <Table.Cell><ipa>[ø]</ipa> </Table.Cell>
              <Table.Cell>oe 看</Table.Cell>
              <Table.Cell>ioe 捐</Table.Cell>
              <Table.Cell>uoe 碗</Table.Cell>
            </Table.Row>
            <Table.Row textAlign='center'>
              <Table.Cell>o</Table.Cell>
              <Table.Cell><ipa>[o]</ipa></Table.Cell>
              <Table.Cell>o 瓜</Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
            </Table.Row>
            <Table.Row textAlign='center'>
              <Table.Cell>eu</Table.Cell>
              <Table.Cell><ipa>[ɤ]</ipa></Table.Cell>
              <Table.Cell>eu 溝</Table.Cell>
              <Table.Cell>ieu 舊</Table.Cell>
              <Table.Cell></Table.Cell>
            </Table.Row>
            <Table.Row textAlign='center'>
              <Table.Cell>e</Table.Cell>
              <Table.Cell><ipa>[ɛ] </ipa></Table.Cell>
              <Table.Cell>e 該</Table.Cell>
              <Table.Cell>ie 點<sup><Icon name='info circle' /></sup></Table.Cell>
              <Table.Cell></Table.Cell>
            </Table.Row>
            <Table.Row textAlign='center'>
              <Table.Cell>au</Table.Cell>
              <Table.Cell><ipa>[ɔ]</ipa></Table.Cell>
              <Table.Cell>au 高</Table.Cell>
              <Table.Cell>iau 萧</Table.Cell>
              <Table.Cell></Table.Cell>
            </Table.Row>
            <Table.Row textAlign='center'>
              <Table.Cell>ae</Table.Cell>
              <Table.Cell><ipa>[æ]</ipa></Table.Cell>
              <Table.Cell>ae 藍</Table.Cell>
              <Table.Cell>iae 廿</Table.Cell>
              <Table.Cell>uae 关</Table.Cell>
            </Table.Row>
            <Table.Row textAlign='center'>
              <Table.Cell>a</Table.Cell>
              <Table.Cell><ipa>[a]</ipa></Table.Cell>
              <Table.Cell>a 街</Table.Cell>
              <Table.Cell>ia 写</Table.Cell>
              <Table.Cell>ua 怪</Table.Cell>
            </Table.Row>
            <Table.Row textAlign='center'>
              <Table.Cell rowSpan='6'>-n</Table.Cell>
              <Table.Cell>i</Table.Cell>
              <Table.Cell><ipa>[ɪ]</ipa></Table.Cell>
              <Table.Cell>in 清</Table.Cell>
              <Table.Cell active></Table.Cell>
              <Table.Cell></Table.Cell>
            </Table.Row>
            <Table.Row textAlign='center'>
              <Table.Cell>iu</Table.Cell>
              <Table.Cell><ipa>[ʏ]</ipa></Table.Cell>
              <Table.Cell>iun 軍</Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
            </Table.Row>
            <Table.Row textAlign='center'>
              <Table.Cell>e</Table.Cell>
              <Table.Cell><ipa>[ə]</ipa></Table.Cell>
              <Table.Cell>en 跟</Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell>uen 溫</Table.Cell>
            </Table.Row>
            <Table.Row textAlign='center'>
              <Table.Cell>o</Table.Cell>
              <Table.Cell><ipa>[ʊ]</ipa></Table.Cell>
              <Table.Cell>on 公</Table.Cell>
              <Table.Cell>ion 兄</Table.Cell>
              <Table.Cell></Table.Cell>
            </Table.Row>
            <Table.Row textAlign='center'>
              <Table.Cell>a</Table.Cell>
              <Table.Cell><ipa>[ɐ]</ipa></Table.Cell>
              <Table.Cell>an 梗</Table.Cell>
              <Table.Cell>ian 陽</Table.Cell>
              <Table.Cell>uan 橫</Table.Cell>
            </Table.Row>
            <Table.Row textAlign='center'>
              <Table.Cell>ao</Table.Cell>
              <Table.Cell><ipa>[ɑ]</ipa></Table.Cell>
              <Table.Cell>aon 剛</Table.Cell>
              <Table.Cell>iaon 煬</Table.Cell>
              <Table.Cell>uaon 黃</Table.Cell>
            </Table.Row>
            <Table.Row textAlign='center'>
              <Table.Cell rowSpan='5'>-h</Table.Cell>
              <Table.Cell>i</Table.Cell>
              <Table.Cell><ipa>[ɪ]</ipa></Table.Cell>
              <Table.Cell>ih 滴</Table.Cell>
              <Table.Cell active></Table.Cell>
              <Table.Cell></Table.Cell>
            </Table.Row>
            <Table.Row textAlign='center'>
              <Table.Cell>iu</Table.Cell>
              <Table.Cell><ipa>[ʏ]</ipa></Table.Cell>
              <Table.Cell>iuh 決</Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
            </Table.Row>
            <Table.Row textAlign='center'>
              <Table.Cell>e</Table.Cell>
              <Table.Cell><ipa>[ə]</ipa></Table.Cell>
              <Table.Cell>eh 黑</Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell>ueh 阔</Table.Cell>
            </Table.Row>
            <Table.Row textAlign='center'>
              <Table.Cell>o</Table.Cell>
              <Table.Cell><ipa>[ʊ]</ipa></Table.Cell>
              <Table.Cell>oh 读</Table.Cell>
              <Table.Cell>ioh 局</Table.Cell>
              <Table.Cell></Table.Cell>
            </Table.Row>
            <Table.Row textAlign='center'>
              <Table.Cell>a</Table.Cell>
              <Table.Cell><ipa>[ɐ]</ipa></Table.Cell>
              <Table.Cell>ah 鸭</Table.Cell>
              <Table.Cell>iah 脚</Table.Cell>
              <Table.Cell>uah 刮</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
        <Grid columns={2} stackable>
          <Grid.Column>
            <Message positive>
              <Message.Header>
                拼寫規則
              </Message.Header>
              <Message.Content>
                <p>
                  <List bulleted>
                    <List.Item>韻母 iuh 在輸入法中也可拼爲 iuih。</List.Item>
                    <List.Item>ghiu簡寫爲yu</List.Item>
                  </List>
                </p>
              </Message.Content>
            </Message>
          </Grid.Column>
          <Grid.Column>
            <Message warning>
              <Icon name='info circle' />
              韻母 ie 在新派上海話中已歸併到 i。
            </Message>
          </Grid.Column>
        </Grid>


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
                <Table.Cell>1 <ipa>[˥˩]</ipa> 高</Table.Cell>
                <Table.Cell></Table.Cell>
                <Table.Cell>2 <ipa>[˦˦˥]</ipa> 講</Table.Cell>
                <Table.Cell>4 <ipa>[˦˦]</ipa> 則</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>陽</Table.Cell>
                <Table.Cell></Table.Cell>
                <Table.Cell></Table.Cell>
                <Table.Cell>3 <ipa>[˩˩˧]</ipa> 我</Table.Cell>
                <Table.Cell>5 <ipa>[˨˧]</ipa> 達</Table.Cell>
              </Table.Row>
            </Table>
          </Grid.Column>
          <Grid.Column>
            <Message info>上海話共有5個聲調，其中陽平和上聲已歸併到去聲。</Message>
          </Grid.Column>
        </Grid>

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