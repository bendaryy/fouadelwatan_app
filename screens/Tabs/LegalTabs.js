import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// import { AllCompanies } from "./StackNavigator";
import Ionicons from "react-native-vector-icons/Ionicons";
import { AllCompanies } from "../../navigations/StackNavigator";
import WatanCompanies from "../companies/WatanCompanies";
import SearchDataInCompanies from "../CompanyAndCustomers/SearchDataInCompanies";
import legalProcedures from "../legal/LegalProcedures";
import LegalTimeSheet from "../legal/LegalTimeSheet";

const Tab = createBottomTabNavigator();

const LegalTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false, headerTitle: "fouadelwatan" }}
    >
      <Tab.Screen
        name="legalProcedures"
        component={legalProcedures}
        options={{
          tabBarLabel: "الشئون القانونية",
          tabBarIcon: () => (
            <Ionicons name="hammer" size={25} color="#00204C" />
          ),
        }}
      />

      <Tab.Screen
        name="legalTimeSheet"
        component={LegalTimeSheet}
        options={{
          tabBarLabel: "تسجيل اعمالى",
          tabBarIcon: () => (
            <Ionicons name="document-text" size={25} color="#00204C" />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default LegalTabs;
