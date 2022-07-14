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

const CompanyDetails = ({ route, navigation }) => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [term, setTerm] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [masterData, setMasterData] = useState([]);
  const [search, setSearch] = useState();

    const { companyName, companyId } = route.params;
    

     const tableHead = [filterData.code, "كود الشركة"];
     const tableData = [
       [filterData.name, "إسم الشركة"],
       [filterData.TxtYear, "نشاط الشركة"],
       [filterData.Kian, "كيان الشركة"],
       [filterData.AddrCo, "عنوان الشركة"],
       [filterData.BetakaDriba, "رقم البطاقة الضريبية"],
       [filterData.SegelTogary, "رقم السجل التجارى"],
       [filterData.MamoriaDriba, "المأمورية التابعة لها"],
       [filterData.NameOner, "مالك الشركة"],
       [filterData.PhoneOner, "المدير المالى"],
       [filterData.EmailOner, "إيميل الشركة"],
       [filterData.notee, "ملاحظات"],
     ];

  useEffect(() => {
    fetchCompany();
    return () => {};
  }, []);

  const fetchCompany = () => {
    const apiUrl = `https://fouadelwatan.net/api/company/${companyId}`;
    // const apiUrl = "https://jsonplaceholder.typicode.com/posts";
    fetch(apiUrl, {
      headers: {
        AppKey: "31fdhg2334xzewrgfhfdjhrg",
      },
    })
      .then((response) => response.json())
      .then((responseJson) => {
        setFilterData(responseJson.data);
        setMasterData(responseJson.data);
        setLoading(false)
      })
      .catch((error) => {
        console.error(error);
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

export default CompanyDetails;
