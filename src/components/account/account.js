import React, { Component } from 'react'

class Account extends Component {
  constructor(props) {
      super(props)

      this.state = {
          
      }
  }

  renderContent() {
      return <h1> content </h1>
  }

  render() {
      return (
          <div>
              {this.renderContent()}
          </div>
      )
  }
}

export default Account;