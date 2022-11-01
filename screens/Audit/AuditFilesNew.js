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
  ScrollView,
} from "react-native";

// import Search from "./Search";

// const placeholderImage = require("../assets/placeholder.png");

function AuditFileNew({ route, navigation }) {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [term, setTerm] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [masterData, setMasterData] = useState([]);
  const [search, setSearch] = useState();
  const [number, setNumber] = useState();

  const { season, month, operator } = route.params;

  useEffect(() => {
    let unmounted = false;
    fetchPosts();
    return () => {
      unmounted = true;
    };
  }, []);

  const fetchPosts = () => {
    const apiUrl = `https://fouadelwatan.net/api/AuditFile/${season}/${month}/${operator}`;

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
        const itemData = item.company.name ? item.company.name : "";
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
          <Text style={styles.textStatus}>سنة ملفات المراجعة : {season}</Text>
          <Text style={styles.textStatus}>شهر ملفات المراجعة : {month}</Text>
          {/* <Text style={styles.textStatus}>حالة الميزانية : {status}</Text> */}
          <Text style={styles.textStatus}>
            {" "}
            {operator == "!="? "الملفات موجودة بالأرشيف": "الملفات غير موجودة بالأرشيف"}
            : {number}
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
          keyExtractor={(item) => item.id}
          ItemSeparatorComponent={ItemSeparatorView}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("عرض تفصيلى للميزانية", {
                  companyName: item.company.name,
                  code: item.company.code,
                  companyId: item.company.id,
                  season: item.season,
                  month: item.month,
                  auditor: item.auditor,
                  mezanya_copies: item.mezanya_copies,
                  auditor_manager: item.auditor_manager,
                  status: item.mezanya_status,
                  type: item.mezanya_type,
                  statement: item.statement,
                });
              }}
              style={styles.itemStyle}
            >
              <Text style={styles.text}>{item.company.name}</Text>
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
    // alignItems: "center",
    // justifyContent: "center",
    backgroundColor: "white",
  },
  carLogo: {
    height: 100,
    width: 100,
  },
  itemStyle: {
    padding: 50,
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
  ViewStatus: {
    backgroundColor: "#00204C",
    width: "100%",
  },
});

export default AuditFileNew;
