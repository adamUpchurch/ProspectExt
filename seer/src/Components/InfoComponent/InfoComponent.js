import React, { Component } from 'react';

class InfoComponent extends Component {
  constructor(props){
    super(props)
  }
  render() {


    return (
      <div>
        <p>{this.props.type}: {this.props.value}</p>
      </div>
    );
  }
}
export default InfoComponent;
