import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// import { AllCompanies } from "./StackNavigator";
import Ionicons from "react-native-vector-icons/Ionicons";
import Ekrar from "../Tax/Ekrar";
import Fahs from "../Tax/Fahs";
import { Tax } from "../../navigations/StackNavigator";
import Season from "../Tax/Season";

const Tab = createBottomTabNavigator();

const TaxTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false, headerTitle: "fouadelwatan" }}
    >
      <Tab.Screen
        name="الضرايب"
        component={Tax}
        options={{
          tabBarLabel: "قسم الضرائب",
          tabBarIcon: () => <Ionicons name="bookmarks" size={25} color="#00204C" />,
          headerShown:false
        }}
      />
      <Tab.Screen
        name="إختر السنة"
        component={Season}
        options={{
          tabBarLabel: "الإقرارات",
          tabBarIcon: () => <Ionicons name="albums" size={25} color="#00204C" />,
          headerShown:false
        }}
      />
      <Tab.Screen
        name="الفحوصات"
        component={Fahs}
        options={{
          tabBarLabel: "الفحوصات",
          tabBarIcon: () => (
            <Ionicons name="newspaper" size={25} color="#00204C" />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TaxTabs;
