import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../screens/Home";
import About from "../screens/About";
import Profile from "../screens/Profile";
import CompanyDetails from "../screens/companies/CompanyDetails";
import EkrarDetails from "../screens/Tax/EkrarDetails";
import WatanCompanies from "../screens/companies/WatanCompanies";
import Ekrar from "../screens/Tax/Ekrar";
import Fahs from "../screens/Tax/Fahs";
import FahsDetails from "../screens/Tax/FahsDetails";
import MainTax from "../screens/Tax/MainTax";
import Season from "../screens/Tax/Season";
import MainAudit from "../screens/Audit/MainAudit";
import MezanyaDetails from "../screens/Audit/MezanyaDetails";
import MezanyatSeason from "../screens/Audit/MezanyatSeason";
import MezanyatMonth from "../screens/Audit/MezanyatMonth";
import MezanyaStatus from "../screens/Audit/MezanyaStatus";
import Mezanyat from "../screens/Audit/Mezanyat";
import MezanyatType from "../screens/Audit/MezanyaType";
import AuditFileSeason from "../screens/Audit/AuditFileSeason";
import AuditFilesMonth from "../screens/Audit/AuditFilesMonth";
import AuditFileStatus from "../screens/Audit/AuditFilesStatus";
import AuditFileNew from "../screens/Audit/AuditFilesNew";

const Stack = createNativeStackNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: "#00204C",
  },
  headerTintColor: "white",
  // headerBackTitle: "Back",
  // headerShown:false,
};

const screenOptionStyle2 = {
  headerStyle: {
    backgroundColor: "#00204C",
  },
  headerTintColor: "white",
  headerBackTitle: "Back",
  headerShown: false,
};

const MainStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle2}>
      <Stack.Screen
        name="الشركات"
        component={Home}
        screenOptions={{
          headerShown: false,
        }}
        options={{ headerTitleAlign: "center" }}
      />
      <Stack.Screen name="About" component={About} />
    </Stack.Navigator>
  );
};

const ContactStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle2}>
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
};

const AllCompanies = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle2}>
      <Stack.Screen name="عرض جميع الشركات" component={WatanCompanies} />
      <Stack.Screen name="companyDetails" component={CompanyDetails} />
    </Stack.Navigator>
  );
};

const Tax = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="قسم الضرائب" component={MainTax} />
      <Stack.Screen name="الإقرارات" component={Ekrar} />
      <Stack.Screen name="تفاصيل الإقرار" component={EkrarDetails} />
      <Stack.Screen name="إختر السنة" component={Season} />
      <Stack.Screen name="الفحوصات" component={Fahs} />
      <Stack.Screen name="عرض تفصيلى للفحص" component={FahsDetails} />
    </Stack.Navigator>
  );
};
const Audit = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="قسم المراجعة" component={MainAudit} />
      <Stack.Screen name="إختر سنة الميزانية" component={MezanyatSeason} />
      <Stack.Screen name="إختر سنة ملف المراجعة" component={AuditFileSeason} />
      <Stack.Screen name="إختر شهر الميزانية" component={MezanyatMonth} />
      <Stack.Screen name="إختر شهر ملف المراجعة" component={AuditFilesMonth} />
      <Stack.Screen name="حالة الميزانية" component={MezanyaStatus} />
      <Stack.Screen name="إختر نوع الميزانية" component={MezanyatType} />
      <Stack.Screen name="عرض تفصيلى للميزانية" component={MezanyaDetails} />
      <Stack.Screen name="الميزانيات" component={Mezanyat} />


      <Stack.Screen name="إختر حالة ملف المراجعة" component={AuditFileStatus} />
      <Stack.Screen name="ملفات المراجعة" component={AuditFileNew} />
    </Stack.Navigator>
  );
};

const AuditFiles = () => {
  <Stack.Navigator screenOptions={screenOptionStyle}>
    <Stack.Screen name="إختر سنة ملف المراجعة" component={AuditFileSeason} />
    <Stack.Screen name="إختر شهر ملف المراجعة" component={AuditFilesMonth} />
  </Stack.Navigator>;
};

export {
  MainStackNavigator,
  ContactStackNavigator,
  AllCompanies,
  Tax,
  Audit,
  AuditFiles,
};
