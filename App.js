import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect, useRef }from 'react';
import { StyleSheet, Text, View, ScrollView, Button, Pressable, Animated, ActivityIndicator } from 'react-native';

export default function App() {
    
    const [buttonPressed, setButtonPressed] = useState(0)
    const [buttonPressString, setButtonPressString] = useState('')
    const fadeAnim = useRef(new Animated.Value(0)).current
    const fadeAnim2 = useRef(new Animated.Value(0)).current
    const fadeAnim3 = useRef(new Animated.Value(0)).current

    
//    const handleButtonPress = () => {
//        setButtonPressString('Wow, a button that does something!')
//    }
    
    const fadeIn = () => {
        Animated.sequence([
            Animated.timing(fadeAnim, {
                toValue: 1,
                duration: 3000,
                useNativeDriver: true
            }),
            Animated.timing(fadeAnim2, {
                toValue: 1,
                duration: 3000,
                useNativeDriver: true
            })
        ]).start()
        
    }
    
    const secondFadeIn = () => {
        Animated.timing(fadeAnim3, {
            toValue: 1,
            duration: 3000,
            useNativeDriver: true
        }).start()
    }
    
    const clickCount = () => {
        setButtonPressed(buttonPressed + 1)
    }
    
    const checkClickCount = () => {
        if(buttonPressed === 1) {
            secondFadeIn()
        }
    }
    
    
  return (
    <ScrollView style={styles.scrollView}>
          <View style={[styles.container]}>
          <Text style={styles.text}>This is Carlos editing App.js and getting it to build successfully on an iOs app simulator using Xcode and React Native. He is very proud.
          </Text>
          <Text></Text>
          <Text style={styles.text}>Try to scroll.</Text>
          <Text></Text>
          <Text style={styles.text}>Cool, right?</Text>
          <Text></Text>
          <Text style={styles.text}>Now, press {'this'} button</Text>
          <Pressable style={styles.button} >
          <Button style={styles.buttonText} title="Press it..." onPress={() => {fadeIn(); clickCount(); checkClickCount();}}/>
          </Pressable>
          <Text></Text>
          <Animated.Text style={[styles.text, {opacity: fadeAnim}]}>Wow, a button that does something!</Animated.Text>
          <Text></Text>
          <Animated.Text style={[styles.text, {opacity: fadeAnim2}]}>Press it again...</Animated.Text>
          <Text></Text>
          <Animated.Text style={[styles.text, {opacity: fadeAnim3}]}>Amazing.</Animated.Text>
      <StatusBar style="auto" />
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 3,
    maxHeight: 500,
    maxWidth: '80%',
    alignSelf: 'center',
    padding: 50,
    paddingTop: 80,
    paddingBottom:80,
    marginTop: 'auto',
    marginBottom: 'auto',
    borderRadius: 10,
    shadowColor: 'grey',
    shadowOffset: {
        width: 10,
        height: 10
    },
    shadowOpacity: .4
  },
    text: {
        color: 'white',
        fontFamily: 'AppleSDGothicNeo-SemiBold',
        fontSize: 18,
        textShadowOffset: {
            width: 3,
            height: 3
        },
        textShadowColor: 'grey',
        textShadowRadius: 2,
    },
    scrollView: {
        paddingTop: 80,
    },
    button: {
        backgroundColor: 'brown',
        padding: 10,
        borderRadius: 10,
        marginTop: 20,
        opacity: .5,
        shadowColor: 'grey',
        shadowOffset: {
            width: 5,
            height: 5
        },
        shadowOpacity: .4,
    },
});
