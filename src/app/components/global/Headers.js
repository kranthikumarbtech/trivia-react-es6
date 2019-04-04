import React from 'react';
import Calendar from 'react-calendar/dist/entry.nostyle';
import Modal from './Modal';


class Headers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      isOpen: false,
      error: '',
    };
  }

  onChange(date) {
    this.setState({ date });
    this.props.onSelectDate(date);
    this.toggleModal();
  }

  toggleModal() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  onDataError() {
    this.setState({
      error: 'Data not found!!',
    });
  }

  componentWillReceiveProps(prevProps, prevState) {
    if (prevProps.cDate) {
      this.setState({ date: new Date() });
      this.props.dateReset(false);
    }
  }

  render() {
    let style = {
      width: this.props.headerWidth,
    };
    let display = 'none';
    let headers = [];

    if (this.props.data !== null) {
      this.props.data.forEach((category, index) => headers.push(
        <span className='header' style={style} key={index}>{category.category}</span>));
    } else {
      display = 'block';
    }

    return (
      <div className='headers'>
        {headers}

        <button style={{ position: 'fixed', right: 0 }} onClick={this.toggleModal.bind(this)}>
          {this.props.date}
        </button>

        <Modal show={this.state.isOpen}
          onClose={this.toggleModal.bind(this)}>
          <Calendar
            onChange={this.onChange.bind(this)}
            value={this.state.date}
          />
          <label style={{ float: 'right', marginTop: '8px', color: 'red', display: display }}>Data not found!!</label>
        </Modal>

      </div>
    );
  }
}

export default Headers;
