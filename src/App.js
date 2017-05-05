import React, { Component } from 'react';
import autoBind from 'react-autobind';
import CSSTransitionGroup from 'react-addons-css-transition-group';
import './App.css';
import speakers from './data/speakers';
import Background from './Components/Background.jsx';
import Shape from './Components/Shape.jsx';
import Test from './Components/Test.jsx';
import Test2 from './Components/Test2.jsx';
import Test3 from './Components/Test3.jsx';
import Test4 from './Components/Test4.jsx';
import Test5 from './Components/Test5.jsx';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      difficulty: 0,
      speakers: 0,
    };
    autoBind(this);
  }
  componentDidMount() {
     this.changeValues();
  }
  changeValues() {
    setInterval(() => {
        this.setState({
            difficulty: Math.floor(Math.random() * 5), // 5 === max on scale
            speakers: this.state.speakers < 4 ? this.state.speakers + 1 : 0,
        });
    }, 2000);
  }
  render() {
    return (
      <div className="App">
        {/*<CSSTransitionGroup
            transitionName="example"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={300}
        >
            <h1>{speakers[this.state.speakers]}</h1>
        </CSSTransitionGroup>
        <Background difficulty={this.state.difficulty} />
        <Shape difficulty={this.state.difficulty} />*/}
        {/*<Test background="red"/>*/}
        {/*<Test2 />*/}
        {/*<Test3 />*/}
        {/*<Test4 />*/}
        <Test5 />
      </div>
    );
  }
}

export default App;
