import PropTypes from 'prop-types'
import React, { Component } from 'react'

import { Link } from 'gatsby';
import {
  Dropdown,
  Icon,
  Image,
  Menu,
  Responsive,
  Segment,
  Visibility,
} from 'semantic-ui-react'

// Heads up!
// We using React Static to prerender our docs with server side rendering, this is a quite simple solution.
// For more advanced usage please check Responsive docs under the "Usage" section.
const getWidth = () => {
  const isSSR = typeof window === 'undefined'

  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth
}

/* Heads up!
 * Neither Semantic UI nor Semantic UI React offer a responsive navbar, however, it can be implemented easily.
 * It can be more complicated, but you can create really flexible markup.
 */
class HomepageDesktopContainer extends Component {
  state = {}

  hideFixedMenu = () => this.setState({ fixed: false })
  showFixedMenu = () => this.setState({ fixed: true })

  render() {
    const { children } = this.props
    const { fixed } = this.state

    return (
      <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <Segment
            inverted
            textAlign='center'
            vertical
          >
            <Menu
              fixed={fixed ? 'top' : null}
              inverted={!fixed}
              secondary={!fixed}
              size='large'
            >
              <Menu.Menu>
                <Menu.Item></Menu.Item>
                <Menu.Item></Menu.Item>
                <Menu.Item as={Link} to='/'>
                  <Image size='mini' src='/logo.png' style={{ marginRight: '1.5em', marginTop:'2em' }} />
                  HanhNgiox
                </Menu.Item>
              </Menu.Menu>

              <Menu.Menu position='right'>
                <Menu.Item as={Link} to='/install'>
                  <Icon name='compass'/>
                  開始
                </Menu.Item>
                <Menu.Item as={Link} to='/schema'>
                  <Icon name='th'/>
                  拼音方案
                </Menu.Item>
                <Menu.Item as={Link} to='/blog'>
                  <Icon name='book'/>
                  雜談
                </Menu.Item>
                <Menu.Item as={Link} to='/about'>
                  <Icon name='question circle'/>
                  關於
                </Menu.Item>

                <Dropdown item simple direction='left' text='界面語言'>
                  <Dropdown.Menu color='blue'>
                    <Dropdown.Item>國語（普通話）繁體</Dropdown.Item>
                    <Dropdown.Item>国语（普通话）简体</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item>粵語 繁體</Dropdown.Item>
                    <Dropdown.Item>粤语 简体</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Menu.Menu>
            </Menu>
          </Segment>
        </Visibility>

        {children}
      </Responsive>
    )
  }
}

HomepageDesktopContainer.propTypes = {
  children: PropTypes.node,
}

export default HomepageDesktopContainer;