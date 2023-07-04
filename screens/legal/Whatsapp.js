import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import moment from 'moment';
import {
  Text,
  View,
  FlatList,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";

// import Search from "./Search";

// const placeholderImage = require("../assets/placeholder.png");

function Whatsapp({ navigation }) {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [term, setTerm] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [masterData, setMasterData] = useState([]);
  const [search, setSearch] = useState();
  const [number, setNumber] = useState();
 
  useEffect(() => {
    let unmounted = false;
    fetchPosts();
    return () => {
      unmounted = true;
    };
  }, []);

  const fetchPosts = () => {
    const apiUrl = "https://fouadelwatan.net/api/legalwhatsapp";
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
        setNumber(Object.keys(responseJson.data).length);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const searchFilter = (text) => {
    if (text) {
      const newData = masterData.filter((item) => {
        const itemData = item.company_name ? item.company_name : "";
        const personName = item.person_name ? item.person_name : "";
        const personNumber = item.mobile_number ? item.mobile_number : "";
        const textData = text;
        return (
          itemData.indexOf(textData) > -1 ||
          personName.indexOf(textData) > -1 ||
          personNumber.indexOf(textData) > -1
        );
      });
      setFilterData(newData);
      setSearch(text);
    } else {
      setFilterData(masterData);
      setSearch(text);
    }
  };

  const ItemSeparatorView = () => {
    return (
      <View
        style={{
          height: 1,
          padding: 3,
          width: "100%",
          backgroundColor: "red",
        }}
      />
    );
  };

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#00204C" />
      </View>
    );
  } else {
    return (
      <>
        <View style={styles.ViewStatus}>
          <Text style={styles.textStatus}> عدد الطلبات : {number}</Text>
        </View>
        <TextInput
          style={styles.TextInput}
          value={search}
          placeholder="البحث بإسم الشركة او إسم الشخص او رقم تليفون الشخص"
          onChangeText={(text) => searchFilter(text)}
        />
        <FlatList
          data={filterData}
          keyExtractor={(item) => item.id}
          ItemSeparatorComponent={ItemSeparatorView}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.itemStyle}>
              <Text style={styles.text}>
                <Text style={styles.title}> كود الطلب : </Text>
                {item.service_code}
              </Text>
              <Text style={styles.text}>
                <Text style={styles.title}> حالة الطلب : </Text>
                {item.status}
              </Text>
              <Text style={styles.text}>
                <Text style={styles.title}> كود الشركة : </Text>
                {item.company_code}
              </Text>
              <Text style={styles.text}>
                <Text style={styles.title}> إسم الشركة : </Text>
                {item.company_name}
              </Text>
              <Text style={styles.text}>
                <Text style={styles.title}>اسم الشخص : </Text>
                {item.person_name}
              </Text>
              <Text style={styles.text}>
                <Text style={styles.title}>رقم تيلفون الشخص: </Text>
                {item.mobile_number}
              </Text>
              <Text style={styles.text}>
                <Text style={styles.title}> نوع الخدمة : </Text>
                {item.legal_service}
              </Text>
              <Text style={styles.text}>
                <Text style={styles.title}> تاريخ رسالة الواتساب : </Text>
                {item.message_date}
              </Text>
              <Text style={styles.text}>
                <Text style={styles.title}> وصف رسالة الواتساب : </Text>
                {item.message}
              </Text>
              <Text style={styles.text}>
                <Text style={styles.title}> ملاحظات : </Text>
                {item.notes}
              </Text>
              <Text style={styles.text}>
                <Text style={styles.title}>تاريخ بداية العمل : </Text>
                {item.start_date}
              </Text>
              <Text style={styles.text}>
                <Text style={styles.title}>تاريخ نهاية العمل :</Text>
                {item.end_date}
              </Text>
              <Text style={styles.text}>
                <Text style={styles.title}>تاريخ كتابة الموقف :</Text>
                {moment(item.created_at).format("Y-M-D")}
              </Text>
              <Text style={styles.text}>
                <Text style={styles.title}>تاريخ تحديث الموقف :</Text>
                {moment(item.updated_at).format("Y-M-D")}
              </Text>
              <Text style={styles.text}>
                <Text style={styles.title}>توقيت تحديث الموقف :</Text>
                {moment(item.updated_at).format("LTS")}
              </Text>
            </TouchableOpacity>
          )}
        />
        <StatusBar style="auto" />
      </>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  carLogo: {
    height: 100,
    width: 100,
  },
  itemStyle: {
    paddingTop: 30,
    paddingBottom: 30,
    paddingRight: 3,
    paddingLeft: 3,
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#00204C",
    color: "white",
  },
  TextInput: {
    height: 40,
    borderWidth: 1,
    paddingLeft: 20,
    margin: 5,
    borderColor: "black",
    width: "95%",
    textAlign: "center",
  },
  text: {
    color: "white",
    textAlign: "right",
    padding: 15,
    borderWidth: 1,
    borderColor: "white",
    margin: 5,
    fontSize: 13,
    width: "100%",
  },
  ViewStatus: {
    backgroundColor: "#00204C",
    width: "100%",
  },
  textStatus: {
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold",
    padding: 2,
    margin: 5,
    color: "white",
  },
  title: {
    color: "yellow",
    fontWeight: "bold",
  },
});

export default Whatsapp;
