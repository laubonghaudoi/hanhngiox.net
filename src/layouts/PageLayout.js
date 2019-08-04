import { graphql, Link, StaticQuery } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import Helmet from 'react-helmet';
import 'semantic-ui-less/semantic.less';
import { Container, 
  Dropdown, 
  Grid, 
  Image, 
  Menu} from 'semantic-ui-react';


const LinkedItem = ({ children, ...props }) => (
  <Menu.Item as={Link} activeClassName='active' {...props}>{children}</Menu.Item>
)

const PageLayout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}

    render={data => (
      <div>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        />

        <Menu inverted fixed='top'>
          <Container>
            <Menu.Item as={Link} to='/'>
              <Image size='mini' src='/logo.png' style={{ marginRight: '1.5em' }} />
              {data.site.siteMetadata.title}
            </Menu.Item>

            <Menu.Menu position='right'>
              <Menu.Item as={Link} to='/page-2'>Page-2</Menu.Item>
              <Menu.Item as={Link} to='/404'>404</Menu.Item>
              <Dropdown item simple text='Dropdown'>
                <Dropdown.Menu>
                  <Dropdown.Item>List Item</Dropdown.Item>
                  <Dropdown.Item>List Item</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Header>Header Item</Dropdown.Header>
                  <Dropdown.Item>
                    <i className='dropdown icon' />
                    <span className='text'>Submenu</span>
                    <Dropdown.Menu>
                      <Dropdown.Item>List Item</Dropdown.Item>
                      <Dropdown.Item>List Item</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Menu.Menu>
          </Container>
        </Menu>

        <Container style={{ marginTop: '7em' }}>
          <Grid relaxed stackable>
            <Grid.Column mobile={16} tablet={4} computer={4}>
              <Menu vertical fluid>
                <LinkedItem to='/' exact>Home</LinkedItem>
                <LinkedItem to='/page-2'>Second Page</LinkedItem>
                <LinkedItem to='/404'>404 Example Page</LinkedItem>
              </Menu>
            </Grid.Column>

            <Grid.Column mobile={16} tablet={8} computer={8}>
              {children}
            </Grid.Column>
          </Grid>
        </Container>
      </div>
    )}
  />
)

PageLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default PageLayout
