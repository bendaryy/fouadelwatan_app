import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

function ArchiveWardSadrScreen({ navigation }) {
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
        onPress={() => navigation.navigate("الأرشيف الوارد")}
      >
        <Text style={styles.text}>الأرشيف الوارد</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.text}
        onPress={() => navigation.navigate("الأرشيف الصادر")}
      >
        <Text style={styles.text}>الأرشيف الصادر</Text>
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

export default ArchiveWardSadrScreen;

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
