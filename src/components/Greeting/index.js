import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Greeting extends Component {

  render() {
    return (
      <div>
        <h1>Hello, {this.props.name}</h1>
      </div>
    );
  }
}

Greeting.propTypes = {
  name: PropTypes.string.isRequired
};

// Greeting.defaultProps = {
//   name: 'DefaultProps' 
// }

export default Greeting;