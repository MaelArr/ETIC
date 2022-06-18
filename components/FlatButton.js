import React from 'react';
import { StyleSheet, Image, TouchableOpacity, Text, View } from 'react-native';
 
export default function FlatButton({ text, onPress, isGoogle }) {
  if(isGoogle){
      return (
          <TouchableOpacity style={styles.element} onPress={onPress}>
              <View style={styles.button}>
                  <Image style={styles.image} source={require('../images/google.png')} />
                  <Text style={styles.buttonText}>{text}</Text>
              </View>
          </TouchableOpacity>
      );
  }else{
    return (
        <TouchableOpacity style={styles.element} onPress={onPress}>
            <View style={styles.button}>
                <Image style={styles.image} source={require('../images/apple.png')} />
                <Text style={styles.buttonText}>{text}</Text>
            </View>
        </TouchableOpacity>
    );
  }
}
 
const styles = StyleSheet.create({
  image: {
    marginRight: 30
  },
    element:{
      margin: 15,
      width: '90%'
    },
    button: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        height: 60,
        borderRadius: 8,
        paddingVertical: 14,
        paddingHorizontal: 10,
        backgroundColor: '#FFFFFF',
    },
    buttonText: {
        color: 'black',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 16,
        textAlign: 'center',
    }
});