import PropTypes from 'prop-types'
import React, { Component } from 'react'

import {
  Menu,
  Responsive,
  Visibility,
  Container,
} from 'semantic-ui-react'

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

    return (
      <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <Container
            textAlign='center'
            vertical
            inverted
          >
            <Menu
              fixed='top'
              inverted
              fluid
              borderless
              color='black'
              style={{
                height: '4em',
                paddingLeft: '5%',
                paddingRight:'5%'
              }}
            >
              <Navbar/>
            </Menu>
          </Container>
        </Visibility>
        <Container 
          fluid 
          borderless
          style={{
            // height: '100vh',
          }}
        >
          {children}
        </Container>
      </Responsive>
    )
  }
}

HomepageDesktopContainer.propTypes = {
  children: PropTypes.node,
}

export default HomepageDesktopContainer;