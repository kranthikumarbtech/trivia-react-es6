import React from 'react';

class Dangers extends React.Component {
  componentDidMount() {
    React.findDOMNode(this).innerHTML = this.props.html;
  }

  componentDidUpdate(prevProps) {
    if (prevProps.html !== this.props.html) {
      this.componentDidMount();
    }
  }

  render() {
    var tag = this.props.tag;
    return React.createElement(tag);
  }
}

export default Dangers;
