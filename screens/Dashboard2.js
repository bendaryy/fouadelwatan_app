import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../src/AuthProvider";

import {
  Button,
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  ActivityIndicator,
} from "react-native";
import axios from "axios";
import TabNavigator from "./navigation/TabNavigator";
axios.defaults.baseURL = "https://fouadelwatan.net/";

export const DashboardScreen = ({ navigation }) => {
  const { user, logout } = useContext(AuthContext);
  const [name, setName] = useState(null);
  // const [loading, setLoading] = useState(true);
  const [roles, setRoles] = React.useState("");

  useEffect(() => {
    axios.defaults.headers.common["Authorization"] = `Bearer ${user.token}`;

    axios
      .get(`/api/users/${user.id}`)
      .then((response) => {
        setName(response.data.name);
        setRoles(response.data.data[0].roles);
        // setLoading(false)
      })
      .catch((error) => {
        console.log(error.response);
      });
  }, []);

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
        style={styles.touchable}
        onPress={() => navigation.navigate("tabNavigator")}
      >
        <Text style={styles.text}>tab</Text>
      </TouchableOpacity> */}

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
    </View>
  );
  // }
};

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
