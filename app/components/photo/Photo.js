import React from 'react';

import Contact from '../contact/Contact';
import PhotoStyle from '../photo/Photo.styl'

export default class Photo extends React.Component {

  render() {

    return(
      <div className="photo-box">
        <a href="https://vk.com/dmitrykandrei">
          <img src="../../img/vk.jpg"></img>
        </a>
        <Contact />
      </div>
    )
  }
}
