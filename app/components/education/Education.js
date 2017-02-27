import React from 'react';
import ReactDOM from 'react-dom';
import EdycationStyle from '../education/education.styl'

export default class EducationView extends React.Component {

  constructor() {
    super();
    this.state = {
      visible: false,
      inputEmptyYear: true,
      inputEmptyEducation: true
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


  onButtonClick = () => {
    let valInputYear = ReactDOM.findDOMNode(this.refs.addInputYear);
    let valInputEducation = ReactDOM.findDOMNode(this.refs.addInputEducation);
    let length = this.props.educationList.length;
    let obj = {id: ++ length , year: valInputYear.value, text: valInputEducation.value };
    this.props.educationList.push(obj);
    valInputYear.value = '';
    valInputEducation.value = '';
    this.setState({inputEmptyYear: true} || {inputEmptyEducation: true})
  };

  onTextYearChange = (e) => {
    if (e.target.value.trim().length > 0) {
      this.setState({inputEmptyYear: false})
    } else {
      this.setState({inputEmptyYear: true})
    }
  };

  onTextEducationChange = (e) => {
    if (e.target.value.trim().length > 0) {
      this.setState({inputEmptyEducation: false})
    } else {
      this.setState({inputEmptyEducation: true})
    }
  };


  render() {
    const visible = this.state.visible;
    const dataEducation = this.props.educationList;
    const inputEmptyYear = this.state.inputEmptyYear;
    const inputEmptyEducation = this.state.inputEmptyEducation;
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
        <div>
          {tmplEducation}
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
            onChange = {this.onTextEducationChange}
            placeholder="write education..."
            ref='addInputEducation'
          />
          <button
            className="btn-push"
            onClick={this.onButtonClick}
            disabled={inputEmptyYear || inputEmptyEducation}
           >
           Add education
          </button>
        </div>
      </div>
    )
  };
};
