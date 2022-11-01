import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from "react-native";
function Season({ navigation }) {
  const [season, setSeason] = React.useState(2021);
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#00204C",
      }}
    >
      <TouchableOpacity
        style={styles.text}
        // onPress={() => navigation.navigate("الإقرارات")}
        onPress={() => navigation.navigate("الإقرارات",{season})}
      >
        <Text style={styles.text}>{season}</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Season;

const styles = StyleSheet.create({
  text: {
    color: "white",
    fontSize: 20,
    backgroundColor: "#3355D4",
    padding: 10,
    borderRadius: 5,
    textAlign: "center",
  },
});
