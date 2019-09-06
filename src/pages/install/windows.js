import React, { Component } from 'react'
import PropTypes from 'prop-types';
import {
  Grid,
  Header,
  Menu
} from 'semantic-ui-react';
import Link from 'gatsby-plugin-transition-link';
import InstallPageLayout from '../../layouts/InstallPageLayout';

if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]')
}

class WindowsInstallPage extends Component { 
  state = { activeItem: 'account' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  render() {
    const { activeItem } = this.state
    return (
      <InstallPageLayout
        activeItem='windows'
      >
        <Grid columns='equal' padded stackable>
          <Grid.Column width={13}>
            
            <p>Before the data update, we use the 13 tables of kg_melded which are all from the english wikipedia pages. We know that the data table has two columns: name and ipa. The name column contain strings, while the ipa column contains the pronunciation in different languages. Because the 13 tables are all from English wikipedia, the name column is assumed to contain only legitimate English words (despite noisy data), while the ipa column are supposed to be mostly ipa transcriptions for the English language (there could be multiple ipa transcriptions for a single name, because many words such as Los Angeles can be pronounced in both an English or Spainish way). In short, the mappings we create are in the below format:</p>
            <p>Before the data update, we use the 13 tables of kg_melded which are all from the english wikipedia pages. We know that the data table has two columns: name and ipa. The name column contain strings, while the ipa column contains the pronunciation in different languages. Because the 13 tables are all from English wikipedia, the name column is assumed to contain only legitimate English words (despite noisy data), while the ipa column are supposed to be mostly ipa transcriptions for the English language (there could be multiple ipa transcriptions for a single name, because many words such as Los Angeles can be pronounced in both an English or Spainish way). In short, the mappings we create are in the below format:</p>
            <p>Before the data update, we use the 13 tables of kg_melded which are all from the english wikipedia pages. We know that the data table has two columns: name and ipa. The name column contain strings, while the ipa column contains the pronunciation in different languages. Because the 13 tables are all from English wikipedia, the name column is assumed to contain only legitimate English words (despite noisy data), while the ipa column are supposed to be mostly ipa transcriptions for the English language (there could be multiple ipa transcriptions for a single name, because many words such as Los Angeles can be pronounced in both an English or Spainish way). In short, the mappings we create are in the below format:</p>
            <p>Before the data update, we use the 13 tables of kg_melded which are all from the english wikipedia pages. We know that the data table has two columns: name and ipa. The name column contain strings, while the ipa column contains the pronunciation in different languages. Because the 13 tables are all from English wikipedia, the name column is assumed to contain only legitimate English words (despite noisy data), while the ipa column are supposed to be mostly ipa transcriptions for the English language (there could be multiple ipa transcriptions for a single name, because many words such as Los Angeles can be pronounced in both an English or Spainish way). In short, the mappings we create are in the below format:</p>
            <Header size="large" as="h2" id='step2a'>
              <Header.Content>Windows</Header.Content>
            </Header>
            <h2 id='step2a'><span role="img" aria-label="Eyes">👀</span> Hello from the second page.</h2>
          </Grid.Column>
          <Grid.Column width={3}>
            <Menu 
              vertical
              text
              style={{
                position:'fixed',
                width:'14em'
              }}
            >
              <Menu.Item
                name='step1'
                active={activeItem === 'step1'}
                onClick={this.handleItemClick}
                as={Link}
                to='/install/windows/#step2a'
              >
                1 安装小狼毫
              </Menu.Item>
              <Menu.Item
                name='step2a'
                active={activeItem === 'step2a'}
                onClick={this.handleItemClick}
              >
                2 快捷启用方案
              </Menu.Item>
              <Menu.Item
                name='step2b'
                active={activeItem === 'step2b'}
                onClick={this.handleItemClick}
              >
                2 部署方案
              </Menu.Item>
              <Menu.Item
                name='step3'
                active={activeItem === 'step3'}
                onClick={this.handleItemClick}
              >
                3 部署方案
              </Menu.Item>
            </Menu>
          </Grid.Column>
        </Grid>
      </InstallPageLayout >
    )
  }
}

WindowsInstallPage.propTypes = {
  children: PropTypes.node.isRequired,
}

export default WindowsInstallPage;
