import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import Header from './Header'
import NotFound from '../../components/NotFound'
import CarList from '../cars/CarList'
import Car from '../cars/Car'
import SearchCar from '../cars/SearchCar'

export default class App extends Component {
  render () {
    return (
      <div>
        <Header />
        <main role='main'>
          <section className='section'>
            <div className='columns container'>
              <div className='column'>
                <Switch>
                  <Route path='/' exact component={CarList} />
                  <Route path='/cars/search/:keywords' component={SearchCar} />
                  <Route path='/cars/:id' component={Car} />
                  <Route component={NotFound} />
                </Switch>
              </div>
            </div>
          </section>
        </main>
      </div>
    )
  }
}
