import React, { Component } from 'react';

class FormGroup extends Component {
  render() {
    return (
      <div className="form-group">
        <label htmlFor={this.props.for}>{this.props.name}</label>
        <input type={this.props.type} className="form-control" id={this.props.id} placeholder={this.props.placeholder} />
      </div>
    )
  }
}

export default FormGroup;