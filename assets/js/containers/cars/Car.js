import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

const GET_CAR = gql`
  query car($id: Int!) {
    car(id: $id) {
      id
      model
      description
    }
  }
`

export default class Car extends Component {

  render () {
    // console.log(this.props)
    const { id } = this.props.match.params;

    return (
      <Query query={GET_CAR} variables={{ id }}>
        {({ loading, error, data }) => {

          if (loading) return 'Loading...'
          if (error) return `Error! ${error.message}`

          const { car } = data;

          return (
            <div>
              <div key={car.id} className='car'>
                <h2 className='title is-4'>{car.model}</h2>
                <h3>{car.description}</h3>
              </div>
              <div>
                <Link to="/">Back</Link>
              </div>
            </div>
          )
        }}
      </Query>
    )
  }
}
