import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";

// import { ContactStackNavigator } from "./StackNavigator";
// import WatanCompanies from "../screens/companies/WatanCompanies";
// import Ekrar from "../screens/tax/Ekrar";
import CompaniesTabs from "../screens/Tabs/Companies";
import TabNavigator from "./TabNavigator";
import TaxTabs from "../screens/Tabs/Tax";
import AuditTabs from "../screens/Tabs/Audit";
import Einvoicesent from "../screens/Einvoice/Einvoicesent";
import LegalSituation from "../screens/legal/LegalSituation";
import LegalHome from "../screens/legal/LegalHome";
import LegalTabs from "../screens/Tabs/LegalTabs";
import ArchiveWard from "../screens/Tabs/ArchiveWard";
// import WatanCompanies from "../screens/companies/WatanCompanies";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="الصفحة الرئيسية" component={TabNavigator} />

      <Drawer.Screen
        name="قسم الضرائب"
        component={TaxTabs}
        options={{ headerTitle: "" }}
      />
      <Drawer.Screen name="عرض جميع الشركات" component={CompaniesTabs} />
      <Drawer.Screen
        options={{ headerTitle: "" }}
        name="قسم المراجعة"
        component={AuditTabs}
      />
      <Drawer.Screen
        options={{ headerTitle: "" }}
        name="الفواتير الإلكترونية"
        component={Einvoicesent}
      />
      <Drawer.Screen
        options={{ headerTitle: "" }}
        name="الشئون القانونية"
        component={LegalTabs}
      />
      <Drawer.Screen
        options={{ headerTitle: "الأرشيف الصادر والوارد" }}
        name="الأرشيف الوارد و الصادر"
        component={ArchiveWard}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
