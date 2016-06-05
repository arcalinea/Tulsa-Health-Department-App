'use strict';

// import React from "react-native";

// var {
//   Component,
//   ScrollView,
//   StyleSheet,
//   Text,
//   View,
//   Image,
//   TouchableOpacity
// } = React;

import React, { Component, } from 'react'; 
import Camera from 'react-native-camera';
import styles from '../styles/stylesheet';

import { 
  AppRegistry, 
  Image, 
  StyleSheet, 
  Text, 
  View, 
  TouchableOpacity
} from 'react-native';


class Complaints extends Component {
    render() {
      return (
        <View style={styles.cameraContainer}>
          <Text >
           This should be the camera page
          </Text>
          <Camera
            ref='cam'
            style={[styles.container, styles.camera]}
            type={Camera.constants.Type.back}
          >
          </Camera>
        </View>
      );
    }

}

export default Complaints;