import React from 'react';

import EdycationStyle from '../education/education.styl'

export default class EducationView extends React.Component {

  constructor() {
    super();
    this.state = {
      visible: false
    }
  };

  static propTypes = {
    educationList: React.PropTypes.array.isRequired
  };

  static defaultProps = {
    educationList: []
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
    const dataEducation = this.props.educationList;
    const tmplEducation = dataEducation.map((item, index) => {
      return(
        <div className={(visible ? 'edu-box': 'edu-box-none')} onClick={this.hideMoreClick} key={item.id}>
          <span>{item.year}</span>
          <div className="right-edu-box">
            <p>{item.text}</p>
          </div>
        </div>
      )
    });

    return(
      <div className="education">
        <h2 className={(visible ? 'h2-new': '')} onClick={this.readMoreClick}>EDUCATION</h2>
        {tmplEducation}
      </div>
    )
  };
};
