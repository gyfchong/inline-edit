import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import EditableInfo from './EditableInfo';

class App extends Component {

  state = {
    fieldOne: 'This is a editable field'
  }

  onSave = (value) => {
    this.setState({ fieldOne: value })
  }

  dummyEditCallback = (bool) => { return bool; };

  render() {
    return(
      <EditableInfo text={this.state.fieldOne} editCallback={this.dummyEditCallback} onSave={this.onSave}/>
    )
  };
}


ReactDOM.render(<App />, document.getElementById('root'));
