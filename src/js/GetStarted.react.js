import 'aframe';
import 'aframe-animation-component';
import 'aframe-text-component';
import 'babel-polyfill';
import {Entity, Scene} from 'aframe-react';
import React from 'react';

import Camera from './components/Camera';
import Text from './components/Text';

class GetStarted extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <Scene>
        <Camera>
          <a-cursor
            animation__click="property: scale; startEvents: click; from: 0.1 0.1 0.1; to: 1 1 1; dur: 150"
>
          </a-cursor>
        </Camera>
        <Entity geometry={{primitive: 'cylinder'}} material="color: #6173F4"  rotation="0 0 45" scale="1 0.5 1" position={[0, 0, -3]} >
          <a-animation attribute="rotation" repeat="indefinite" to="0 360 0"></a-animation>
        </Entity>
        <a-sky color="#73F7DD"></a-sky>
        <a-light type="spot" color="#333" position="-20 0 0" look-at="a-cylinder"></a-light>
        <a-light type="point" color="#AAA" position="0 5 0"></a-light>
      </Scene>
    );
  }
}

export default GetStarted;