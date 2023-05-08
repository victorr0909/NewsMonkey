import React, { Component } from 'react'
import loading from './loading.gif'

export default class Spinner extends Component {
  render() {
    return (
      <div className='text-center'>
        <img alt='loading' src={loading}></img>
      </div>
    )
  }
}
