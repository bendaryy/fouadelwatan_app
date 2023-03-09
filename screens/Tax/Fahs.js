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
  Dimensions,
} from "react-native";

// const placeholderImage = require("../assets/placeholder.png");

function Fahs({ navigation }) {
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
    const apiUrl = "https://fouadelwatan.net/api/tax";
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
        style={{ height: 0.5, width: "100%", backgroundColor: "#c8c8c8" }}
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
          <Text style={styles.textStatus}> عدد الفحوصات : {number}</Text>
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
                navigation.navigate("عرض تفصيلى للفحص", {
                  companyName: item.company.name,
                  code: item.company.code,
                  dariba_type: item.dariba_type,
                  fahs_papers: item.fahs_papers,
                  data_entry: item.data_entry,
                  rakam_namozag: item.rakam_namozag,
                  season_from: item.season_from,
                  season_to: item.season_to,
                  decision: item.decision,
                  wa3a2_dariby: item.wa3a2_dariby,
                  takrer_fahs: item.takrer_fahs,
                  fahs_date_start: item.fahs_date_start,
                  lagna_ma2morea: item.lagna_ma2morea,
                  lagna_da5lya: item.lagna_da5lya,
                  sadad: item.sadad,
                  note: item.note,
                });
              }}
              style={styles.itemStyle}
            >
              <Text style={styles.text}>
                {" "}
                <Text style={styles.title}> كود الشركة</Text>:
                {item.company.code}
              </Text>
              <Text style={styles.text}>
                <Text style={styles.title}> إسم الشركة</Text> :
                {item.company.name}
              </Text>
              <Text style={styles.text}>
              
                <Text style={styles.title}> نوع الضريبة</Text>{item.dariba_type}
              </Text>
              {/* <Text style={styles.text}>  <Text style={styles.title}>متطلبات الفحص</Text>  : {item.fahs_papers}</Text> */}
              {/* <Text style={styles.text}>  <Text style={styles.title}>المسئول</Text>  : {item.data_entry}</Text> */}
              {/* <Text style={styles.text}>  <Text style={styles.title}>رقم النموذج</Text>  : {item.rakam_namozag}</Text> */}
              <Text style={styles.text}>
                {" "}
                <Text style={styles.title}>الفحص من </Text> : {item.season_from}
              </Text>
              <Text style={styles.text}>
                {" "}
                <Text style={styles.title}>الفحص الى </Text> : {item.season_to}
              </Text>
              {/* <Text style={styles.text}>  <Text style={styles.title}>القرار </Text>  : {item.decision}</Text> */}
              {/* <Text style={styles.text}>  <Text style={styles.title}>الوعاء الضريبى </Text>  : {item.wa3a2_dariby}</Text> */}
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

  itemStyle: {
    padding: 30,
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
    padding: 10,
    borderWidth: 1,
    borderColor: "white",
    margin: 5,
    fontSize: 15,
    // width: Dimensions.get("window").width,
  },
  title: {
    color: "yellow",
    fontWeight: "bold",
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

export default Fahs;
