import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

function SearchHome({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#00204C",
      }}
    >
      {/* <TouchableOpacity
        style={styles.text}
        onPress={() => navigation.navigate("متابعة الشئون القانونية")}
      >
        <Text style={styles.text}>متابعة موقف الشئون القانونية</Text>
      </TouchableOpacity> */}

      <TouchableOpacity
        style={styles.text}
        onPress={() => navigation.navigate("بحث فى بيانات الشركات")}
      >
        <Text style={styles.text}>بحث فى بيانات الشركات</Text>
      </TouchableOpacity>

      {/* <TouchableOpacity
        style={styles.text}
        onPress={() => alert('جارى تجهيزها')}
      >
        <Text style={styles.text}>التوكيلات</Text>
      </TouchableOpacity> */}

      {/* <TouchableOpacity
        style={styles.text}
        onPress={() => navigation.navigate("الفحوصات")}
      >
        <Text style={styles.text}>الفحوصات</Text>
      </TouchableOpacity> */}
    </View>
  );
}

export default SearchHome;

const styles = StyleSheet.create({
  text: {
    color: "white",
    fontSize: 16,
    backgroundColor: "#3355D4",
    borderRadius: 5,
    textAlign: "center",
    margin: 20,
  },
});
