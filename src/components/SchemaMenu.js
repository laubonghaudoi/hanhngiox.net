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
                南京話拼音输入法
              </Menu.Item>
              <Menu.Item 
                name='shupin'
                as={Link} 
                to="/schema/shupin"
                active={this.props.activeItem === 'shupin'}
                onClick={this.handleItemClick}
              >
                蜀拼
              </Menu.Item>
            <Divider/>
            <Menu.Item header>吳語</Menu.Item>
              <Menu.Item 
                name='wugniu_zaonhe'
                as={Link} 
                to="/schema/wugniu_zaonhe"
                active={this.props.activeItem === 'wugniu_zaonhe'}
                onClick={this.handleItemClick}
              >
                上海吳語拼音輸入方案
              </Menu.Item>
              <Menu.Item 
                name='wugniu_soutseu'
                as={Link} 
                to="/schema/wugniu_soutseu"
                active={this.props.activeItem === 'wugniu_soutseu'}
                onClick={this.handleItemClick}
              >
                蘇州吳語拼音輸入方案
              </Menu.Item>
              <Menu.Item 
                name='wugniu_gninpou'
                as={Link} 
                to="/schema/wugniu_gninpou"
                active={this.props.activeItem === 'wugniu_gninpou'}
                onClick={this.handleItemClick}
              >
                寧波吳語拼音輸入方案
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
                粵拼
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
            <Menu.Item header>閩東語</Menu.Item>
              <Menu.Item 
                  name='ciklinbekin'
                  as={Link} 
                  to="/schema/ciklinbekin"
                  active={this.props.activeItem === 'ciklinbekin'}
                  onClick={this.handleItemClick}
              >
                戚林八音
              </Menu.Item>
            <Divider/>
            <Menu.Item header>閩中語</Menu.Item>
              <Menu.Item>暂缺</Menu.Item>
            <Divider/>
            <Menu.Item header>莆仙語</Menu.Item>
              <Menu.Item 
                    name='pouleng'
                    as={Link} 
                    to="/schema/pouleng"
                    active={this.props.activeItem === 'pouleng'}
                    onClick={this.handleItemClick}
                >
                  興化韻莆仙話輸入方案
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
            <Menu.Item header>閩北語</Menu.Item>
              <Menu.Item>暫缺</Menu.Item>
            <Divider/>
        </Menu>
    )
  }
}

export default SchemaMenu;