import React from 'react'
import HomepageLayout from '../layouts/HomepageLayout'

const NotFoundPage = () => (
  <HomepageLayout>
    <h2><span role="img" aria-label="Forbidden sign">🚫</span> Not found</h2>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </HomepageLayout>
)

export default NotFoundPage
