import React, { Component } from 'react';
import axios from 'axios'
import InfoComponent from '../InfoComponent/InfoComponent.js';

class HunterAPI extends Component {
  constructor(props) {
    super(props)
    this.state = {
      domain: 'marketo.com',
      email: '',
      pattern: '',
      api: "d4b66bc4bafc57d1f85cc6fd17f9be6313196178",
      searchQuery: "domain-search?domain=",
      domainQuery: "&api_key=",
    }
  }

  componentDidMount() {
    const endPoint = `${this.state.searchQuery}${this.state.domain}${this.state.domainQuery}${this.state.api}`;
    const url = `https://api.hunter.io/v2/${endPoint}`;

    // TODO: This below is getting ran multiple times so the data is getting mishandled. Need to get it to run one time when the page initially loads.
    // Is it because the component is updating that it is refreshing over and over? Should I push the data down one time into another component?
    axios.get(url).then(response => this.setState({pattern: response.data.data.pattern, email: `${response.data.data.pattern}@${response.data.data.domain}`}))
    console.log(this.state.email)
  }

  render() {


    return (
      <div>
        <header className="App-header">
          <h1 className="App-title">Marketo</h1>
        </header>
        <InfoComponent type='Email' value={this.state.email} />
        {/*<p> Email: {this.state.email}@{this.state.domain} </p>*/}
      </div>
    )
  };
}

export default HunterAPI;
