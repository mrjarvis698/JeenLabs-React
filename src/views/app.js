import React from 'react'

import { Helmet } from 'react-helmet'

import './app.css'

const App = (props) => {
  return (
    <div className="app-container">
      <Helmet>
        <title>JeenLabs</title>
        <meta property="og:title" content="JeenLabs" />
      </Helmet>
    </div>
  )
}

export default App
