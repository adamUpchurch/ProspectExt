import React, { Component } from 'react';
import axios from 'axios'
import InfoComponent from '../InfoComponent/InfoComponent.js';

class KickFireAPI extends Component {
  constructor(props) {
    super(props)
    this.state = {
      api: "94d91dc632ffe8a6 ",
      search_query: "company:(city,phone)?website=",
      api_query: "&key=",
      domain: 'marketo.com',
      data: [],
    }
  }
  componentDidMount() {
    const endPoint = `${this.state.search_query}${this.state.domain}${this.state.api_query}${this.state.api}`;
    const url = `http://api.kickfire.com/v2/${endPoint}`;

    // TODO: This below is getting ran multiple times so the data is getting mishandled. Need to get it to run one time when the page initially loads.
    // Is it because the component is updating that it is refreshing over and over? Should I push the data down one time into another component?

    axios.get(url).then(response => this.setState({data: response.data}))


    console.log()

  }


  render() {

    return (
      <div>
        <InfoComponent type='Phone' value={4046101739} />
      </div>
    )
  };
}

export default KickFireAPI;
