// Link.react.js
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Link.css';

const state = {
  hover: 'hover',
  default: 'default',
};

class Link extends Component {
  constructor(props) {
    super(props);

    this.state = {
      class: state.default,
    };
  }

  onMouseEnter = () => {
    this.setState({class: state.hover});
  }

  onMouseLeave = () => {
    this.setState({class: state.default});
  }

  render() {
    return (
      <a
        className={this.state.class}
        href={this.props.page}
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
      >
        {this.props.children}
      </a>
    );
  }
}

// Link.defaultProps = {
//   page: '#' 
// }

Link.propTypes = {
  page: PropTypes.string.isRequired
}

export default Link;