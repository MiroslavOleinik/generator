import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setCurrentQuote } from './store/Store';
import * as random from 'random-int';
import './App.css';

const mapStateToProps = ({ currentQuote, allQuote }) => ({
  currentQuote,
  allQuote,
}); 

const mapDispatchToProps = (dispatch) => ({
  setCurrentQuoteDispatch: (curBase) => {
    dispatch(setCurrentQuote(curBase))
  },
});

class App extends Component {
  state = {
    isLoading: false,
  }

  generateQuote = () => {
    const { allQuote, setCurrentQuoteDispatch } = this.props;
    const randomPosition = random(0, allQuote.length - 1);
    setCurrentQuoteDispatch(allQuote[randomPosition]);
  }

  render() {
    const { isLoading } = this.state;
    const { currentQuote } = this.props;
    return (
      <div className="container">
        <div className="quote">
          <p>
              {
                isLoading ? 'Loading' : currentQuote
              }
          </p>
        </div>
        <button
          className="button"
          onClick={this.generateQuote}
        >
           Сгенерировать
        </button>
      </div>
    );    
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
