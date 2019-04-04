import React from 'react';
import ReactDOM from 'react-dom';
import Card from './src/components/Card';
import Headers from './global/Headers';
import request from './global/request';
import { toDay } from './global/Helper';
import triviaData from './src/data/triviaData';
import Danger from './global/Danger';
import NoData from './src/components/NoData';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight,
      data: [],
      date: toDay(),
      cDate: false,
      cardStatus: false,
    };
  }

  handleResize(event) {
    this.setState({
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight,
    });
  }

  handleDate(dateValue) {
    this.setState({
      date: toDay(dateValue),
      cardStatus: false,
    });
  }

  // toDay(newDate) {
  //   let todayDate = new Date();
  //   if (newDate !== undefined) {
  //     todayDate = new Date(newDate);
  //   }
  //   let dd = todayDate.getDate();
  //   let mm = todayDate.getMonth() + 1; // January is 0!
  //   let yyyy = todayDate.getFullYear();

  //   if (dd < 10) {
  //     dd = '0' + dd;
  //   }
  //   if (mm < 10) {
  //     mm = '0' + mm;
  //   }
  //   todayDate = dd + '/' + mm + '/' + yyyy;
  //   return todayDate;
  // }

  cardData(dd) {
    let rows = 0;
    let datenow = dd;

    triviaData.DATA.date.forEach(date => {
      if (date[this.state.date] !== undefined) {
        date[this.state.date].forEach(category => {
          if (category.questions.length > rows) {
            rows = category.questions.length;
          }
        });
        this.setState({
          data: date[this.state.date],
          rows: rows,
          cols: date[this.state.date].length,
          state: this.state,
        });
      } else {
        this.setState({ data: null, rows: 1, cols: 1 });
      }
    });
  }

  resetCDate(value) {
    this.setState({
      cDate: value,
    });
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize.bind(this));
    this.cardData(this.state.date);
  }

  /*
    // Traditional XHR implementation. Getting questions from data.json using XHR.
    Will run into cross origin issues in some browsers
    // if loading index.html from the local file system (using the file:// protocol) -->
    componentDidMount() {
        window.addEventListener('resize', this.handleResize.bind(this));
        request({url: "data.json"}).then(result => {
            let data = JSON.parse(result),
                rows = 0,
                datenow = this.toDay();
            data.forEach(date => {
                date[datenow].forEach(category => {
                    if (category.questions.length > rows) {
                        rows = category.questions.length;
                    }
                });
                this.setState({data: date[datenow], rows: rows, cols: date[datenow].length});
            });

            // data.forEach(category => {
            //     if (category.questions.length > rows) {
            //         rows = category.questions.length;
            //     }
            // });
            // this.setState({data: data, rows: rows, cols: data.length});
        });
    }
    */
  componentDidUpdate(prevProps, prevState) {
    if (prevState.date !== this.state.date) {
      this.cardData(this.state.date);
    }
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  cardsData() {
    let headerHeight = this.state.windowWidth > 640 ? 60 : 32;
    let cardWidth = this.state.windowWidth / this.state.cols;
    let cardHeight = (this.state.windowHeight - headerHeight) / this.state.rows;
    let cards = [];

    if (this.state.data !== null) {
      this.state.data.forEach((category, categoryIndex) => {
        let left = categoryIndex * cardWidth;
        category.questions.forEach((question, questionIndex) => {
          cards.push(
            <Card
              left={left}
              top={(questionIndex * cardHeight) + headerHeight}
              height={cardHeight}
              width={cardWidth}
              question={question}
              key={categoryIndex + '-' + questionIndex}
              cardStatus={this.cardStatus}
            />,
          );
        });
      });
    } else {
      cards.push(
        <NoData className="data-error"
          src="base/images/data-error.gif"
          onImageClick={this.handleDate.bind(this)}
          dateReset={this.resetCDate.bind(this)}
        />);
    }
    return (
      <div>
        <Headers
          data={this.state.data}
          date={this.state.date}
          headerWidth={cardWidth}
          onSelectDate={this.handleDate.bind(this)}
          cDate={this.state.cDate}
          dateReset={this.resetCDate.bind(this)}
        />
        {cards}
      </div>
    );
  }

  render() {
    return (<div>{this.cardsData()}</div>);
  }
}

App.defaultProps = { date: new Date() };
