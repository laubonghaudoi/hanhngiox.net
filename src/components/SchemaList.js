import React, { Component } from 'react'
import { Accordion, Icon } from 'semantic-ui-react'

export default class SchemaList extends Component {
  state = { activeIndex: 0 }

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
            <li>洛阳话 - 洛嵩片</li>
            <li>郑州话 - 郑开片</li>
            <li>枣庄话 - 徐淮片</li>
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
      </Accordion>
    )
  }
}