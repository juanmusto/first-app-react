import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Image extends Component {
  render(){
    return(
    <div>

    </div>
    );
  }
}

Image.PropTypes = {
  id: PropTypes.number.isRequired,
  src: PropTypes.string.isRequired
}
export default Image;
