import React, { useEffect, useState } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import * as SecureStore from "expo-secure-store"; // Import SecureStore

// Import your screens
import CompaniesTabs from "../screens/Tabs/Companies";
import TabNavigator from "./TabNavigator";
import TaxTabs from "../screens/Tabs/Tax";
import AuditTabs from "../screens/Tabs/Audit";
import Einvoicesent from "../screens/Einvoice/Einvoicesent";
import ArchiveWard from "../screens/Tabs/ArchiveWard";
import SearchData from "../screens/Tabs/SearchData";
import LegalTabs from "../screens/Tabs/LegalTabs";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  const [userData, setUserData] = useState(null);

  // Fetch user data on component mount
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const storedUser = await SecureStore.getItemAsync("user");
        if (storedUser) {
          setUserData(JSON.parse(storedUser));
        }
      } catch (error) {
        console.error("Error fetching user data from SecureStore:", error);
      }
    };

    fetchUserData();
  }, []);

  // Check if userData is available and extract section_id
  const sectionId = userData?.section_id;

  return (
    <Drawer.Navigator>
      {/* Always show the main tab */}
      <Drawer.Screen name="الصفحة الرئيسية" component={TabNavigator} />

      {/* Conditionally render other sections based on section_id */}
      {/* {(sectionId === 1 || sectionId === 7) && ( */}
      {sectionId === 1 && (
        <Drawer.Screen name="عرض جميع الشركات" component={CompaniesTabs} />
      )}
      {sectionId === 1 && (
        <Drawer.Screen
          options={{ headerTitle: "" }}
          name="بيانات الشركات و العملاء و الموظفين"
          component={SearchData}
        />
      )}
      {sectionId === 1 && (
        <Drawer.Screen
          name="قسم الضرائب"
          component={TaxTabs}
          options={{ headerTitle: "" }}
        />
      )}
      {sectionId === 1 && (
        <Drawer.Screen
          options={{ headerTitle: "" }}
          name="قسم المراجعة"
          component={AuditTabs}
        />
      )}

      {sectionId === 1 && (
        <Drawer.Screen
          options={{ headerTitle: "" }}
          name="الشئون القانونية"
          component={LegalTabs}
        />
      )}

      {sectionId === 1 && (
        <Drawer.Screen
          options={{ headerTitle: "" }}
          name="الفواتير الإلكترونية"
          component={Einvoicesent}
        />
      )}
      {sectionId === 1 && (
        <Drawer.Screen
          options={{ headerTitle: "الأرشيف الصادر والوارد" }}
          name="الأرشيف الوارد و الصادر"
          component={ArchiveWard}
        />
      )}
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
