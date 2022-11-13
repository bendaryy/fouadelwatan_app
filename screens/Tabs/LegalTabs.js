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
import LegalHome from "../legal/LegalHome";
import LegalSituation from "../legal/LegalSituation";

const Tab = createBottomTabNavigator();

const LegalTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false, headerTitle: "fouadelwatan" }}
    >
      <Tab.Screen
        name="الشئون"
        component={LegalHome}
        options={{
          tabBarLabel: "الشئون القانونية",
          tabBarIcon: () => (
            <Ionicons name="bookmarks" size={25} color="#00204C" />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="متابعة الشئون القانونية"
        component={LegalSituation}
        options={{
          tabBarLabel: "متابعة الشئون القانونية",
          tabBarIcon: () => (
            <Ionicons name="location" size={25} color="#00204C" />
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

export default LegalTabs;
