import React, { Component } from 'react';
import { 
  Accordion, 
  Icon,
  List,
} from 'semantic-ui-react';

export default class SchemaList extends Component {
  state = { activeIndex: -1 }

  handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index

    this.setState({ activeIndex: newIndex })
  }

  render() {
    const { activeIndex } = this.state

    return (
      <Accordion styled fluid>
        <Accordion.Title active={activeIndex === 0} index={0} onClick={this.handleClick}>
          <Icon name='dropdown' />
          官话
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 0}>
          <List>
            <List.Item>
              中原官话
              <List>
                <List.Item>洛阳话 - 洛嵩片</List.Item>
                <List.Item>郑州话 - 郑开片</List.Item>
                <List.Item>枣庄话 - 徐淮片</List.Item>
              </List>
            </List.Item>
            <List.Item>
              江淮官话
              <List>
                <List.Item>南京话 - 洪巢片</List.Item>
                <List.Item>南通话 - 通泰片</List.Item>
                <List.Item>如皋话 - 通泰片</List.Item>
                <List.Item>南通话 - 通泰片</List.Item>
                <List.Item>如皋话 - 通泰片</List.Item>
              </List>
            </List.Item>
            <List.Item>
              西南官话
              <List>
                <List.Item>黄冈话 - 黄孝片</List.Item>
                <List.Item>鄂城话 - 黄孝片</List.Item>
                <List.Item>四川话通音</List.Item>
                <List.Item>成都话 - 成渝片</List.Item>
                <List.Item>重庆话 - 成渝片</List.Item>
                <List.Item>宜宾话 - 灌赤片</List.Item>
                <List.Item>自贡话 - 灌赤片</List.Item>
                <List.Item>贵阳话 - 川黔片</List.Item>
                <List.Item>武汉话 - 武天片</List.Item>
              </List>
            </List.Item>
          </List>
        </Accordion.Content>

        <Accordion.Title active={activeIndex === 1} index={1} onClick={this.handleClick}>
          <Icon name='dropdown' />
          吴语
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 1}>
          <List>
            <List.Item>上海话 - 太湖片</List.Item>
            <List.Item>苏州话 - 太湖片</List.Item>
            <List.Item>宁波话 - 太湖片</List.Item>
            <List.Item>海宁话 - 太湖片</List.Item>
            <List.Item>桐乡话 - 太湖片</List.Item>
            <List.Item>海盐话 - 太湖片</List.Item>
            <List.Item>嘉善话 - 太湖片</List.Item>
            <List.Item>嘉兴话 - 太湖片</List.Item>
            <List.Item>松江话 - 太湖片</List.Item>
            <List.Item>永嘉话 - 瓯江片</List.Item>
          </List>
        </Accordion.Content>

        <Accordion.Title active={activeIndex === 2} index={2} onClick={this.handleClick}>
          <Icon name='dropdown' />
          粤语
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 2}>
          <List>
            <List.Item>广州话 - 广府片</List.Item>
            <List.Item>梧州话 - 广府片</List.Item>
            <List.Item>南宁话 - 邕浔片</List.Item>
            <List.Item>藤县话 - 勾漏片</List.Item>
            <List.Item>贵港话 - 勾漏片</List.Item>
          </List>
        </Accordion.Content>

        <Accordion.Title active={activeIndex === 3} index={3} onClick={this.handleClick}>
          <Icon name='dropdown' />
          闽东语
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 3}>
          <List>
            <List.Item>福州话 - 侯官片</List.Item>
          </List>
        </Accordion.Content>

        <Accordion.Title active={activeIndex === 4} index={4} onClick={this.handleClick}>
          <Icon name='dropdown' />
          莆仙话
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 4}>
          <List>
            <List.Item>莆田话</List.Item>
          </List>
        </Accordion.Content>

        <Accordion.Title active={activeIndex === 5} index={5} onClick={this.handleClick}>
          <Icon name='dropdown' />
          闽南语
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 5}>
          <List>
            <List.Item>厦门话 - 泉漳片（通行于闽南、台湾、东南亚等地）</List.Item>
            <List.Item>泉州话 - 泉漳片</List.Item>
            <List.Item>漳州话 - 泉漳片</List.Item>
            <List.Item>台湾话 - 泉漳片</List.Item>
            <List.Item>潮州话 - 潮汕片（通行于潮汕、港澳、东南亚等地）</List.Item>
            <List.Item>汕头话 - 潮汕片</List.Item>
            <List.Item>潮阳话 - 潮汕片</List.Item>
            <List.Item>揭阳话 - 潮汕片</List.Item>
            <List.Item>澄海话 - 潮汕片</List.Item>
            <List.Item>饶平话 - 潮汕片</List.Item>
          </List>
        </Accordion.Content>

        <Accordion.Title active={activeIndex === 6} index={6} onClick={this.handleClick}>
          <Icon name='dropdown' />
          客家话
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 6}>
          <List>
            <List.Item>客家话通音（通行于粤东、赣南、广西、海南、台湾、东南亚等地）</List.Item>
            <List.Item>梅县话 - 粤台片</List.Item>
          </List>
        </Accordion.Content>

        <Accordion.Title active={activeIndex === 7} index={7} onClick={this.handleClick}>
          <Icon name='dropdown' />
          晋语
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 7}>
          <List>
            <List.Item>嘉乐泉话</List.Item>
            <List.Item>芮城话</List.Item>
          </List>
        </Accordion.Content>
      </Accordion>
    )
  }
}