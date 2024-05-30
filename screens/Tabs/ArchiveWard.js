import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// import { AllCompanies } from "./StackNavigator";
import Ionicons from "react-native-vector-icons/Ionicons";
import ArchiveWardSadrScreen from "../Archive/ArchiveWardSadrScreen";
import Ward from "../Archive/Ward";
import Sadr from "../Archive/Sadr";

const Tab = createBottomTabNavigator();

const ArchiveWard = () => {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false, headerTitle: "fouadelwatan" }}
    >
      <Tab.Screen
        name="شاشة الوارد و الصادر"
        component={ArchiveWardSadrScreen}
        options={{
          tabBarLabel: "شاشة الوارد و الصادر",
          tabBarIcon: () => (
            <Ionicons name="document" size={25} color="#00204C" />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="الأرشيف الوارد"
        component={Ward}
        options={{
          tabBarLabel: "الأرشيف الوارد",
          tabBarIcon: () => (
            <Ionicons name="document" size={25} color="#00204C" />
          ),
          headerShown: false,
        }}
      />

      <Tab.Screen
        name="الأرشيف الصادر"
        component={Sadr}
        options={{
          tabBarLabel: "الأرشيف الصادر",
          tabBarIcon: () => (
            <Ionicons name="document" size={25} color="#00204C" />
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default ArchiveWard;
