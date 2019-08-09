import PropTypes from 'prop-types'
import React from 'react'
import {
  Container,
  Header,
  Icon,
} from 'semantic-ui-react'


/* eslint-disable react/no-multi-comp */
/* Heads up! HomepageHeading uses inline styling, however it's not the best practice. Use CSS or styled components for
 * such things.
 */
const HomepageHeading = ({ mobile }) => (
  <Container fluid>
    <Header
      as='h1'
      content='漢語方言拼音輸入'
      inverted
      style={{
        fontSize: mobile ? '2em' : '4em',
        fontWeight: 'normal',
        marginBottom: 0,
        marginTop: mobile ? '1.5em' : '15%',
      }}
    />
    <Header
      as='h2'
      content='拼音，不只屬於普通話'
      inverted
      style={{
        fontSize: mobile ? '1.5em' : '1.7em',
        fontWeight: 'normal',
        marginTop: mobile ? '0.5em' : '1.5em',
      }}
    />
    
    <Icon name='chevron down' size='huge'/>
  </Container>
)

HomepageHeading.propTypes = {
  mobile: PropTypes.bool,
}

export default HomepageHeading;