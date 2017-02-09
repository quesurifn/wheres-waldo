import React, { Component } from 'react'
import { hashHistory } from 'react-router'
import styles from '../stylesheets/styles.css'

class Name extends Component {
  constructor() {
    super();
    this.state = {username: ''};
    this.onClickFunction = this.onClickFunction.bind(this);
    this.onUpdateUser = this.onUpdateUser.bind(this);
  }
  static contextTypes = {
     router: React.PropTypes.object
  }

  onClickFunction() {
    this.context.router.push({
       pathname: '/level/' + this.state.username
    })
    }
    onUpdateUser(e) {
       this.setState({username: e.target.value});
    }
  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <div className="nameBox">
            <form className="form-inline">
              <input type="text" className="form-control" placeholder="Desiered Username" onChange={this.onUpdateUser.bind(this)} />
              <button type="button" className="btn btn-success" onClick={ this.onClickFunction.bind(this) }>Submit</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}
export default Name
