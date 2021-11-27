import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default function App() {
  return (
    <ScrollView style={styles.scrollView}>
    <View style={styles.container}>
          <Text style={styles.text}>This is Carlos editing App.js and getting it to build successfully on an iOs app simulator using Xcode and React Native. He is very proud.
          </Text>
          <Text></Text>
          <Text style={styles.text}>Try to scroll.</Text>
          <Text></Text>
          <Text style={styles.text}>Cool, right?</Text>
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
    maxHeight: 300,
    maxWidth: '80%',
    alignSelf: 'center',
    padding: 50,
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
    paddingTop: 80
}
});
