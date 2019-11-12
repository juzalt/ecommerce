import React from 'react'
import { connect } from 'react-redux'
import Product from './product.js'

class Index extends React.Component {
  render () {
    return <Product />
  }
}

export default connect()(Index)
