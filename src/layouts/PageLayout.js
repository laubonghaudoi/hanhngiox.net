import { graphql, StaticQuery } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import 'semantic-ui-less/semantic.less';

import PageContainer from '../components/containers/PageContainer';
import Footer from '../components/Footer';

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
        <PageContainer>
          {children}
        </PageContainer>
        <Footer/>
      </div>
    )}
  />
)

PageLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default PageLayout
