import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom'

import logo from '../../../static/images/logo.png'

const toggleIsActive = (ref) => {
  var node = ReactDOM.findDOMNode(ref)
  node.classList.toggle('is-active')
}

export default class Header extends Component {

  toggleNavMenu() {
    toggleIsActive(this.refs.burger)
    toggleIsActive(this.refs.navbarItems)
  }

  render () {
    return (
      <header>
        <div className='header'>
          <nav className='navbar has-background-dark'
              aria-label="main navigation">

            <div className='navbar-brand'>
              <Link className='navbar-item' title='Cars!' to='/'>
                <img src={logo} className='cars-logo' alt='cars-app' />
              </Link>

              <a role="button"
                  ref="burger"
                  className="navbar-burger burger"
                  aria-label="menu"
                  onClick={this.toggleNavMenu.bind(this)}
                  aria-expanded="false"
                  data-target="navbarItems">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
              </a>
            </div>

            <div id="navbarItems" ref="navbarItems" className="navbar-menu">
              <div className="navbar-end">
                <Link className="navbar-item" title="Offers" to='/'>
                  Offers
                </Link>
              </div>
            </div>

          </nav>
        </div>
      </header>
    )
  }
}
