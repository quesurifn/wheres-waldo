import React, { Component } from 'react'
import { Link } from 'react-router'

class Level extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-4 col-md-offset-1">
          <div className="card">
            <Link to='level1'><img className="img-responsive" src={require('../images/waldo1.jpg')} alt="gameboard 1"/></Link>
            <h4 className="text-center">Easy</h4>
          </div>
      </div>
        <div className="col-md-4 col-md-offset-2">
          <div className="card">
            <Link to='level2'><img className="img-responsive" src={require('../images/waldo2.jpg')} alt="gameboard2"/></Link>
            <h4 className="text-center">Hard</h4>
          </div>
        </div>
      </div>
    )
  }
}

export default Level
