import PropTypes from 'prop-types'
import React, { Component } from 'react'
import {
  Container,
  Dropdown,
  Icon,
  Menu,
  Responsive,
  Segment,
  Sidebar,
} from 'semantic-ui-react'

import { Link } from 'gatsby';

import HomepageHeading from '../HomepageHeading';

// Heads up!
// We using React Static to prerender our docs with server side rendering, this is a quite simple solution.
// For more advanced usage please check Responsive docs under the "Usage" section.
const getWidth = () => {
  const isSSR = typeof window === 'undefined'

  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth
}


class HomepageMobileContainer extends Component {
  state = {}

  handleSidebarHide = () => this.setState({ sidebarOpened: false })

  handleToggle = () => this.setState({ sidebarOpened: true })

  render() {
    const { children } = this.props
    const { sidebarOpened } = this.state

    return (
      <Responsive
        as={Sidebar.Pushable}
        getWidth={getWidth}
        maxWidth={Responsive.onlyMobile.maxWidth}
      >
        <Sidebar
          as={Menu}
          animation='push'
          inverted
          onHide={this.handleSidebarHide}
          vertical
          visible={sidebarOpened}
        >
          <Menu.Item as={Link} to='/install'>
            <Icon name='compass' />
            開始
          </Menu.Item>
          <Menu.Item as={Link} to='/schema'>
            <Icon name='th' />
            方案
          </Menu.Item>
          <Menu.Item as={Link} to='/blog'>
            <Icon name='book' />
            雜談
          </Menu.Item>
          <Menu.Item as={Link} to='/about'>
            <Icon name='question circle' />
            關於
          </Menu.Item>
        </Sidebar>

        <Sidebar.Pusher dimmed={sidebarOpened}>
          <Segment
            inverted
            textAlign='center'
            style={{ minHeight: 350, padding: '1em 0em', backgroundImage: `url(${"/bk.png"})` }}
            vertical
            fluid
          >
            <Container>
              <Menu inverted pointing secondary size='large'>
                <Menu.Item onClick={this.handleToggle}>
                  <Icon name='sidebar' />
                </Menu.Item>
                <Menu.Item as={Link} to='/'>
                  HanhNgiox
                </Menu.Item>
                <Menu.Menu position='right'>
                  <Dropdown item simple direction='left' text='界面語言'>
                    <Dropdown.Menu position='right' color='blue'>
                      <Dropdown.Item>普通話（國語）</Dropdown.Item>
                      <Dropdown.Item>粵語</Dropdown.Item>
                      <Dropdown.Item>吳語</Dropdown.Item>
                      <Dropdown.Item>客家話</Dropdown.Item>
                      <Dropdown.Item>閩南語</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Menu.Menu>
              </Menu>
            </Container>
            <HomepageHeading mobile />
          </Segment>

          {children}
        </Sidebar.Pusher>
      </Responsive>
    )
  }
}

HomepageMobileContainer.propTypes = {
  children: PropTypes.node,
}

export default HomepageMobileContainer