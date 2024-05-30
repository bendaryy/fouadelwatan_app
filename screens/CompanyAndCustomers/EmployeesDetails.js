import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  FlatList,
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Linking,
  Pressable,
} from "react-native";
import {
  Table,
  TableWrapper,
  Row,
  Rows,
  Col,
  Cols,
  Cell,
} from "react-native-table-component";

const EmployeesDetails = ({ route, navigation }) => {
  const [isLoading, setLoading] = useState(false);
  const [search, setSearch] = useState();

  const { name, section, phone, email } = route.params;

  const tableHead = [name, "اسم الموظف"];

  const tableData = [
    [section, "القسم"],

    [
      <Pressable onPress={() => Linking.openURL(`tel:${phone}`)}>
        <Text
          style={{
            textAlign: "center",
            fontSize: 20,
            color: "white",
            margin: "auto",
            alignContent: "center",
            alignItems: "center",
            marginLeft: 15,
            padding: 2,
          }}
        >
          {phone != null ? phone : "لا يوجد"}
        </Text>
      </Pressable>,

      "رقم الموبايل",
    ],

    [
      <Pressable onPress={() => Linking.openURL(`mailto:${email}`)}>
        <Text
          style={{
            textAlign: "center",
            color: "white",
            margin: "auto",
            alignContent: "center",
            alignItems: "center",
            marginLeft: 15,
            padding: 2,
          }}
        >
          {email != null ? email : "لا يوجد"}
        </Text>
      </Pressable>,

      "البريد الإلكــترونى",
    ],

    // [Kian, "كيان الشركة"],
    // [AddrCo, "عنوان الشركة"],
    // [BetakaDriba, "رقم البطاقة الضريبية"],
    // [FileDriba, "رقم الملف الضريبى"],
    // [SegelTogary, "رقم السجل التجارى"],
    // [MamoriaDriba, "المأمورية التابعة لها"],
    // [NameOner, "مالك الشركة"],
    // [PhoneOner, "المدير المالى"],
    // [EmailOner, "إيميل الشركة"],
    // [notee, "ملاحظات"],
  ];
  //   const notes = [[notee, "ملاحظات"]];

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#00204C" />
      </View>
    );
  } else {
    return (
      <View style={{ textAlign: "center" }}>
        {/* <Text>اسم الشركة : {masterData.name}</Text>
        <Text>كود الشركة : {masterData.code}</Text> */}

        <ScrollView>
          <Table
            borderStyle={{ borderWidth: 1.5, borderColor: "#c8e1ff" }}
            style={{ margin: 5 }}
          >
            <Row data={tableHead} style={styles.head} textStyle={styles.text} />
            <Rows
              data={tableData}
              style={styles.head}
              textStyle={styles.text}
            />
            {/* <Row data={notes} style={styles.head} textStyle={styles.text} /> */}
            {/* <Rows data={notes} style={styles.note} textStyle={styles.text} /> */}
          </Table>
        </ScrollView>
      </View>
    );
  }
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingTop: 30,
    backgroundColor: "#fff",
    color: "white",
  },
  head: {
    height: 100,
    backgroundColor: "#00204C",
    textAlign: "center",
    color: "white",
  },
  text: { color: "white", textAlign: "center" },
  note: {
    height: 600,
    backgroundColor: "#00204C",
    textAlign: "center",
    color: "white",
  },
});

export default EmployeesDetails;
