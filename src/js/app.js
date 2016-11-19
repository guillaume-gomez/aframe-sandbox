import 'aframe';
import 'aframe-animation-component';
import 'aframe-text-component';
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';

//import VRScene from 'VRScene.react';
import GetStarted from 'GetStarted.react';

class App extends React.Component {
  render () {
    return (
      <GetStarted />
    );
  }
}

ReactDOM.render(<App/>, document.querySelector('.scene-container'));
