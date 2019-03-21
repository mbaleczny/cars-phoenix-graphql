import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class ListCars extends Component {
  render () {
    const { cars } = this.props

    if (!cars) {
      return null
    }

    return (
      <div className='cars'>
        {cars.map(car => (
          <div key={car.id} className='car'>
            <Link to={`/cars/${car.id}`} className='header'>
              <h2 className='title is-4'>{car.model}</h2>
            </Link>
            <h3>{car.description}</h3>
          </div>
          ))}
      </div>
    )
  }
}
