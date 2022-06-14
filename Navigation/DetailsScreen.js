import React from "react";
import { Text, View } from "react-native";
import styles from "./../StyleSheets/StylesDetailsScreen";

const DetailsScreen = ({navigation}, props) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={styles.text}>Details Screen</Text>
    </View>
  );
};

export default DetailsScreen;