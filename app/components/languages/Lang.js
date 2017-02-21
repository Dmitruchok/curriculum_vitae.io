import React from 'react'

import langStyle from '../languages/lang.styl';

export default class Lang extends React.Component {
  constructor () {
    super();
    this.state = {
      visible: false
    }
  };

  readMoreClick = (e) => {
    e.preventDefault();
    this.setState({visible: true});
  };

  hideMoreClick = (e) => {
    e.preventDefault();
    this.setState({visible: false});
  };

  render() {
    const visible = this.state.visible;
    const langList = this.props.langList;
    const tmpl = langList.map((item, index) => {
      return(
          <p key={item.id}>{item.lang}</p>
      )
    });

    return(
      <div className="lang">
        <h2 onClick={this.readMoreClick} className={(visible ? 'h2-new': '')}>LANGUAGES</h2>
        <div onClick={this.hideMoreClick} className={(visible ? '': 'none')}>
          {tmpl}
        </div>
      </div>
    )
  }
}
