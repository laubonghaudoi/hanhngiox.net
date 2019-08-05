import { graphql, Link, StaticQuery } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import Helmet from 'react-helmet';
import 'semantic-ui-less/semantic.less';
import { Container, 
  Dropdown, 
  Grid,
  Icon,
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

        <Menu inverted pointing fixed='top' size='large'>
          <Container>
            <Menu.Item as={Link} to='/'>
              <Image size='mini' src='/logo.png' style={{ marginRight: '1.5em' }} />
              {data.site.siteMetadata.title}
            </Menu.Item>

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
              <Dropdown item simple text='界面語言'>
                <Dropdown.Menu>
                  <Dropdown.Item>國語（普通話）- 繁體</Dropdown.Item>
                  <Dropdown.Item>国语（普通话）- 简体</Dropdown.Item>
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
                <Menu.Item as={Link} to='/install'>開始</Menu.Item>
                <Menu.Item as={Link} to='/schema'>拼音方案</Menu.Item>
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
