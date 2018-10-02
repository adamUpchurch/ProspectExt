import React, { Component } from 'react';
import HunterAPI from '../HunterAPI/HunterAPI.js';
import KickFireAPI from '../KickFireAPI/KickFireAPI.js';


class Prospect extends Component {


  render() {

    return (
      <div>
        <HunterAPI />
        <KickFireAPI />
      </div>
    )
  };

}

export default Prospect;
