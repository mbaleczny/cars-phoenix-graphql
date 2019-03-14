import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import logo from '../../assets/images/logo.png'

export default class Header extends Component {
  render () {
    return (
      <header className='header'>
        <div className='container'>
          <nav className='navbar is-primary'>
            <div className='navbar-brand'>
              <Link className='navbar-item' title='Cars!' to='/'>
                <img src={logo} className='cars-logo' alt='cars-app' />
              </Link>
            </div>
          </nav>
        </div>
      </header>
    )
  }
}
