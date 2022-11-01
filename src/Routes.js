import React, { useState, useEffect, useContext } from "react";
import { View, ActivityIndicator } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { AuthContext } from "./AuthProvider";
import { AppStack } from "./AppStack";
import * as SecureStore from "expo-secure-store";
import { AuthStack } from "./AuthStack";
import Dashboard from "../screens/Dashboard";

export default function Routes() {
  const { user, setUser, login, logout } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    SecureStore.getItemAsync("user")
      .then((userString) => {
        if (userString) {
          userObject = JSON.parse(userString);
          setUser(userObject);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (loading) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <NavigationContainer>
      {user ? <Dashboard /> : <AuthStack />}
    </NavigationContainer>
  );
}
