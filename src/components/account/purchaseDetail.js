import React, { Component } from 'react';

class PurchaseDetail extends Component {
  constructor(props) {
      super(props)

      this.state = {
          
      }
  }

  render() {
        const { className } = this.props;

        return (
            <div className={`${className} purchase-detail`}>
                purchase detail
            </div>
        )
  }
}

export default PurchaseDetail;