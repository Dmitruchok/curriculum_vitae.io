import React from 'react'
import ReactDOM from 'react-dom'

import ExperienceStyle from '../work_experience/experience.styl';

export default class ExperienceView extends React.Component {

  constructor() {
    super();
    this.state = {
        visible: false,
        inputEmptyYear: true,
        inputEmptyExperience: true
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

  onButtonClick = () => {
    let valInputYear = ReactDOM.findDOMNode(this.refs.addInputYear);
    let valInputExperience = ReactDOM.findDOMNode(this.refs.addInputExperience);
    let length = this.props.experienceList.length;
    let obj = {id: ++ length , year: valInputYear.value, text: valInputExperience.value };
    this.props.experienceList.push(obj);
    valInputYear.value = '';
    valInputExperience.value = '';
    this.setState({inputEmptyYear: true} || {inputEmptyExperience: true})
  };

  onTextYearChange = (e) => {
    if (e.target.value.trim().length > 0) {
      this.setState({inputEmptyYear: false})
    } else {
      this.setState({inputEmpty: true})
    }
  };

  onTextExperienceChange = (e) => {
    if (e.target.value.trim().length > 0) {
      this.setState({inputEmptyExperience: false})
    } else {
      this.setState({inputEmptyExperience: true})
    }
  };

  render() {
    const visible = this.state.visible;
    const data = this.props.experienceList;
    const inputEmptyYear = this.state.inputEmptyYear;
    const inputEmptyExperience = this.state.inputEmptyExperience;
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
      <div>
        <div className="work_experience">
          <h2 className={(visible ? 'h2-new': '' )} onClick={this.readMoreClick}>WORK EXPERIENCE</h2>
          <div onClick={this.hideMoreClick} className={(visible ? '': 'none')}>
            {tmpl}
          </div>
          <div className={(visible ? 'form': 'none')}>
            <input
              type="text"
              className="add-year"
              onChange = {this.onTextYearChange}
              placeholder="write year..."
              ref='addInputYear'
            />
            <input
              type="text"
              className="add-exper"
              onChange = {this.onTextExperienceChange}
              placeholder="write experience..."
              ref='addInputExperience'
            />
            <button
              className="btn-push"
              onClick={this.onButtonClick}
              disabled={inputEmptyYear || inputEmptyExperience}
             >
             Add experience
            </button>
          </div>
        </div>
      </div>
    );
  };
}
