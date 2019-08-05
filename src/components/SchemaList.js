import React, { Component } from 'react'
import { Accordion, Icon } from 'semantic-ui-react'

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
      <Accordion>
        <Accordion.Title active={activeIndex === 0} index={0} onClick={this.handleClick}>
          <Icon name='dropdown' />
          官话
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 0}>
          <ul>
            <li>
              中原官话
              <ul>
                <li>洛阳话 - 洛嵩片</li>
                <li>郑州话 - 郑开片</li>
                <li>枣庄话 - 徐淮片</li>
              </ul>
            </li>
            <li>
              江淮官话
              <ul>
                <li>南京话 - 洪巢片</li>
                <li>南通话 - 通泰片</li>
                <li>如皋话 - 通泰片</li>
                <li>南通话 - 通泰片</li>
                <li>如皋话 - 通泰片</li>
              </ul>
            </li>
            <li>
              西南官话
              <ul>
              <li>黄冈话 - 黄孝片</li>
              <li>鄂城话 - 黄孝片</li>
              <li>四川话通音</li>
              <li>成都话 - 成渝片</li>
              <li>重庆话 - 成渝片</li>
              <li>宜宾话 - 灌赤片</li>
              <li>自贡话 - 灌赤片</li>
              <li>贵阳话 - 川黔片</li>
              <li>武汉话 - 武天片</li>
              </ul>
            </li>
          </ul>
        </Accordion.Content>

        <Accordion.Title active={activeIndex === 1} index={1} onClick={this.handleClick}>
          <Icon name='dropdown' />
          吴语
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 1}>
          <ul>
            <li>上海话 - 太湖片</li>
            <li>苏州话 - 太湖片</li>
            <li>宁波话 - 太湖片</li>
            <li>海宁话 - 太湖片</li>
            <li>桐乡话 - 太湖片</li>
            <li>海盐话 - 太湖片</li>
            <li>嘉善话 - 太湖片</li>
            <li>嘉兴话 - 太湖片</li>
            <li>松江话 - 太湖片</li>
            <li>永嘉话 - 瓯江片</li>
          </ul>
        </Accordion.Content>

        <Accordion.Title active={activeIndex === 2} index={2} onClick={this.handleClick}>
          <Icon name='dropdown' />
          粤语
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 2}>
          <ul>
            <li>广州话 - 广府片</li>
            <li>梧州话 - 广府片</li>
            <li>南宁话 - 邕浔片</li>
            <li>藤县话 - 勾漏片</li>
            <li>贵港话 - 勾漏片</li>
          </ul>
        </Accordion.Content>

        <Accordion.Title active={activeIndex === 3} index={3} onClick={this.handleClick}>
          <Icon name='dropdown' />
          闽东语
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 3}>
          <ul>
            <li>福州话 - 侯官片</li>
          </ul>
        </Accordion.Content>

        <Accordion.Title active={activeIndex === 4} index={4} onClick={this.handleClick}>
          <Icon name='dropdown' />
          莆仙话
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 4}>
          <ul>
            <li>莆田话</li>
          </ul>
        </Accordion.Content>

        <Accordion.Title active={activeIndex === 5} index={5} onClick={this.handleClick}>
          <Icon name='dropdown' />
          闽南语
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 5}>
          <ul>
            <li>厦门话 - 泉漳片（通行于闽南、台湾、东南亚等地）</li>
            <li>泉州话 - 泉漳片</li>
            <li>漳州话 - 泉漳片</li>
            <li>台湾话 - 泉漳片</li>
            <li>潮州话 - 潮汕片（通行于潮汕、港澳、东南亚等地）</li>
            <li>汕头话 - 潮汕片</li>
            <li>潮阳话 - 潮汕片</li>
            <li>揭阳话 - 潮汕片</li>
            <li>澄海话 - 潮汕片</li>
            <li>饶平话 - 潮汕片</li>
          </ul>
        </Accordion.Content>

        <Accordion.Title active={activeIndex === 6} index={6} onClick={this.handleClick}>
          <Icon name='dropdown' />
          客家话
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 6}>
          <ul>
            <li>客家话通音（通行于粤东、赣南、广西、海南、台湾、东南亚等地）</li>
            <li>梅县话 - 粤台片</li>
          </ul>
        </Accordion.Content>

        <Accordion.Title active={activeIndex === 7} index={7} onClick={this.handleClick}>
          <Icon name='dropdown' />
          晋语
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 7}>
          <ul>
            <li>嘉乐泉话</li>
            <li>芮城话</li>
          </ul>
        </Accordion.Content>
      </Accordion>
    )
  }
}