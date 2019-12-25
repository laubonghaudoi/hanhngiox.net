import React, { Component } from 'react';
import {
  Divider,
  Menu,
} from 'semantic-ui-react';
import 'semantic-ui-less/semantic.less';
import {Link} from 'gatsby';
import '../css/schema.css';

class SchemaMenu extends Component {
  constructor(props) {
    super(props);
    this.handleItemClick = this.handleItemClick.bind(this);
  }

  handleItemClick(e, { name }) {
    this.props.onActiveChange(name);
  }

  render() {
    return (
        <Menu vertical borderless fluid text>
            <Menu.Item header>官話</Menu.Item>
              <Menu.Item 
                name='langjin'
                as={Link} 
                to="/schema/langjin"
                active={this.props.activeItem === 'langjin'}
                onClick={this.handleItemClick}
              >
                南京官話拼音方案
              </Menu.Item>
            <Divider/>
            <Menu.Item header>吳語</Menu.Item>
              <Menu.Item 
                name='yahwe_zaonhe'
                as={Link} 
                to="/schema/yahwe_zaonhe"
                active={this.props.activeItem === 'yahwe_zaonhe'}
                onClick={this.handleItemClick}
              >
                吳語協會式上海話拼音
              </Menu.Item>
            <Divider/>
            <Menu.Item header>粤语</Menu.Item>
            <Menu.Item 
                active={this.props.activeItem === 'jyutping'}
                onClick={this.handleItemClick}
                as={Link} 
                name='jyutping'
                to="/schema/jyutping"
            >
                香港語言學學會粵語拼音方案
            </Menu.Item>
            <Divider/>
            <Menu.Item header>閩南語</Menu.Item>
              <Menu.Item 
                name='dieghv'
                as={Link} 
                to="/schema/dieghv"
                active={this.props.activeItem === 'dieghv'}
                onClick={this.handleItemClick}
              >
                潮語拼音輸入法
              </Menu.Item>
            <Divider/>
            <Menu.Item header>客家話</Menu.Item>
            <Menu.Item 
                name='hakka'
                as={Link} 
                to="/schema/hakka"
                active={this.props.activeItem === 'hakka'}
                onClick={this.handleItemClick}
            >
                薪典
            </Menu.Item>
            <Divider/>
            <Menu.Item header>莆仙語</Menu.Item>
              <Menu.Item>建設中</Menu.Item>
            <Divider/>
            <Menu.Item header>晉語</Menu.Item>
              <Menu.Item>暫缺</Menu.Item>
            <Divider/>
            <Menu.Item header>徽語</Menu.Item>
              <Menu.Item>暫缺</Menu.Item>
            <Divider/>
            <Menu.Item header>赣語</Menu.Item>
              <Menu.Item>暫缺</Menu.Item>
            <Divider/>
            <Menu.Item header>湘語</Menu.Item>
              <Menu.Item>暫缺</Menu.Item>
            <Divider/>
            <Menu.Item header>閩東語</Menu.Item>
              <Menu.Item>暂缺</Menu.Item>
            <Divider/>
            <Menu.Item header>閩北語</Menu.Item>
              <Menu.Item>暫缺</Menu.Item>
            <Divider/>
            <Menu.Item header>閩中語</Menu.Item>
              <Menu.Item>暂缺</Menu.Item>
            <Divider/>
        </Menu>
    )
  }
}

export default SchemaMenu;