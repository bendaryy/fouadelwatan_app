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

const CompanyDetails = ({ route, navigation }) => {
  const [isLoading, setLoading] = useState(false);
  const [search, setSearch] = useState();

  const {
    name,
    archive,
    companyId,
    code,
    TxtYear,
    Kian,
    AddrCo,
    BetakaDriba,
    FileDriba,
    SegelTogary,
    MamoriaDriba,
    NameOner,
    PhoneOner,
    EmailDir,
    EmailOner,
    notee,
  } = route.params;

  const tableHead = [code, "كود الشركة"];
  const tableData = [
    [name, "إسم الشركة"],
    [
      <Pressable
        style={{ color: "white", textAlign: "center", backgroundColor: "blue" }}
      >
        <Text
          onPress={
            archive != null
              ? () => Linking.openURL(archive)
              : () => alert("لا يوجد أرشيف لهذه الشركة حالياً")
          }
          style={{
            textAlign: "center",
            color: "white",
            margin: "auto",
            alignContent: "center",
            alignItems: "center",
            marginLeft: 15,
            padding: 30,
          }}
        >
          {archive != null
            ? "الذهاب إلى الأرشيف الإلكترونى "
            : "لا يوجد ارشيف لهذه الشركة حالياً"}
        </Text>
      </Pressable>,
      " الأرشيف الإلكترونى",
    ],

    [TxtYear, "نشاط الشركة"],
    [Kian, "كيان الشركة"],
    [AddrCo, "عنوان الشركة"],
    [BetakaDriba, "رقم البطاقة الضريبية"],
    [FileDriba, "رقم الملف الضريبى"],
    [SegelTogary, "رقم السجل التجارى"],
    [MamoriaDriba, "المأمورية التابعة لها"],
    [NameOner, "مالك الشركة"],
    [PhoneOner, "المدير المالى"],
    [
      <Pressable onPress={() => Linking.openURL(`tel:${EmailDir}`)}>
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
          {EmailDir != null ? EmailDir : "لا يوجد"}
        </Text>
      </Pressable>,

      "رقم المدير المالى",
    ],
    [EmailOner, "إيميل الشركة"],
    // [notee, "ملاحظات"],
  ];
  const notes = [[notee, "ملاحظات"]];

 
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
            <Rows data={notes} style={styles.note} textStyle={styles.text} />
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

export default CompanyDetails;
