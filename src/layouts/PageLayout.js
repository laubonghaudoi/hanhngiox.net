import { graphql, StaticQuery } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import Helmet from 'react-helmet';
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
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        />
        <PageContainer>
          {children}
          <Footer/>
        </PageContainer>
      </div>
    )}
  />
)

PageLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default PageLayout
