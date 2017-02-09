import React, { Component } from 'react'
import Timer from './timer'

class Level1 extends Component {

    render () {
      return (
      <div>
      <div id="gameBoard">
        <img id="waldo1" src={require('../images/waldo1(1).jpg')} alt="waldo"/>
      </div>
      <h2 id="coords"></h2>
      <Timer start={Date.now()}/>
      </div>
        ) // return
      } // render
    } //component

    export default Level1
