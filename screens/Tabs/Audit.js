import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// import { AllCompanies } from "./StackNavigator";
import Ionicons from "react-native-vector-icons/Ionicons";
import Ekrar from "../Tax/Ekrar";
import Fahs from "../Tax/Fahs";
import { Audit, Tax } from "../../navigations/StackNavigator";
import Season from "../Tax/Season";
import MezanyatSeason from "../Audit/MezanyatSeason";
import MezanyatType from "../Audit/MezanyaType";

const Tab = createBottomTabNavigator();

const AuditTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false, headerTitle: "fouadelwatan" }}
    >
      <Tab.Screen
        name="المراجعة"
        component={Audit}
        options={{
          tabBarLabel: "قسم المراجعة",
          tabBarIcon: () => (
            <Ionicons name="bookmarks" size={25} color="#00204C" />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="نوع الميزانية"
        component={MezanyatType}
        options={{
          tabBarLabel: "الميزانيات",
          tabBarIcon: () => (
            <Ionicons name="albums" size={25} color="#00204C" />
          ),
          headerShown: false,
        }}
      />
      {/* <Tab.Screen
        name="ملفات المراجعة"
        component={Fahs}
        options={{
          tabBarLabel: "ملفات المراجعة",
          tabBarIcon: () => (
            <Ionicons name="newspaper" size={25} color="#00204C" />
          ),
        }}
      /> */}
    </Tab.Navigator>
  );
};

export default AuditTabs;
