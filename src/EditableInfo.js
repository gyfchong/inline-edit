import React, { Component } from 'react';

const EditField = (props) => (
  <form action="">
    <input value={props.value} onChange={props.handleChange}  />
    <button type="button" onClick={props.handleCancel}>cancel</button>
    <button type="button" onClick={props.handleSubmit}>submit</button>
  </form>
)

class EditableInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isReadOnlyMode: true,
      defaultText: props.text, // Store the incoming text prop
      localText: props.text, // Set the field text
    }
  }

  handleClick = () => {
    const {
        editCallback,
    } = this.props;

    editCallback(true);

    this.setState({
        isReadOnlyMode: false,
    });
  }

  handleChange = (e) => {
      const {
          isExternallyControlled,
          onSave,
      } = this.props;

      const {
          value,
      } = e.target;

      this.setState({
          localText: value,
      });

      if (isExternallyControlled) {
          onSave(value);
      }
  }

  handleCancel = () => {
    const {
        editCallback,
    } = this.props;

    const {
        defaultText
    } = this.state;

    console.log('on cancel ' + defaultText);

    editCallback(true);

    this.setState({
        isReadOnlyMode: true,
        localText: defaultText,
    });
  }

  handleSubmit = () => {
    const {
        editCallback,
        onSave,
    } = this.props;

    const {
      localText
    } = this.state;

    console.log('on submit ' + localText);

    this.setState({
        isReadOnlyMode: true,
        defaultText: localText,
    });

    editCallback(true);
    onSave(localText);
  }

  render() {
    return (
      <div>
        {
          this.state.isReadOnlyMode ?
          <div onClick={this.handleClick}>{this.state.localText}</div> :
          <EditField value={this.state.localText} handleSubmit={this.handleSubmit} handleCancel={this.handleCancel} handleChange={this.handleChange} />
        }
      </div>
    );
  }
}

export default EditableInfo;
