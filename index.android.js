/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, { Component } from 'react';
import LandingPage from './views/landing';
import Camera from './views/camera';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Navigator,
  TextInput,
  Picker,
  Image
} from 'react-native';

class TestApp extends Component {

  render() {
    return (
      <Navigator 
        initialRoute={{name: 'My First Scene', index: 0}} 
        renderScene={ this.renderScene }
      />
    );
  }

  renderScene(route, navigator) {
    if(route.name == 'Main') {
      return <Main navigator={navigator} />
    }
    if(route.name == 'Camera') {
      return <Camera navigator={navigator} />
    }
    return <LandingPage navigator={navigator} />
  }

  // _goToAction(){
  //   console.log("Going to action");
  //   this.props.navigator.push({
  //     component: Complaints
  //   })
  // }
}

AppRegistry.registerComponent('TestApp', () => TestApp);
