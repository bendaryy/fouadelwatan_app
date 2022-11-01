import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// import { AllCompanies } from "./StackNavigator";
import Ionicons from "react-native-vector-icons/Ionicons";
import { AllCompanies } from "../../navigations/StackNavigator";

const Tab = createBottomTabNavigator();

const CompaniesTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false, headerTitle: "fouadelwatan" }}
    >
      <Tab.Screen
        name="Home"
        component={AllCompanies}
        options={{
          tabBarLabel: "جميع الشركات",
          tabBarIcon: () => <Ionicons name="business" size={25} color="#00204C" />,
        }}
      />
     
    </Tab.Navigator>
  );
};

export default CompaniesTabs;
