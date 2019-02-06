import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
import {transactions} from '../transactionsData'

class AccountContainer extends Component {

  constructor() {
    super()

  }
  state = { transactions: transactions,
            search: ""}

  handleChange(event) {
    let filteredTransactions = this.state.transactions
    filteredTransactions = filteredTransactions.filter((transaction) => {
      return transactions // was not able to finsih the filtering 
    })
  }

  render() {

    return (
      <div>
        <Search transactions={this.state.transactions} handleChange={this.handleChange}/>
        <TransactionsList transactions={this.state.transactions}/>
      </div>
    )
  }
}

export default AccountContainer
