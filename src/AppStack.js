import React, { useContext, useState, useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Button, Text, View } from "react-native";
import axios from "axios";
import Roles from "../screens/Roles";
import { DashboardScreen } from "../screens/Dashboard";
import Ekrar from "../screens/Ekrarat/Ekrar";
import EkrarDetails from "../screens/Ekrarat/EkrarDetails";
import { SettingsScreen } from "../screens/Settings";
import Companies from "../screens/companies/Companies";
import CompanyDetails from "../screens/companies/CompanyDetails";

axios.defaults.baseURL = "https://fouadelwatan.net/";
const Stack = createNativeStackNavigator();





export const AppStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Dashboard"
        options={{ title: "الصفحة الرئيسية" }}
        component={DashboardScreen}
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
        name="companies"
        options={{ title: "عرض جميع الشركات" }}
        component={Companies}
      />
      <Stack.Screen
        name="companyDetails"
        options={{ title: "عرض تفاصيــل الشركة" }}
        component={CompanyDetails}
      />
      <Stack.Screen name="Roles" component={Roles} />
    </Stack.Navigator>
  );
};
