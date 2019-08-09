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

import HomepageHeading from '../HomepageHeading';
import Navbar from '../Navbar';

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
            style={{ 
              backgroundImage: `url(${"/bk.jpg"})`,
              backgroundSize: 'cover',
              height: '100vh'
            }}
            vertical
          >
            <Menu
              fixed={fixed ? 'top' : null}
              inverted={!fixed}
              secondary={!fixed}
              borderless
              fluid
              style={{
                height:'3em',
                paddingLeft: '6em',
                paddingRight: '6em'
              }}
            >
              <Navbar/>
            </Menu>

            <HomepageHeading />
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