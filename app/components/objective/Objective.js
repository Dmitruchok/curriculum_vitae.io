import React from 'react';

import ObjectiveStyle from '../objective/objective.styl';

export default class ObjectiveView extends React.Component {
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

  render () {
    const visible = this.state.visible;
    return (
      <div className="objective">
        <h2 onClick={this.readMoreClick} className={(visible ? 'h2-new': '')}>OBJECTIVE</h2>
        <p  className={(visible ? '': 'none')} onClick={this.hideMoreClick}>
          I am seeking employment with a company as Front End Developer where I could have a career
            achievement and raise my professional experience.
        </p>
      </div>
    )
  }
}
