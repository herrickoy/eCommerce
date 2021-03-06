import React, { Component } from 'react';

import PageTitle from '../pageTitle';
import AccountInformationForm from './accountInfoForm';

class AccountInformation extends Component {
  constructor(props) {
      super(props)

      this.state = {
          
      }
  }

    onSubmit = (fields) => {
      console.log(fields);
    
    }

  render() {
      return (
          <div className='account-information'>
              <PageTitle className='account-information' title='Account Information'/>
              <AccountInformationForm onSubmit={this.onSubmit} className='account-information__form'/>
              

          </div>
      )
  }
}

export default AccountInformation;