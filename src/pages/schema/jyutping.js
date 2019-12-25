import React, { Component } from 'react'

import {
  Divider,
  Grid,
  Header,
  Icon,
  List,
  Message,
  Table} from "semantic-ui-react";

import { Link } from 'gatsby';
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
                粤拼全稱「香港語言學學會粵語拼音方案」，亦稱LSHK粵拼。是香港語言學學會於1993年定案的粵語拼音方案。其特點是完全使用ASCII字符，用數字表示聲調，設計科學合理。是目前最通用的粵語拼音方案。
              </p>
              <ul>
                <li>官方頁面：<a href="https://www.lshk.org/jyutping">Jyutping 粵拼 | lshk</a></li>
                <li>℞ 所屬配方名稱：<code>rime/rime-cantonese</code></li>
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
                <List.Item as={Link} to='/schema/jyutping/#onset'>聲母</List.Item>
                <List.Item as={Link} to='/schema/jyutping/#final'>
                  韻母
                  <List.List style={{paddingLeft: '2rem', paddingTop: '0.5rem', paddingBottom: '0.5rem'}}>
                    <List.Item>介音</List.Item>
                    <List.Item>韻腹</List.Item>
                    <List.Item>韻尾</List.Item>
                  </List.List>  
                </List.Item>
                <List.Item as={Link} to='/schema/jyutping/#final_table'>韻母表</List.Item>
                <List.Item as={Link} to='/schema/jyutping/#tone'>聲調</List.Item>
                <List.Item as={Link} to='/schema/jyutping/#reference'>參考</List.Item>
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
              <p>粵拼中共有19個聲母，無清濁對立，無腭化音。</p>
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
              <Table.Cell></Table.Cell>
              <Table.Cell>g <ipa>[k]</ipa> 家<br/>k  <ipa>[kʰ]</ipa>  卡<br/>gw <ipa>[kʷ]</ipa> 瓜<br/>kw  <ipa>[kʷ]</ipa>  夸</Table.Cell>
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
              <Table.Cell></Table.Cell>
              <Table.Cell>ng  <ipa>[ŋ]</ipa> 牙</Table.Cell>
              <Table.Cell></Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>擦音</Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell>f <ipa>[f]</ipa> 花</Table.Cell>
              <Table.Cell>s <ipa>[s]</ipa> 沙</Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell>h <ipa>[h]</ipa> 蝦</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>近音</Table.Cell>
              <Table.Cell>w <ipa>[w]</ipa> 蛙</Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell>j <ipa>[j]</ipa> 也</Table.Cell>
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


        <Header dividing size="large" as="h2" id="final" style={{ paddingTop: '5rem' }}>
          韻母
        </Header>
        <Header dividing size="big" as="h3" id="medial">
          介音
        </Header>
        <Grid columns={2} stackable>
          <Grid.Column>
            <Message info>粵拼無介音</Message>
          </Grid.Column>
        </Grid>

        <Header dividing size="big" as="h3" id="nuclei">
          韻腹
        </Header>
        <Grid columns={2} stackable>
          <Grid.Column>
            <Table celled unstackable textAlign='center' color='orange'>
              <Table.Row>
                <Table.Cell>i <ipa>[i]</ipa> 詩<br/>i<sub><allophone>後接 -ng,-k</allophone></sub> <ipa>[ɪ̞]</ipa> 識<br/>yu <ipa>[y]</ipa> 書</Table.Cell>
                <Table.Cell></Table.Cell>
                <Table.Cell>u <ipa>[u]</ipa> 夫<br/>u<sub><allophone>後接 -ng,-k</allophone></sub> <ipa>[ʊ̞]</ipa> 風</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>e<sub><allophone>後接 -i</allophone></sub> <ipa>[e]</ipa> 未</Table.Cell>
                <Table.Cell>eo <ipa>[ɵ]</ipa> 水</Table.Cell>
                <Table.Cell>o<sub><allophone>後接 -u</allophone></sub> <ipa>[o]</ipa> 高</Table.Cell>
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
              <p>粵拼共有13個韻腹，其中7個可以自由出現在開音節。具體與韻尾的搭配請見下方韻母表。 </p>
            </Message>
            <Message positive>
              <Message.Header>音變規則</Message.Header>
              <p>
                <ul>
                  <li>i, u, e, o 均爲一個符號對應兩個韻腹，具體所代表的韻腹取決於所搭配的韻尾。即韻腹 e, o, i, u 在拼寫成 <strong>e</strong>i, <strong>o</strong>u, <strong>i</strong>ng, <strong>i</strong>k, <strong>u</strong>ng, <strong>u</strong>k 時，讀音與和其他韻尾搭配時稍有不同，詳見表中IPA。</li>
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
              <Table.Cell>i <ipa>[i]</ipa> 西</Table.Cell>
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
                  <li>韻尾 -i 拼寫成 eoi 和 ui 時，會受 eo 和 u 韻腹影響產生圓唇化，即發音更接近於 <ipa>[y]</ipa>。</li>
                </ul>
              </p>
            </Message>
          </Grid.Column>
        </Grid>

        <Header dividing size="large" as="h2" id="final_table" style={{ paddingTop: '5rem' }}>
          韻母表
        </Header>
        <Table celled structured unstackable textAlign='center' color='red'>
          <Table.Header>
            <Table.Row textAlign='center'>
              <Table.HeaderCell colSpan='2'>韻尾</Table.HeaderCell>
              <Table.HeaderCell>單元音</Table.HeaderCell>
              <Table.HeaderCell colSpan='2'>複元音</Table.HeaderCell>
              <Table.HeaderCell colSpan='3'>鼻音</Table.HeaderCell>
              <Table.HeaderCell colSpan='3'>塞音（入聲韻）</Table.HeaderCell>
            </Table.Row>
            <Table.Row textAlign='center'>
              <Table.HeaderCell colSpan='2'>韻腹</Table.HeaderCell>
              <Table.HeaderCell>-</Table.HeaderCell>
              <Table.HeaderCell>-i</Table.HeaderCell>
              <Table.HeaderCell>-u</Table.HeaderCell>
              <Table.HeaderCell>-m</Table.HeaderCell>
              <Table.HeaderCell>-n</Table.HeaderCell>
              <Table.HeaderCell>-ng</Table.HeaderCell>
              <Table.HeaderCell>-p</Table.HeaderCell>
              <Table.HeaderCell>-t</Table.HeaderCell>
              <Table.HeaderCell>-k</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            <Table.Row>
              <Table.Cell rowSpan='2'>i</Table.Cell>
              <Table.Cell><ipa>[i]</ipa></Table.Cell>
              <Table.Cell>i 思</Table.Cell>
              <Table.Cell active></Table.Cell>
              <Table.Cell>iu 消</Table.Cell>
              <Table.Cell>im 閃</Table.Cell>
              <Table.Cell>in 先</Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell>ip 攝</Table.Cell>
              <Table.Cell>it 泄</Table.Cell>
              <Table.Cell></Table.Cell> 
            </Table.Row>
            <Table.Row>
              <Table.Cell><ipa>[ɪ̞]</ipa></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell active></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell>ing 升</Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell>ik 識</Table.Cell> 
            </Table.Row>
            <Table.Row>
              <Table.Cell>yu</Table.Cell>
              <Table.Cell><ipa>[y]</ipa></Table.Cell>
              <Table.Cell>yu 書</Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell>yun 孫</Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell>yut 雪</Table.Cell>
              <Table.Cell></Table.Cell> 
            </Table.Row>
            <Table.Row>
              <Table.Cell rowSpan='2'>u</Table.Cell>
              <Table.Cell><ipa>[u]</ipa></Table.Cell>
              <Table.Cell>u 夫</Table.Cell>
              <Table.Cell>ui 灰</Table.Cell>
              <Table.Cell active></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell>un 歡</Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell>ut 闊</Table.Cell>
              <Table.Cell></Table.Cell> 
            </Table.Row>
            <Table.Row>
              <Table.Cell><ipa>[ʊ̞]</ipa></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell active></Table.Cell>
              <Table.Cell negative>um</Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell>ung 風</Table.Cell>
              <Table.Cell negative>up</Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell>uk 福</Table.Cell> 
            </Table.Row>
            <Table.Row>
              <Table.Cell rowSpan='2'>e </Table.Cell>
              <Table.Cell><ipa>[e]</ipa></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell>ei 四</Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell negative>ep</Table.Cell>
              <Table.Cell>et 坺</Table.Cell>
              <Table.Cell></Table.Cell> 
            </Table.Row>
            <Table.Row>
              <Table.Cell><ipa>[ɛ]</ipa></Table.Cell>
              <Table.Cell>e 些</Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell>eu 掉</Table.Cell>
              <Table.Cell>em 舐</Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell>eng 鄭</Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell>ek 石</Table.Cell> 
            </Table.Row>
            <Table.Row>
              <Table.Cell>eo</Table.Cell>
              <Table.Cell><ipa>[ɵ]</ipa></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell>eoi 需</Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell>eon 詢</Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell>eot 摔</Table.Cell>
              <Table.Cell></Table.Cell> 
            </Table.Row>
            <Table.Row>
              <Table.Cell>oe</Table.Cell>
              <Table.Cell><ipa>[œ]</ipa></Table.Cell>
              <Table.Cell>oe 鋸</Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell>oeng 疆</Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell warning>oet <sup><Icon name='info circle'/></sup> 𠰲</Table.Cell>
              <Table.Cell>oek 腳</Table.Cell> 
            </Table.Row>
            <Table.Row>
              <Table.Cell rowSpan='2'>o</Table.Cell>
              <Table.Cell><ipa>[o]</ipa></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell>ou 好</Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell> 
            </Table.Row>
            <Table.Row>
              <Table.Cell><ipa>[ɔ]</ipa></Table.Cell>
              <Table.Cell>o 可</Table.Cell>
              <Table.Cell>oi 開</Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell>on 看</Table.Cell>
              <Table.Cell>ong 康</Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell>ot 喝</Table.Cell>
              <Table.Cell>ok 學</Table.Cell> 
            </Table.Row>
            <Table.Row>
              <Table.Cell>a</Table.Cell>
              <Table.Cell><ipa>[ɐ]</ipa></Table.Cell>
              <Table.Cell warning>a <sup><Icon name='info circle'/></sup> 㗎</Table.Cell>
              <Table.Cell>ai 擠</Table.Cell>
              <Table.Cell>au 周</Table.Cell>
              <Table.Cell>am 斟</Table.Cell>
              <Table.Cell>an 珍</Table.Cell>
              <Table.Cell>ang 增</Table.Cell>
              <Table.Cell>ap 汁</Table.Cell>
              <Table.Cell>at 侄</Table.Cell>
              <Table.Cell>ak 則</Table.Cell> 
            </Table.Row>
            <Table.Row>
              <Table.Cell>aa</Table.Cell>
              <Table.Cell><ipa>[a]</ipa></Table.Cell>
              <Table.Cell>aa 渣</Table.Cell>
              <Table.Cell>aai 齋</Table.Cell>
              <Table.Cell>aau 嘲</Table.Cell>
              <Table.Cell>aam 站</Table.Cell>
              <Table.Cell>aan 讚</Table.Cell>
              <Table.Cell>aang 掙</Table.Cell>
              <Table.Cell>aap 集</Table.Cell>
              <Table.Cell>aat 扎</Table.Cell>
              <Table.Cell>aak 責</Table.Cell> 
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
            <Message info>粵拼共有6個聲調，保留陰清陽濁的和中古音的對應關繫。</Message>
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
          <List.Item><ipa>https://www.lshk.org/jyutping</ipa></List.Item>
          <List.Item><ipa>Zee, Eric. 1991. "Chinese (Hong Kong Cantonese)." <i>Journal of the International Phonetic Association</i> 21.1: 46-48.</ipa></List.Item>
        </List>
        
      </SchemaPageLayout>
    )
  }
}

export default Jyutping