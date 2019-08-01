import React, { Component } from 'react';

import Button from '../Button';

class ToggleText extends Component {
  constructor (props) {
    super(props);
    this.state = {
      isShownText: true,
      numbers: '210885'
    }
  }

  //toggleIsShownText = () => this.setState(({ isShownText }) =>  ({ isShownText: !isShownText }));
  toggleIsShownText = () => this.setState({ 
    isShownText: !this.state.isShownText,
  });

  changeNumber = () => this.setState({ 
    numbers: '121216'
  });

  changeNumberBack = () => this.setState({ 
    numbers: '210885'
  });

  render(){
    const { isShownText, numbers } = this.state;
    return(
      <div>
        <Button className={"button"} onClick={this.toggleIsShownText}>Click to Toggle</Button>
        { isShownText && <h2>Text goes here</h2> }
        <hr />
        <span onMouseOver={this.changeNumber} onMouseOut={this.changeNumberBack}>Hover to Toggle Change</span>
        <h3>{numbers}</h3>
      </div>
    )
  }
}

export default ToggleText;