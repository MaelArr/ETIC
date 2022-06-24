import React from "react";
import { Image, View, Text, Pressable, Button, TextInput} from "react-native";
import FlatButton from "../components/FlatButton";
import TextInputPerso from "../components/TextInputPerso";
import { useState } from "react";
import { Icon } from "@rneui/themed";

const LogIn = ({navigation}, props) => {
  var photo = "";
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>

        <Image source={require('../images/Travmeejoy.png')} />

        <View style={{alignItems: 'center', width:'100%', margin: 15}}>
            {photoProfil(photo)}
            <Icon style={{marginLeft: 10}} type="material" name="photo-camera" color="#FF1A6C" onPress={() => navigation.navigate("LogIn")}/>
        </View>
        
        <View style={{alignItems: 'center', width:'100%'}}>
            <TextInputPerso placeholder="Date de naissance dd/mm/yyyy"/>
            <TextInputPerso placeholder="Genre" keyboardType="email-address"/>
            <TextInputPerso placeholder="Pays"/> 
            <TextInputPerso placeholder="langue" keyboardType="numeric"/>
        </View>    

        <View style={{alignItems: 'center', width:'100%', margin: 15}}>
            <Button
              onPress={() => navigation.navigate("")}
              title="Continuer" 
              color="#595959"
            />
        </View>
      </View>
  );
};

function photoProfil(){
  return <View style={{backgroundColor: "#595959", width: 100, height: 100, borderRadius: 50}}></View>
}

export default LogIn;