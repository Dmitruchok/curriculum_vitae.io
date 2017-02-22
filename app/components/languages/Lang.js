import React from 'react'
import ReactDOM from 'react-dom'

import langStyle from '../languages/lang.styl';

export default class Lang extends React.Component {
  constructor () {
    super();
    this.state = {
      visible: false,
      inputEmpty: true
    }
  };

  static propTypes = {
    langList: React.PropTypes.array.isRequired
  };

  static defaultProps = {
    langList: []
  };

  readMoreClick = (e) => {
    e.preventDefault();
    this.setState({visible: true});
  };

  hideMoreClick = (e) => {
    e.preventDefault();
    this.setState({visible: false});
  };

  componentDidMount = () => {
    ReactDOM.findDOMNode(this.refs.addInput).focus();
  };

  onButtonClick = () => {
    let valInput = ReactDOM.findDOMNode(this.refs.addInput);
    let length = this.props.langList.length;
    let obj = {id: ++ length , lang: valInput.value};
    this.props.langList.push(obj);
    valInput.value = '';
    this.setState({inputEmpty: true})
  };

  onTextChange = (e) => {
    if (e.target.value.trim().length > 0) {
      this.setState({inputEmpty: false})
    } else {
      this.setState({inputEmpty: true})
    }
  };

  render() {
    const visible = this.state.visible;
    const langList = this.props.langList;
    const inputEmpty = this.state.inputEmpty;
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
        <div className={(visible ? 'form': 'none')}>
          <input
            type="text"
            className="add-lang"
            onChange = {this.onTextChange}
            placeholder="write this..."
            ref='addInput'
          />
          <button
            className="btn-push"
            onClick={this.onButtonClick}
            disabled={inputEmpty}
           >
           Add languages
          </button>
        </div>
      </div>
    )
  }
}
