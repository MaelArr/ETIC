import React from "react";
import { Image, View, Text, TextInput, Pressable, Button, TouchableOpacity} from "react-native";
import styles from "../StyleSheets/StylesHomeScreen";
import FlatButton from "../components/FlatButton";
import TextInputPerso from "../components/TextInputPerso";

const LogIn = ({navigation}, props) => {
  return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>

        <Image source={require('../images/Travmeejoy.png')} />

        <Text>Bienvenue</Text>

        <View style={{alignItems: 'center', width:'100%'}}>
            <TextInputPerso placeholder="E-mail, pseudo ou téléphone" icon="mail"/>
            <TextInputPerso placeholder="Mot de passe" secureTextEntry={true} icon="lock"/> 
        </View>
        

        <View style={{alignItems: 'center', width:'100%'}}>
            <Pressable style={{margin: 15}} onPress={() => navigation.navigate("")}>
                <Text>Mot de passe oublié ?</Text>
            </Pressable>
        </View>
          

        <View style={{alignItems: 'center', width:'100%'}}>
            <Button
              onPress={() => navigation.navigate("")}
              title="Connexion"
              color="#595959"
            />
            <Text>ou</Text>
            <FlatButton text="Continuer avec Google" onPress={() => navigation.navigate("")} isGoogle={true}/>
            <FlatButton text="Continuer avec Apple"  onPress={() => navigation.navigate("")} isGoogle={false}/>
        </View>
        
        <View  style={{alignItems: 'center', width:'100%'}}>
          <Text>Pas encore de compte ?</Text>
          <Pressable onPress={() => navigation.navigate("")}>
            <Text>Inscription</Text>
          </Pressable>
        </View>
      </View>
  );
};

export default LogIn;