import React, { Component } from 'react';

// same as vv
// const Component = React.Component;

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { term: '' };
  }

  render() {
    return (
      <div className='search-bar'>
        <input
          value={this.state.term}
          onChange={ event => this.onInputChange(event.target.value) } />
      </div>
    );
  };

  onInputChange(term) {
    this.setState({ term });
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar;

// simple verison with callback function

// class SearchBar extends Component {
//   render() {
//     return <input onChange={this.onInputChange} />;
//
//     // create a new input element and pass it a prop 'onChange'
//     // with a value of the onInputChange
//   }
//
//   onInputChange (event) {
//     console.log(event.target.value);
//   }
//   //this is the event handler
//
// }

// class based component
// import React from 'react';
//
// class SearchBar extends React.component {
//   render() {
//     return <input />;
//   }
// };
//
// export default SearchBar;

// plain functional component
// import React from 'react';
//
// const SearchBar = () => {
//   return <input />;
// };
//
// export default SearchBar;
