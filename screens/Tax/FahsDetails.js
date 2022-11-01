import React from "react";
import {
  Text,
  View,
  FlatList,
  StyleSheet,
  ActivityIndicator,
  ScrollView,
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

import axios from "axios";

const FahsDetails = ({ route, navigation }) => {
  const {
    companyName,
    code,
    dariba_type,
    fahs_papers,
    data_entry,
    rakam_namozag,
    season_from,
    season_to,
    decision,
    wa3a2_dariby,
    takrer_fahs,
    fahs_date_start,
    lagna_ma2morea,
    lagna_da5lya,
    sadad,
    note,
  } = route.params;
  const tableHead = [code, "كود الشركة"];
  const tableData = [
    [companyName, "إسم الشركة"],
    [dariba_type, "نوع الضريبة"],
    [data_entry, "المسئول"],
    [rakam_namozag, "رقم النموذج"],
    [fahs_date_start, "تاريخ بداية الفحص"],
    [lagna_ma2morea, "لجنة داخلية (مأمورية)"],
    [lagna_da5lya, "لجنة داخلية (متخصصة)"],
    [season_from, "الفحص من"],
    [season_to, "الفحص إلى"],
    [decision, "القرار"],
    [sadad, "السداد"],
    [takrer_fahs, "تقرير الفحص"],
    [wa3a2_dariby, "الوعاء الضريبى"],
  ];
  const mottlbatFahs = [
    [fahs_papers, "متطلبات الفحص"],
    [note, "ملاحظات"],
  ];

  return (
    <View
      style={{
        textAlign: "center",
        backgroundColor: "#00204C",
        flex: 1,
        color: "white",
      }}
    >
      <ScrollView>
        <Table
          borderStyle={{ borderWidth: 1.5, borderColor: "#c8e1ff" }}
          style={{ margin: 5 }}
        >
          <Row data={tableHead} style={styles.head} textStyle={styles.text} />
          <Rows data={tableData} style={styles.head} textStyle={styles.text} />
          <Rows
            data={mottlbatFahs}
            style={styles.note}
            textStyle={styles.text}
          />
        </Table>
      </ScrollView>
      <Text></Text>
    </View>
  );
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
    height: 80,
    backgroundColor: "#00204C",
    textAlign: "center",
    color: "white",
  },
  text: { color: "white", textAlign: "center" },
  note: {
    height: 400,
    backgroundColor: "#00204C",
    textAlign: "center",
    color: "white",
  },
});
export default FahsDetails;
