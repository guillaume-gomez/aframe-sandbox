import 'aframe';
import 'aframe-animation-component';
import 'aframe-text-component';
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import VRScene from 'VRScene.react';


class App extends React.Component {
  render () {
    return (
      <VRScene />
    );
  }
}

ReactDOM.render(<App/>, document.querySelector('.scene-container'));
