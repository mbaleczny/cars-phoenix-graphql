import React, { Component } from 'react'
import gql from 'graphql-tag'
import { Link } from 'react-router-dom'
import { Query } from 'react-apollo'

const GET_CARS_LIST = gql`
  query cars {
    cars {
      id
      model
      description
    }
  }
`

class CarList extends Component {
  render () {
    return(
      <Query query={GET_CARS_LIST}>
        {({ loading, error, data }) => {
          if (loading) return 'Loading...'
          if (error) return `Error! ${error.message}`

          return (
            <div className='car-list'>
              <h1 className='title is-3 has-text-centered'>List of all cars</h1>
              <hr />
              <div className='cars'>
                {data.cars.map(car => (
                  <div key={car.id} className='car'>
                    <Link to={`/cars/${car.id}`} className="header">
                      <h2 className='title is-4'>{car.model}</h2>
                    </Link>
                    <h3>{car.description}</h3>
                  </div>
                    ))}
              </div>
            </div>
          )
        }}
      </Query>
    )
  }
}

export default CarList
