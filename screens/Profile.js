import React, { useContext } from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { AuthContext } from "../src/AuthProvider";

const Profile = () => {
  const { user, logout } = useContext(AuthContext);
  return (
    <View style={styles.center}>
      <Text style={styles.text}>اسم المستخدم : {user.name}</Text>
      <Text style={styles.text}> البريد الإلكترونى : {user.email}</Text>
      <Text style={styles.text}> الرقم التعريفى : {user.id}</Text>
      {/* <Ionicons name="person-outline" size={20}  /> */}

      <TouchableOpacity style={styles.touchable} onPress={() => logout()}>
        <Text style={styles.text}>تسجيل خروج</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  touchable: {
    color: "#fff",
    textAlign: "center",
    borderRadius: 5,
    margin: 20,
    backgroundColor: "#3B71f3",
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    backgroundColor: "#00204C",
  },
  text: {
    padding: 10,
    fontSize: 15,
    fontWeight: "bold",
    color: "#fff",
  },
});

export default Profile;
