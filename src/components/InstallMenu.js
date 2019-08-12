import React, { Component } from 'react';
import {
  Icon,
  Menu,
} from 'semantic-ui-react'
import 'semantic-ui-less/semantic.less';
import Link from 'gatsby-plugin-transition-link';


class InstallMenu extends Component {
  constructor(props) {
    super(props);
    this.handleItemClick = this.handleItemClick.bind(this);
  }

  handleItemClick(e, { name }) {
    this.props.onActiveChange(name);
  }

  render() {
    return (
      <Menu
        vertical
        inverted
        style={{
          marginLeft: '10%',
          marginRight: '2em'
        }}
      >
        <Menu.Item
          as={Link}
          to='/install/windows'
          name='windows'
          color='blue'
          active={this.props.activeItem === 'windows'}
          onClick={this.handleItemClick}
        >
          <Icon name='windows' />
          Windows
            </Menu.Item>
        <Menu.Item
          as={Link}
          to='/install/mac'
          name='mac'
          color='grey'
          active={this.props.activeItem === 'mac'}
          onClick={this.handleItemClick}
        >
          <Icon name='apple' />
          macOS
            </Menu.Item>
        <Menu.Item
          as={Link}
          to='/install/linux'
          name='linux'
          color='orange'
          active={this.props.activeItem === 'linux'}
          onClick={this.handleItemClick}
        >
          <Icon name='linux' />
          Linux
            </Menu.Item>
        <Menu.Item
          as={Link}
          to='/install/ios'
          name='ios'
          color='grey'
          active={this.props.activeItem === 'ios'}
          onClick={this.handleItemClick}
        >
          <Icon name='apple' />
          iOS
          </Menu.Item>
        <Menu.Item
          as={Link}
          to='/install/android'
          name='android'
          color='green'
          active={this.props.activeItem === 'android'}
          onClick={this.handleItemClick}
        >
          <Icon name='android' />
          Android
            </Menu.Item>
      </Menu>
    )
  }
}

export default InstallMenu;