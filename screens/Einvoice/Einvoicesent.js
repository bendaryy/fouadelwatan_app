import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import {
  Text,
  View,
  FlatList,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  Linking,
} from "react-native";

// import Search from "./Search";

// const placeholderImage = require("../assets/placeholder.png");

function Einvoicesent({ navigation }) {
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
    const apiUrl = "https://fouadelwatan.net/api/sent";
    // const apiUrl = "https://jsonplaceholder.typicode.com/posts";
    fetch(apiUrl, {
      headers: {
        AppKey: "31fdhg2334xzewrgfhfdjhrg",
      },
    })
      .then((response) => response.json())
      .then((responseJson) => {
        setFilterData(responseJson);
        setMasterData(responseJson);
        setNumber(Object.keys(responseJson).length);
        setLoading(false);
        //   console.log(responseJson)
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const searchFilter = (text) => {
    if (text) {
      const newData = masterData.filter((item) => {
        const itemData = item.receiverName ? item.receiverName : "";
        const textData = text;
        return itemData.indexOf(textData) > -1;
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
          padding: 1,
          width: "100%",
          backgroundColor: "#c8c8c8",
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
          <Text style={styles.textStatus}>
            {" "}
            عدد الفواتير المرسلة و المُستقبلة : {number}
          </Text>
          <Text style={styles.textStatus}>
            {" "}
            الفواتير التى تم إرسالها للشركات باللون الأخضر
          </Text>
          <Text style={styles.textStatus}>
            {" "}
            الفواتير التى تم إستقبالها من الشركات باللون الأحمر
          </Text>
        </View>
        <TextInput
          style={styles.TextInput}
          value={search}
          placeholder="البحث بإسم الشركة"
          onChangeText={(text) => searchFilter(text)}
        />
        <FlatList
          data={filterData}
          keyExtractor={(item) => item.uuid}
          ItemSeparatorComponent={ItemSeparatorView}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => Linking.openURL(item.publicUrl)}
              style={[
                item.issuerId === "410973742"
                  ? styles.itemStyle
                  : styles.itemStyle2,
              ]}
            >
              <Text style={styles.text}>
                {item.issuerId === "410973742"
                  ? item.receiverName
                  : item.issuerName}
              </Text>
              <Text
                style={{
                  color: "white",
                  marginTop: 10,
                  fontWeight: "bold",
                  fontSize: 13,
                }}
              >
                {item.status == "Submitted" ? (
                  <Text>تم إرسالها و جارى مراجعتها </Text>
                ) : item.status == "Valid" ? (
                  <Text>صحيحة </Text>
                ) : item.status=="Invalid"?<Text>غير صحيحة</Text>: item.status == "Cancelled" ? (
                  <Text>تم إلغائها</Text>
                ) : item.status == "Rejected" ? (
                  <Text>تم رفضها</Text>
                ) : (
                  item.status
                )}
              </Text>
              <Text
                style={{
                  color: "white",
                  marginTop: 10,
                  fontWeight: "bold",
                  fontSize: 13,
                }}
                  >
                      المبلغ الإجمالى : {item.total}
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
    padding: 30,
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "green",
    color: "white",
  },
  itemStyle2: {
    padding: 30,
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "red",
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
});

export default Einvoicesent;