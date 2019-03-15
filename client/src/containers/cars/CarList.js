import React, { Component } from 'react'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'

import ListCars from './_ListCars'
import SearchForm from './_SearchForm'

const GET_CARS_LIST = gql`
  query cars($keywords: String) {
    cars(keywords: $keywords) {
      id
      model
      description
    }
  }
`

class CarList extends Component {
  render () {
    const { params: { keywords } } = this.props.match

    return(
      <div className='car-list'>
        <h1 className='title is-3 has-text-centered'>List of all cars</h1>
        <hr />

        <div className="content">
          <SearchForm initialKeywords={keywords} />
        </div>

        <Query query={GET_CARS_LIST} variables={{ keywords }}>
          {({ loading, error, data }) => {
            if (loading) return 'Loading...'
            if (error) return `Error! ${error.message}`

            return <ListCars cars={data.cars} />
          }}
        </Query>

      </div>
    )
  }
}

export default CarList
