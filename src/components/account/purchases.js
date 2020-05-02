import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as actions from '../../actions';

class Purchases extends Component {
    constructor(props) {
        super(props)

        this.state = {
          
        }
    }

    componentDidMount() {
        this.props.fetchUserPurchases();
    }

  render() {
        const { className } = this.props;

        return (
            <div className={`${className} purchases`}>
                {
                    this.props.purchases.map(purchase => {
                        return (
                            <div key={purchase._id} className='purchases_purchase purchase'>
                                <img className='purchase_img' src='http://via.placeholder.com/80x80'/>
                            </div>
                        )
                    })
                }
            </div>
        )
  }
}

function mapStateToProps(state) {
    const { purchases } = state.user;
    return { purchases };
}

Purchases = connect(mapStateToProps, actions)(Purchases);

export default Purchases;