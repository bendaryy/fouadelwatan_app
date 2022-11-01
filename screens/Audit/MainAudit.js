import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

function MainAudit({ navigation }) {
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
        onPress={() => navigation.navigate("إختر نوع الميزانية")}
      >
        <Text style={styles.text}>حالة الميزانيات</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.text}
        onPress={() => navigation.navigate("إختر سنة ملف المراجعة")}
        // onPress={() => alert('جارى تجهيزها')}
      >
        <Text style={styles.text}>حالة ملفات المراجعة</Text>
      </TouchableOpacity>
    </View>
  );
}

export default MainAudit;

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
