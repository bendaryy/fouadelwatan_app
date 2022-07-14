import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../src/AuthProvider";
import { Button, Text, View } from "react-native";

export const  SettingsScreen = ({ navigation }) => {
  const { user, logout } = useContext(AuthContext);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      {/* <Text>setting screen</Text> */}
      <Text>إسم السمتخدم : {user.name}</Text>
      <Text>البريد الإلكترونى : {user.email}</Text>
      <Text>الرقم التعريفى للمستخدم : {user.id}</Text>
      {/* <Text>user name : {user.name}</Text> */}
      <Button
        title="الذهاب للصفحة الرئيسية"
        onPress={() => navigation.navigate("Dashboard")}
      />
    </View>
  );
}
