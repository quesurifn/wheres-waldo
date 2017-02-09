import React, { Component } from 'react'
import Timer from './timer'

class Level2 extends Component {

    render () {
      return (
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="gameBoard">
                <img className="img-responsive" src={require('../images/waldo2.jpg')} alt="Waldo" />
                <img className="waldo" src={require('../images/thisWaldo.jpg') } alt="Waldo"/>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="timer">
                <Timer start={Date.now()}/>
              </div>
            </div>
          </div>
        </div>
        ) // return
      } // render
    } //component

    export default Level2
