import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../src/AuthProvider";
import { Button, Text, View, TouchableOpacity, StyleSheet } from "react-native";
import axios from "axios";
axios.defaults.baseURL = "https://fouadelwatan.net/";

export const DashboardScreen = ({ navigation }) => {
  const { user, logout } = useContext(AuthContext);
  const [name, setName] = useState(null);

  useEffect(() => {
    axios.defaults.headers.common["Authorization"] = `Bearer ${user.token}`;

    axios
      .get("/api/user")
      .then((response) => {
        setName(response.data.name);
        // console.log(name);
      })
      .catch((error) => {
        console.log(error.response);
      });
  }, []);
  const userToken = user.token.split("|");
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
        style={styles.touchable}
        onPress={() => navigation.navigate("Settings")}
      >
        <Text style={styles.text}>الإعدادات</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.touchable}
        onPress={() => navigation.navigate("Ekrar")}
      >
        <Text style={styles.text}>موقف الإقرارات</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.touchable}
        onPress={() => navigation.navigate("companies")}
      >
        <Text style={styles.text}>عرض جميع الشركات</Text>
      </TouchableOpacity>

      {/* <Button title="roles" onPress={() => navigation.navigate("Roles")} /> */}

      <TouchableOpacity style={styles.touchable} onPress={() => logout()}>
        <Text style={styles.text}>تسجيل خروج</Text>
      </TouchableOpacity>

      {/* <Button title="Logout" onPress={() => logout()} /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  touchable: {
    color: "#fff",
    width: "50%",
    textAlign: "center",
    borderRadius: 5,
    margin: 20,
  },
  text: {
    color: "white",
    fontSize: 20,
    backgroundColor: "#3355D4",
    padding: 10,
    borderRadius: 5,
    textAlign: "center",
  },
});
