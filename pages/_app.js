import App from 'next/app'
import React from 'react'
import withReduxStore from '../lib/with-redux-store'
import { Provider } from 'react-redux'

class MyApp extends App {
  render () {
    const { Component, pageProps, reduxStore } = this.props
    return (
      <React.Fragment>
        <Provider store={reduxStore}>
          <Component {...pageProps} />
        </Provider>
        <style global jsx>{`
              html,
              body {
                font-family: Roboto;
                margin: 0;
                padding: 0;
                display: flex;
                height: 100vh;
                justify-content: center;
                align-items: center;
                background-color: #ecebeb;
              }
          `}</style>
      </React.Fragment>
    )
  }
}

export default withReduxStore(MyApp)
