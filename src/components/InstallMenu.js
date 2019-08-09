import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {
  Icon,
  Menu,
} from 'semantic-ui-react'
import 'semantic-ui-less/semantic.less';
import { Link } from 'gatsby';


class InstallMenu extends Component {
  state = {
    activeItem: this.state
  };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state
    return (
      <Menu vertical>
        <Menu.Item
          as={Link}
          to='/install'
          name='intro'
          active={activeItem === 'intro'}
          onClick={this.handleItemClick}
        >
          概述
        </Menu.Item>
        <Menu.Item>
          電腦
          <Menu.Menu>
            <Menu.Item
              as={Link}
              to='/install/windows'
              name='windows'
              active={activeItem === 'windows'}
              onClick={this.handleItemClick}
            >
              <Icon name='windows' />
              Windows
            </Menu.Item>
            <Menu.Item
              as={Link}
              to='/install/mac'
              name='mac'
              active={activeItem === 'mac'}
              onClick={this.handleItemClick}
            >
              <Icon name='apple' />
              macOS
            </Menu.Item>
            <Menu.Item
              as={Link}
              to='/install/linux'
              name='linux'
              active={activeItem === 'linux'}
              onClick={this.handleItemClick}
            >
              <Icon name='linux' />
              Linux
            </Menu.Item>
          </Menu.Menu>
        </Menu.Item>
        <Menu.Item>
          手機
        <Menu.Menu>
            <Menu.Item
              as={Link}
              to='/install/ios'
              name='ios'
              active={activeItem === 'ios'}
              onClick={this.handleItemClick}
            >
              <Icon name='app store ios' />
              iOS
          </Menu.Item>
            <Menu.Item
              as={Link}
              to='/install/android'
              name='android'
              active={activeItem === 'android'}
              onClick={this.handleItemClick}
            >
              <Icon name='android' />
              Android
            </Menu.Item>
          </Menu.Menu>
        </Menu.Item>
      </Menu>
    )
  }
}


InstallMenu.propTypes = {
  children: PropTypes.node.isRequired,
}

export default InstallMenu;