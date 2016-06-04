'use strict';

import React, { Component, } from 'react'; 
import { 
  AppRegistry, 
  Image, 
  StyleSheet, 
  Text, 
  View, 
  TouchableOpacity,
  TextInput,
  Picker
} from 'react-native';

class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      actions: 'field_visit',
      text: '',
      violation: '',
      initialPosition: 'unknown', 
      lastPosition: 'unknown',
    };
  }

  // componentDidMount() { 
  //   navigator.geolocation.getCurrentPosition( 
  //     (position) => { 
  //       var initialPosition = JSON.stringify(position); 
  //       this.setState({initialPosition});
  //   }, 
  //   (error) => alert(error.message), 
  //   {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000} ); 
  //   this.watchID = navigator.geolocation.watchPosition(
  //     (position) => { var lastPosition = JSON.stringify(position); 
  //     this.setState({lastPosition});
  //   });
  // }

  // componentWillUnmount() { 
  //   navigator.geolocation.clearWatch(this.watchID); 
  // }

  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require('../assets/location-thd.png')}
          style={styles.logo}
        />

        <Text style={styles.welcome}>
          Environmental Health Services Inspection App 
        </Text>

        <TouchableOpacity onPress={() => {this._goToAction()}}>
          <Text style={styles.instructions}> Code Violation:</Text>
        </TouchableOpacity>
        <TextInput style={{height: 40, width: 300, borderColor: 'gray', borderWidth: 1}} onChangeText={(violation) => this.setState({violation})} value={this.state.violation}/>
        
        <Text style={styles.instructions}>
          Complaint Description:
        </Text>
        <TextInput style={{height: 40, width: 300, borderColor: 'gray', borderWidth: 1}} onChangeText={(text) => this.setState({text})} />
        
        <Text style={styles.instructions}>
          Actions:
        </Text>
        <Picker style={styles.picker} selectedValue={this.state.actions} onValueChange={(action) => this.setState({actions: action})}> 
          <Picker.Item label="Field Visit" value="field_visit" /> 
          <Picker.Item label="Verbal" value="verbal" />
          <Picker.Item label="NOV Issued" value="nov_issued" />
          <Picker.Item label="NOV Request" value="nov_request" />
          <Picker.Item label="OTR Issued" value="otr_issued" />
          <Picker.Item label="OTR Request" value="otr_request" />
          <Picker.Item label="Vacate Issued" value="vacate_issued" />
          <Picker.Item label="Vacate Request" value="vacate_request" />
          <Picker.Item label="Referred" value="referred" />
          <Picker.Item label="Hold" value="hold" />
          <Picker.Item label="Pesticide Appl." value="pesticide_appl" />
          <Picker.Item label="Other" value="other" />
        </Picker>

        <TouchableOpacity onPress={() => {this._goToCamera()}}>
          <Text style={styles.submitphoto}> Submit a photo</Text>
        </TouchableOpacity>

        <Text style={styles.position}>
          <Text> Your location: </Text> 
            {this.state.initialPosition} 
        </Text>
      </View>
    );
  }

  _goToCamera(){
    this.props.navigator.push({
      name: 'Camera', // Matches route.name
    })
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#0B39A3',
    marginBottom: 25,
  },
  picker: { 
    width: 300,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  submitphoto: {
    textAlign: 'center',
    color: '#4678EB',
    marginTop: 15,
  },
  position: {
    textAlign: 'center',
    color: '#333333',
    marginTop: 15,
  },
  logo: {
    width: 150,
    height: 74,
    alignSelf: 'center',
    bottom: 25,
  },
});

export default LandingPage;
