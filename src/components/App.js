import React, { Component } from 'react'
import AccountContainer from './AccountContainer'
import Search from './Search'
import '../stylesheets/App.css'


// endpoint

const API = "https://boiling-brook-94902.herokuapp.com/transactions"

class App extends Component {
  state = { transactionData: []}

  componentDidMount() {

    fetch(API)
    .then(r => r.json())
    .then(transactions => {
      this.setState(prevState => {
        return { transactionData: transactions}
      })
    })
  }

  render() {
    console.log(this.state.transactionData)
    return (
      <div className="ui raised segment">
        <div className="ui segment violet inverted">
          <h2>The Royal Bank of Flatiron</h2>
        </div>

        <AccountContainer  transactions={this.state.transactionData}/>

      </div>
    )
  }
}

export default App
