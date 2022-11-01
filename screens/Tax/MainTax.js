import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

function MainTax({ navigation }) {
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
        onPress={() => navigation.navigate("إختر السنة")}
      >
        <Text style={styles.text}>الإقرارات</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.text}
        onPress={() => navigation.navigate("الفحوصات")}
      >
        <Text style={styles.text}>الفحوصات</Text>
      </TouchableOpacity>
    </View>
  );
}

export default MainTax;

const styles = StyleSheet.create({
  text: {
    color: "white",
    fontSize: 20,
    backgroundColor: "#3355D4",
    borderRadius: 5,
    textAlign: "center",
    margin: 20,
  },
});
