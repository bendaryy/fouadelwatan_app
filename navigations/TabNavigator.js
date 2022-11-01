import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { MainStackNavigator, ContactStackNavigator } from "./StackNavigator";
import Ionicons from "react-native-vector-icons/Ionicons";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Home"
        component={MainStackNavigator}
        options={{
          tabBarLabel: "الصفحة الرئيسية",
          tabBarIcon: () => <Ionicons name="home" size={25} color="#00204C" />,
        }}
      />
      <Tab.Screen
        name="الملف الشخصى"
        component={ContactStackNavigator}
        options={{
          tabBarLabel: "الملف الشخصى",
          tabBarIcon: () => (
            <Ionicons name="person" size={25} color="#00204C" />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
