import React from 'react';

class NoData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  clickHandler() {
    let date = new Date();
    this.props.onImageClick(date);
    this.props.dateReset(true);
  }

  render() {
    return (
      <div>
        <img
          className={this.props.className}
          src={this.props.src} key={0}
          onClick={this.clickHandler.bind(this)}/>
      </div>
    );
  }
}

export default NoData;
