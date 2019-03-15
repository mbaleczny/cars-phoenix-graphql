import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import Header from './Header'
import NotFound from '../../components/NotFound'
import CarList from '../cars/CarList'
import Car from '../cars/Car'
import SearchCar from '../cars/SearchCar'

import '../../assets/stylesheets/css/app.css'

export default class App extends Component {
  render () {
    return (
      <div>
        <Header />
        <main role='main'>
          <section className='section'>
            <div className='container'>
              <div className='columns'>
                <div className='column is-offset-2 is-8'>
                  <Switch>
                    <Route path='/' exact component={CarList} />
                    <Route path='/cars/search/:keywords' component={SearchCar} />
                    <Route path='/cars/:id' component={Car} />
                    <Route component={NotFound} />
                  </Switch>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    )
  }
}
