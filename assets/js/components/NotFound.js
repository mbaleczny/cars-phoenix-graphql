import React, { Component } from 'react'

export default class NotFound extends Component {
  render () {
    return (
      <div className='content'>
        <h2 className='title is-2 has-text-centered'>404 page not found</h2>
        <p className='has-text-centered'>
          Page you are looking for doesn't exists
        </p>
      </div>
    )
  }
}
