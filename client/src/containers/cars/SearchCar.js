import React, { Component } from 'react'
import { Query } from 'react-apollo'

import SearchForm from './_SearchForm'
import ListCars from './_ListCars'

import { GET_CARS_LIST } from '../../queries/cars.js'

class SearchCar extends Component {
  render () {
    const { params: { keywords } } = this.props.match

    return (
      <div className='search-cars'>
        <h1 className='title is-3 has-text-centered'>
          Search for : {keywords}
        </h1>
        <hr />
        <div className='content'>
          <SearchForm initialKeywords={keywords} />
        </div>
        <Query query={GET_CARS_LIST} variables={{ keywords }}>
          {({ loading, error, data }) => {
            if (loading) return 'Loading...'
            if (error) return `Error! ${error.message}`
            if (data.cars && data.cars === 0) {
              return <h3>Found no results</h3>
            } else {
              return <ListCars cars={data.cars} />
            }
          }}
        </Query>
      </div>
    )
  }
}

export default SearchCar
