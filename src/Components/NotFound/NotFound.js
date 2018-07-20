import React, { Component } from 'react';

class NotFound extends Component {

  componentWillMount () {
    this.props.hideHeader();
  }

  render() {
    return(
      <div>
        <h1>Page Not Found</h1>
      </div>
    );
  }

}

export default NotFound;