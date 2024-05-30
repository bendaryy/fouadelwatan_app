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

const CustomersDetails = ({ route, navigation }) => {
  const [isLoading, setLoading] = useState(false);
  const [search, setSearch] = useState();

  const { person_name, company_name, phone1,phone2,email1,email2,position } = route.params;

  const tableHead = [person_name, "اسم الشخص"];
  const tableData = [
    [company_name, "إسم الشركة"],
    [position, "الوظيفة"],

    [
      <Pressable onPress={() => Linking.openURL(`tel:${phone1}`)}>
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
          {phone1 != null ? phone1 : "لا يوجد"}
        </Text>
      </Pressable>,

      "رقم الموبايل",
    ],
    [
      <Pressable onPress={() => Linking.openURL(`tel:${phone2}`)}>
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
          {phone2 != null ? phone2 : "لا يوجد"}
        </Text>
      </Pressable>,

      "رقم الموبايل البديل",
    ],
    [
      <Pressable onPress={() => Linking.openURL(`mailto:${email1}`)}>
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
          {email1 != null ? email1 : "لا يوجد"}
        </Text>
      </Pressable>,

      "البريد الإلكــترونى",
    ],
    [
      <Pressable onPress={() => Linking.openURL(`mailto:${email2}`)}>
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
          {email2 != null ? email2 : "لا يوجد"}
        </Text>
      </Pressable>,

      "البريد الإلكــترونى البديل",
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

export default CustomersDetails;
