import React, { Component } from 'react';
import {
  Divider,
  Icon,
  Menu,
} from 'semantic-ui-react'
import 'semantic-ui-less/semantic.less';
import Link from 'gatsby-plugin-transition-link';
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
            <Menu.Item header>官话</Menu.Item>
            <Divider/>
            <Menu.Item header>晉语</Menu.Item>
            <Divider/>
            <Menu.Item header>吴语</Menu.Item>
            <Divider/>
            <Menu.Item header>徽语</Menu.Item>
            <Divider/>
            <Menu.Item header>赣语</Menu.Item>
            <Menu.Item>暂缺</Menu.Item>
            <Divider/>
            <Menu.Item header>湘语</Menu.Item>
            <Divider/>
            <Menu.Item header>闽北语</Menu.Item>
            <Divider/>
            <Menu.Item header>闽南语</Menu.Item>
            <Divider/>
            <Menu.Item header>闽东语</Menu.Item>
            <Divider/>
            <Menu.Item header>闽中语</Menu.Item>
            <Divider/>
            <Menu.Item header>莆仙语</Menu.Item>
            <Divider/>
            <Menu.Item header>客家话</Menu.Item>
            <Menu.Item 
                name='syndict'
                as={Link} 
                to="/schema/syndict"
                color='blue'
                active={this.props.activeItem === 'syndict'}
                onClick={this.handleItemClick}

            >
                薪典
            </Menu.Item>
            <Divider/>
            <Menu.Item header>粤语</Menu.Item>
            <Menu.Item 
                active={this.props.activeItem === 'jyutping'}
                onClick={this.handleItemClick}
                as={Link} 
                name='jyutping'
                to="/schema/jyutping"
                color='blue'
            >
                粵拼
            </Menu.Item>
            <Divider/>
        </Menu>
    )
  }
}

export default SchemaMenu;