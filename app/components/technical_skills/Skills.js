import React from 'react';

import SkillsStyle from '../technical_skills/skills.styl'

export default class SkillsView extends React.Component {

  constructor() {
    super();
    this.state = {
      visible:false
    }
  };

  static propTypes = {
    skillsList: React.PropTypes.array.isRequired
  };

  static defaultProps = {
    skillsList: []
  };

  readMoreClick = (e) => {
    e.preventDefault();
    this.setState({visible: true})
  };

  hideMoreClick = (e) => {
    e.preventDefault();
    this.setState({visible: false});
  };

  render() {
    const visible = this.state.visible;
    const dataSkills = this.props.skillsList;
    const tmplSkills = dataSkills.map((item, index) => {
      return(
        <div className={(visible ? 'skill-box': 'skill-box-none')} onClick={this.hideMoreClick} key={item.id}>
          <span>{item.name}</span>
          <div className="right-skill-box">
            <p>{item.tools}</p>
          </div>
        </div>
      )
    });

    return(
      <div className="skills">
        <h2 className={(visible ? 'h2-new': '')} onClick={this.readMoreClick}>TECHNICAL SKILLS</h2>
        {tmplSkills}
      </div>
    )
  }
}
