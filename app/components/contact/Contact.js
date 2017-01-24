import React from 'react';
import ContactStyle from '../contact/contact.styl';

export default class Contact extends React.Component {

  render() {
    return(
      <div className="contact_me">
        <h2>Andriy Dmytruk</h2>
        <h3>FRONT END DEVELOPER</h3>
        <ul>
          <li>p: +380939282529</li>
          <li>e: dmitruchok08@gmail.com</li>
          <li><a href="https://github.com/Dmitruchok">github.com</a></li>
          <li>Kyiv, Ukraine</li>
        </ul>
      </div>
    )
  }
}
