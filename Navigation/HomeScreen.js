import React from "react";
import { Text, View } from "react-native";
import styles from "./../StyleSheets/StylesHomeScreen";

const HomeScreen = ({navigation}, props) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={styles.text}>Home Screen</Text>
    </View>
  );
};

export default HomeScreen;