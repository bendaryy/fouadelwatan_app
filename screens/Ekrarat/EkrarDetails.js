import React, { useState, useEffect } from "react";
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

const EkrarDetails = ({ route, navigation }) => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [term, setTerm] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [masterData, setMasterData] = useState([]);
  const [search, setSearch] = useState();
  const tableHead = [filterData.code, "كود الشركة"];
  const tableData = [
    [filterData.name, "إسم الشركة"],
    [masterData.status, "حالة الإقرار"],
    [masterData.auditor, "المراجع"],
  ];

  const { ekrarId } = route.params;

  useEffect(() => {
    let unmounted = false;
    fetchCompany();
    return () => {
      unmounted = true;
    };
  }, []);

  const fetchCompany = () => {
    const baseUrl = `https://fouadelwatan.net/api`;
    // const apiUrl = `http://192.168.1.20:8000/api/ekrarat/${ekrarId}`;
    // const apiUrl = "https://jsonplaceholder.typicode.com/posts";
    axios({
      method: "get",
      url: `${baseUrl}/ekrarat/${ekrarId}`,
    }).then((response) => {
      setMasterData(response.data.data);
      setFilterData(response.data.data.company);
      setLoading(false);
    });
  };

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#00204C" />
      </View>
    );
  } else {
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
    height: 80,
    backgroundColor: "#00204C",
    textAlign: "center",
    color: "white",
  },
  text: { color: "white", textAlign: "center" },
});
export default EkrarDetails;
