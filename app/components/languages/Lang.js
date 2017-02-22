import React from 'react'
import ReactDOM from 'react-dom'

import langStyle from '../languages/lang.styl';

export default class Lang extends React.Component {
  constructor () {
    super();
    this.state = {
      visible: false
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
    // alert(ReactDOM.findDOMNode(this.refs.addInput).value);
    //this.props.langList.push(ReactDOM.findDOMNode(this.refs.addInput).value);
    let valInput = ReactDOM.findDOMNode(this.refs.addInput).value;
    let length = this.props.langList.length;
    let obj = {id: ++ length , lang: valInput};
    this.props.langList.push(obj);
    console.log(obj);
  }

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
        <div>
          <input className="add-lang"
            defaultValue=''
            placeholder="введите язык"
            ref='addInput'
          />
          <button onClick={this.onButtonClick}>Добавить</button>
        </div>
      </div>
    )
  }
}
