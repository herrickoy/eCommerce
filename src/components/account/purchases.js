import React, { Component } from 'react';

class Purchases extends Component {
  constructor(props) {
      super(props)

      this.state = {
          
      }
  }

  render() {
        const { className } = this.props;

        return (
            <div className={`${className} purchases`}>
                purchases here
            </div>
        )
  }
}

export default Purchases;