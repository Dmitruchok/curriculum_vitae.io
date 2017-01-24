import React from 'react';

import ExperienceStyle from '../work_experience/experience.styl';

export default class ExperienceView extends React.Component {

  constructor() {
    super();
    this.state = {
        visible: false
      };
  };

  static propTypes = {
    experienceList: React.PropTypes.array.isRequired
  };

  static defaultProps = {
    experienceList: []
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
    const data = this.props.experienceList;
    const tmpl = data.map((item, index) => {
      return(
        <div onClick={this.hideMoreClick} className={(visible ? 'exp-box': 'exp-box-none' )} key={item.id}>
          <span>{item.year}</span>
          <div className="right-exp-box">
            <p>{item.text}</p>
            <a href={item.link} target="_blank">{item.link}</a>
          </div>
        </div>
      )
    });

    return(
      <div className="work_experience">
        <h2 className={(visible ? 'h2-new': '' )} onClick={this.readMoreClick}>WORK EXPERIENCE</h2>
        {tmpl}
      </div>
    );
  };
}
