import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// import { AllCompanies } from "./StackNavigator";
import Ionicons from "react-native-vector-icons/Ionicons";

import SearchDataInCompanies from "../CompanyAndCustomers/SearchDataInCompanies";
import Customers from "../CompanyAndCustomers/Customers";
import { SearchCompaniesAndCustomers } from "../../navigations/StackNavigator";
import Employees from "../CompanyAndCustomers/Employees";


const Tab = createBottomTabNavigator();

const SearchData = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="الشركات"
        component={SearchCompaniesAndCustomers}
        options={{
          tabBarLabel: "بيانات الشركات",
          tabBarIcon: () => (
            <Ionicons name="business" size={25} color="#00204C" />
          ),
          headerShown: true,
        }}
      />
      <Tab.Screen
        name="العمــلاء"
        component={Customers}
        options={{
          tabBarLabel: "العملاء",
          tabBarIcon: () => (
            <Ionicons name="people" size={25} color="#00204C" />
          ),
          headerShown: true,
        }}
      />
      <Tab.Screen
        name="الموظفيين"
        component={Employees}
        options={{
          tabBarLabel: "الموظفيين",
          tabBarIcon: () => (
            <Ionicons name="person-circle-outline" size={25} color="#00204C" />
          ),
          headerShown: true,
        }}
      />

      {/* <Tab.Screen
        name="بحث فى بيانات الشركات"
        component={Whatsapp}
        options={{
          tabBarLabel: "بحث فى بيانات الشركات",
          tabBarIcon: () => (
            <Ionicons name="location" size={25} color="#00204C" />
          ),
          headerShown: false,
        }}
      /> */}
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

export default SearchData;
