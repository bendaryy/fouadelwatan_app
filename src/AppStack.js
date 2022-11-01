import React, { useContext, useState, useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Button, Text, View } from "react-native";
import axios from "axios";
import Roles from "../screens/Roles";
import { DashboardScreen } from "../screens/Dashboard";
import Ekrar from "../screens/Tax/Ekrar";
import EkrarDetails from "../screens/Tax/EkrarDetails";
import { SettingsScreen } from "../screens/Settings";
import WatanCompanies from "../screens/companies/WatanCompanies";
import CompanyDetails from "../screens/companies/CompanyDetails";
import TabNavigator from "../screens/navigation/TabNavigator";

axios.defaults.baseURL = "https://fouadelwatan.net/";
const Stack = createNativeStackNavigator();





export const AppStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Dashboard"
        options={{ title: "الصفحة الرئيسية" }}
        component={Dashboard}
      />
      <Stack.Screen
        name="Settings"
        options={{ title: "الإعدادات" }}
        component={SettingsScreen}
      />
      <Stack.Screen
        name="Ekrar"
        options={{ title: "موقف الإقرارات" }}
        component={Ekrar}
      />
      <Stack.Screen
        name="EkrarDetails"
        options={{ title: "عرض موقف الإقرار" }}
        component={EkrarDetails}
      />
      <Stack.Screen
        name="WatanCompanies"
        options={{ title: "عرض جميع الشركات" }}
        component={WatanCompanies}
      />
      <Stack.Screen
        name="companyDetails"
        options={{ title: "عرض تفاصيــل الشركة" }}
        component={CompanyDetails}
      />
      <Stack.Screen
        name="tabNavigator"
        options={{ title: "موقف الميزانيات و الإقرارات" }}
        component={TabNavigator}
      />
      <Stack.Screen name="Roles" component={Roles} />
    </Stack.Navigator>
  );
};
