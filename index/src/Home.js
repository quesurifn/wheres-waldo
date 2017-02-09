import React, { Component } from 'react'
import Name from './Name'

class Home extends Component {
  render() {
    return (
      <div className="container">
        <div className="JumboTron text-center">
          <div className="container text-center">
            <h1>Welcome To Where's Waldo</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }
}


export default Home
