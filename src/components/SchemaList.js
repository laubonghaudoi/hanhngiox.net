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
          官話
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 0}>
          <List>
            <List.Item>
              中原官話
              <List>
                <List.Item>洛陽話 - 洛嵩片</List.Item>
                <List.Item>鄭州話 - 鄭開片</List.Item>
                <List.Item>棗莊話 - 徐淮片</List.Item>
              </List>
            </List.Item>
            <List.Item>
              江淮官話
              <List>
                <List.Item>南京話 - 洪巢片</List.Item>
                <List.Item>南通話 - 通泰片</List.Item>
                <List.Item>如皋話 - 通泰片</List.Item>
                <List.Item>南通話 - 通泰片</List.Item>
                <List.Item>如皋話 - 通泰片</List.Item>
              </List>
            </List.Item>
            <List.Item>
              西南官話
              <List>
                <List.Item>黃岡話 - 黃孝片</List.Item>
                <List.Item>鄂城話 - 黃孝片</List.Item>
                <List.Item>四川話通音</List.Item>
                <List.Item>成都話 - 成渝片</List.Item>
                <List.Item>重慶話 - 成渝片</List.Item>
                <List.Item>宜賓話 - 灌赤片</List.Item>
                <List.Item>自貢話 - 灌赤片</List.Item>
                <List.Item>貴陽話 - 川黔片</List.Item>
                <List.Item>武漢話 - 武天片</List.Item>
              </List>
            </List.Item>
          </List>
        </Accordion.Content>

        <Accordion.Title active={activeIndex === 1} index={1} onClick={this.handleClick}>
          <Icon name='dropdown' />
          吳語
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 1}>
          <List>
            <List.Item>上海話 - 太湖片</List.Item>
            <List.Item>蘇州話 - 太湖片</List.Item>
            <List.Item>寧波話 - 太湖片</List.Item>
            <List.Item>海寧話 - 太湖片</List.Item>
            <List.Item>桐鄉話 - 太湖片</List.Item>
            <List.Item>海鹽話 - 太湖片</List.Item>
            <List.Item>嘉善話 - 太湖片</List.Item>
            <List.Item>嘉興話 - 太湖片</List.Item>
            <List.Item>松江話 - 太湖片</List.Item>
            <List.Item>永嘉話 - 甌江片</List.Item>
          </List>
        </Accordion.Content>

        <Accordion.Title active={activeIndex === 2} index={2} onClick={this.handleClick}>
          <Icon name='dropdown' />
          粵語
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 2}>
          <List>
            <List.Item>廣州話 - 廣府片</List.Item>
            <List.Item>梧州話 - 廣府片</List.Item>
            <List.Item>南寧話 - 邕潯片</List.Item>
            <List.Item>藤縣話 - 勾漏片</List.Item>
            <List.Item>貴港話 - 勾漏片</List.Item>
          </List>
        </Accordion.Content>

        <Accordion.Title active={activeIndex === 3} index={3} onClick={this.handleClick}>
          <Icon name='dropdown' />
          閩東語
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 3}>
          <List>
            <List.Item>福州話 - 侯官片</List.Item>
          </List>
        </Accordion.Content>

        <Accordion.Title active={activeIndex === 4} index={4} onClick={this.handleClick}>
          <Icon name='dropdown' />
          莆仙話
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 4}>
          <List>
            <List.Item>莆田話</List.Item>
          </List>
        </Accordion.Content>

        <Accordion.Title active={activeIndex === 5} index={5} onClick={this.handleClick}>
          <Icon name='dropdown' />
          閩南語
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 5}>
          <List>
            <List.Item>廈門話 - 泉漳片（通行於閩南、臺灣、東南亞等地）</List.Item>
            <List.Item>泉州話 - 泉漳片</List.Item>
            <List.Item>漳州話 - 泉漳片</List.Item>
            <List.Item>臺灣話 - 泉漳片</List.Item>
            <List.Item>潮州話 - 潮汕片（通行於潮汕、港澳、東南亞等地）</List.Item>
            <List.Item>汕頭話 - 潮汕片</List.Item>
            <List.Item>潮陽話 - 潮汕片</List.Item>
            <List.Item>揭陽話 - 潮汕片</List.Item>
            <List.Item>澄海話 - 潮汕片</List.Item>
            <List.Item>饒平話 - 潮汕片</List.Item>
          </List>
        </Accordion.Content>

        <Accordion.Title active={activeIndex === 6} index={6} onClick={this.handleClick}>
          <Icon name='dropdown' />
          客家話
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 6}>
          <List>
            <List.Item>客家話通音（通行於粵東、贛南、廣西、海南、臺灣、東南亞等地）</List.Item>
            <List.Item>梅縣話 - 粵臺片</List.Item>
          </List>
        </Accordion.Content>

        <Accordion.Title active={activeIndex === 7} index={7} onClick={this.handleClick}>
          <Icon name='dropdown' />
          晉語
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 7}>
          <List>
            <List.Item>嘉樂泉話</List.Item>
            <List.Item>芮城話</List.Item>
          </List>
        </Accordion.Content>
      </Accordion>
    )
  }
}