import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  FlatList,
  ActivityIndicator,
  ScrollView,
  StyleSheet,
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

const MezanyaDetails = ({ route, navigation }) => {
  const [isLoading, setLoading] = useState(false);

  const {
    companyName,
    code,
    auditor,
    auditor_manager,
    status,
    season,
    month,
    mezanya_copies,
    type,
    statement
  } = route.params;

  const tableHead = [code, "كود الشركة"];
  const tableData = [
    [companyName, "إسم الشركة"],
    [season, "سنة الميزانية"],
    [month, "شهر الميزانية"],
    [mezanya_copies, "عدد نسخ الميزانية"],
    [statement, "بيان الميزانية"],
    [auditor, "المراجع"],
    [auditor_manager, "المدير المسئول"],
    [status, "حالة الميزانية"],
    [type, "نوع الميزانية"],

    // [notee, "ملاحظات"],
  ];

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#00204C" />
      </View>
    );
  } else {
    return (
      <View style={{ textAlign: "center" }}>
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

export default MezanyaDetails;
