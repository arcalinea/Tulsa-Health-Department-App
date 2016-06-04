'use strict';
import React, {
  StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
    center: {
        justifyContent: 'center', 
        alignItems: 'center'
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#02A0E0'
        // marginTop: 20,
        // marginBottom: 20
    },
    cameraContainer: {
        flex: 1
    },
    landingButton: {
    // color: '#FFFFFF',
        color: '#000000',
        margin: 10,
        width: 150,
        height: 45,
        textAlign: 'center',
    // backgroundColor: '#0A34ED'
        backgroundColor: '#FFFFFF',
        borderRadius: 4,
        overflow:'hidden',
        borderWidth: 0.5,
        // shadowRadius: 1,
        // shadowOffset: {width: 0.5, height: 0.5},
        // shadowOpacity: 0.7,
        // shadowColor: 'black',
        // fontFamily: 'Helvetica Neue',
        fontWeight: 'bold'
    },
    box: {
        flex: 1,
        marginBottom: 40,
        height: 300,
        width: 300,
        padding: 25,
        backgroundColor: '#EEEEEE',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 2,
        shadowRadius: 3,
        shadowOffset: {width: 0.5, height: 0.5},
        shadowOpacity: 0.7,
        shadowColor: 'black'
    },
    camera: {
        backgroundColor: '#222222',
        justifyContent: 'flex-start'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    },
    button: {
        opacity: 0.7,
        marginTop: 30,
        padding: 10
    },
    instruction: {
        color: '#FFFFFF',
        // fontFamily: 'Helvetica Neue'
    },
    eventForm: {
        height: 40,
        width: 250,
        // fontFamily: 'Helvetica Neue'
    },
    eventBox: {
        marginTop: 50,
        height: 200,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center'
    },
    userForm: {
        height: 40,
        width: 250,
        // fontFamily: 'Helvetica Neue'
    },
    prompt: {
        fontSize: 22,
        // fontFamily: 'Helvetica Neue'
    },
    submitBox: {
        padding: 10,
        marginTop: 10
    },
    submitButton: {
        fontSize: 20,
        fontWeight: 'bold',
        // fontFamily: 'Helvetica Neue'
    },
    successMessage: {
        fontSize: 22,
        width: 250,
        textAlign: 'center',
        // fontFamily: 'Helvetica Neue'
    },
    restartButton: {
        marginTop: 20,
        color: '#78B6FF'
    },
    logo: {
        width: 250,
        height: 74,
        alignSelf: 'center',
        bottom: 25
    },
    backButton: {
        width: 100,
        height: 50,
        padding: 10,
        position: 'absolute',
        top: 20,
        left: 0
    },
    backText: {
        color: '#EEEEEE',
        // fontFamily: 'Helvetica Neue',
        fontWeight: '100',
        fontSize: 20
    },
    homeScreen: {
        backgroundColor: 'transparent'
    },
    inputScreen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#02A0E0'
    },
    inputHeader: {
        fontSize: 24,
        color: '#FFFFFF',
        // fontFamily: 'Helvetica Neue'
    },
    roleGrid: {
        alignSelf: 'flex-end',
        paddingBottom: 20,
        height: 20,
        flex: 1
    },
    icon: {
        textAlign: 'center',
        color: '#FFFFFF'
    },
    roleIcon: {
        width: 190,
        height: 190,
        color: '#FFFFFF'
    },
    iconCaption: {
        textAlign: 'center',
        fontSize: 24,
        color: '#FFFFFF',
        // fontFamily: 'Helvetica Neue'
    },
    actionBarBack:{
        flexDirection: 'row',
        alignItems: 'center'
    }
});

export default styles;
