import React from 'react'

class Search extends React.Component { // converted to Class for ease of use with 'this'
  state = { value: ''}
  render () {
  return (
    <div className="ui huge fluid icon input">
      <input onChange={(e) => this.props.handleChange(e)}
        type="text" value={this.state.value}
        placeholder={"Search your Recent Transactions"}
      />
      <i className="circular search link icon"></i>
    </div>
  )
}
}

export default Search
