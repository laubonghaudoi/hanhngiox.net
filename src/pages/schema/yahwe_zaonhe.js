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
        <Grid columns={2} stackable>
          <Grid.Column>
            <Table celled unstackable textAlign='center' color='yellow'>

            </Table>
          </Grid.Column>
          <Grid.Column>
            <Message info>上海話有開合齊撮四呼</Message>
          </Grid.Column>
        </Grid>

        <Header dividing size="big" as="h3" id="nuclei">
          韻腹
        </Header>
        <Grid columns={2} stackable>
          <Grid.Column>
            <Table celled unstackable textAlign='center' color='orange'>
              <Table.Row>
                <Table.Cell>i <ipa>[i]</ipa> 詩<br/><allophone>i<sub>後接 -ng,-k</sub><ipa>[ɪ̞]</ipa> 識</allophone><br/>yu <ipa>[y]</ipa> 書</Table.Cell>
                <Table.Cell></Table.Cell>
                <Table.Cell>u <ipa>[u]</ipa> 夫<br/><allophone>u<sub>後接 -ng,-k</sub><ipa>[ʊ̞]</ipa> 風</allophone></Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell><allophone>e<sub>後接 -i</sub> <ipa>[e]</ipa> 未</allophone></Table.Cell>
                <Table.Cell>eo <ipa>[ɵ]</ipa> 水</Table.Cell>
                <Table.Cell><allophone>o<sub>後接 -u</sub> <ipa>[o]</ipa> 高</allophone></Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>e <ipa>[ɛ]</ipa> 姐<br/>oe <ipa>[œ]</ipa> 削</Table.Cell>
                <Table.Cell>a <ipa>[ɐ]</ipa> 不</Table.Cell>
                <Table.Cell>o <ipa>[ɔ]</ipa> 波</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell></Table.Cell>
                <Table.Cell>aa <ipa>[a]</ipa> 花</Table.Cell>
                <Table.Cell></Table.Cell>
              </Table.Row>
            </Table>
          </Grid.Column>
          <Grid.Column>
            <Message info>
              <p>上海話共有9個韻腹，與韻尾的具體搭配詳見下方<Link to='/schema/yahwe_zaonhe/#final_table'>韻母表</Link>。</p>
            </Message>
            <Message positive>
              <Message.Header>音變規則</Message.Header>
              <p>
                <ul>
                  <li></li>
                </ul>
              </p>
            </Message>
          </Grid.Column>
        </Grid>
        <Header dividing size="big" as="h3" id="coda">
          韻尾
        </Header>
        <Grid columns={2} stackable>
          <Grid.Column>
          <Table celled definition unstackable textAlign='center' color='olive'>
            <Table.Row>
              <Table.Cell>塞音</Table.Cell>
              <Table.Cell>p <ipa>[p̚]</ipa> 溼</Table.Cell>
              <Table.Cell>t <ipa>[t̚]</ipa> 失</Table.Cell>
              <Table.Cell>k <ipa>[k̚]</ipa> 塞</Table.Cell>
            </Table.Row>
            <Table.Row>
            <Table.Cell>鼻音</Table.Cell>
              <Table.Cell>m <ipa>[m]</ipa> 心</Table.Cell>
              <Table.Cell>n <ipa>[n]</ipa> 身</Table.Cell>
              <Table.Cell>ng <ipa>[ŋ]</ipa> 生</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>元音</Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell>i <ipa>[i]</ipa> 西<br/><allophone>i<sub>前接 eo-, u-</sub> <ipa>[y]</ipa> 水</allophone></Table.Cell>
              <Table.Cell>u <ipa>[u]</ipa> 收</Table.Cell>
            </Table.Row>
          </Table>
          </Grid.Column>
          <Grid.Column>
            <Message info>
              粵拼共有8個韻尾，其中三個塞音韻尾（入聲韻）均爲不除阻。
            </Message>
            <Message positive>
              <Message.Header>音變規則</Message.Header>
              <p>
                <ul>
                  <li>拼寫作 -i 的韻尾，會受 eo 和 u 韻腹影響產生圓唇化，詳見表中IPA。</li>
                </ul>
              </p>
            </Message>
          </Grid.Column>
        </Grid>

        <Header dividing size="large" as="h2" id="final_table" style={{ paddingTop: '5rem' }}>
          韻母表
        </Header>
        <Table celled definition unstackable textAlign='center' color='red'>
          <Table.Header>
            <Table.Row textAlign='center'>
              <Table.HeaderCell>介音</Table.HeaderCell>
              <Table.HeaderCell colSpan='3'>-</Table.HeaderCell>
              <Table.HeaderCell colSpan='3'>u-</Table.HeaderCell>
              <Table.HeaderCell colSpan='3'>i-</Table.HeaderCell>
              <Table.HeaderCell colSpan='3'>iu-</Table.HeaderCell>
            </Table.Row>
            <Table.Row textAlign='center'>
              <Table.HeaderCell>韻尾</Table.HeaderCell>
              <Table.HeaderCell>-</Table.HeaderCell>
              <Table.HeaderCell>-n</Table.HeaderCell>
              <Table.HeaderCell>-h</Table.HeaderCell>
              <Table.HeaderCell>-</Table.HeaderCell>
              <Table.HeaderCell>-n</Table.HeaderCell>
              <Table.HeaderCell>-h</Table.HeaderCell>
              <Table.HeaderCell>-</Table.HeaderCell>
              <Table.HeaderCell>-n</Table.HeaderCell>
              <Table.HeaderCell>-h</Table.HeaderCell>
              <Table.HeaderCell>-</Table.HeaderCell>
              <Table.HeaderCell>-n</Table.HeaderCell>
              <Table.HeaderCell>-h</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            <Table.Row>
              <Table.Cell>-</Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell>u 乌</Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell>i 移</Table.Cell>
              <Table.Cell>in 清</Table.Cell>
              <Table.Cell>ih 立</Table.Cell>
              <Table.Cell>iu 遇</Table.Cell>
              <Table.Cell>iuin 君</Table.Cell>
              <Table.Cell>iuih 决</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>y</Table.Cell>
              <Table.Cell>y 斯</Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>e</Table.Cell>
              <Table.Cell>e 爱</Table.Cell>
              <Table.Cell>en 真</Table.Cell>
              <Table.Cell>eh 黑</Table.Cell>
              <Table.Cell>ue 回</Table.Cell>
              <Table.Cell>uen 昆</Table.Cell>
              <Table.Cell>ueh 阔</Table.Cell>
              <Table.Cell>ie 先</Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>eu</Table.Cell>
              <Table.Cell>eu 勾</Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell>ieu 旧</Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>o</Table.Cell>
              <Table.Cell>o 沙</Table.Cell>
              <Table.Cell>on 东</Table.Cell>
              <Table.Cell>oh 读</Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell>io 靴</Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell>ioh 局</Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>oe</Table.Cell>
              <Table.Cell>oe 干</Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell>uoe 碗</Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell>ion 兄</Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell>ioe 捐</Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>au</Table.Cell>
              <Table.Cell>au 包</Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell>iau 萧</Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>ae</Table.Cell>
              <Table.Cell>ae 山</Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell>uae 关</Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell>iae 廿</Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>a</Table.Cell>
              <Table.Cell>a 蟹</Table.Cell>
              <Table.Cell>an 梗</Table.Cell>
              <Table.Cell>ah 鸭</Table.Cell>
              <Table.Cell>ua 怪</Table.Cell>
              <Table.Cell>uan 横</Table.Cell>
              <Table.Cell>uah 刮</Table.Cell>
              <Table.Cell>ia 写</Table.Cell>
              <Table.Cell>ian 阳</Table.Cell>
              <Table.Cell>iah 脚</Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>ao</Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell>aon 刚</Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell>uaon 黄</Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell>iaon 炀</Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
        <Grid columns={2} stackable>
          <Grid.Column>
            <Message negative>
              um, up, ep 爲邊緣韻母，僅存在於擬聲詞或外來借詞中，一般情況下可忽略。
            </Message>
          </Grid.Column>
          <Grid.Column>
            <Message warning>
              <Icon name='info circle'/> a 和 oet 爲新增韻母，詳見<Link to='https://e40058f5-5f04-4db7-8d70-4650bee22b88.filesusr.com/ugd/508b98_8bead2fef24f46e79eba9bc86faf3075.pdf'>粵拼增韻建議</Link>
            </Message>
          </Grid.Column>
        </Grid>

        <Header dividing size="large" as="h3" id="tone" style={{ paddingTop: '5rem' }}>
          聲調
        </Header>
        <Grid columns={2} stackable>
          <Grid.Column>
            <Table textAlign="center" color='violet'>
              <Table.Row>
                <Table.Cell>1 陰平 <ipa>[˥˥]</ipa> 詩</Table.Cell>
                <Table.Cell>2 陰上 <ipa>[˧˥]</ipa> 史</Table.Cell>
                <Table.Cell>3 陰去 <ipa>[˧˧]</ipa> 試</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>4 陽平 <ipa>[˨˩]</ipa> 時</Table.Cell>
                <Table.Cell>5 陽上 <ipa>[˩˧]</ipa> 市</Table.Cell>
                <Table.Cell>6 陽去 <ipa>[˨˨]</ipa> 事</Table.Cell>
              </Table.Row>
            </Table>
          </Grid.Column>
          <Grid.Column>
            <Message positive>
              <Message.Header>音變規則</Message.Header>
              <p>
                <ul>
                  <li>廣州音中陰平調已分化成<ipa>[˥˥]</ipa>和<ipa>[˥˧]</ipa>兩調，粵拼中不作區分。</li>
                </ul>
              </p>
            </Message>
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