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
} from "react-native";

// import Search from "./Search";

// const placeholderImage = require("../assets/placeholder.png");

function Ward({ navigation }) {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  //   const [filterData, setFilterData] = useState([]);
  //   const [masterData, setMasterData] = useState([]);
  //   const [search, setSearch] = useState();
  const [isPaginated, setIspaginated] = useState(false);
  const [number, setNumber] = useState();

  useEffect(() => {
    let unmounted = false;
    fetchPosts();
    return () => {
      unmounted = true;
    };
  }, []);

  const fetchPosts = () => {
    setIspaginated(true);
    const apiUrl = `https://fouadelwatan.net/api/archiveward?page=${page}`;
    // const apiUrl = "https://jsonplaceholder.typicode.com/posts";
    fetch(apiUrl, {
      headers: {
        AppKey: "31fdhg2334xzewrgfhfdjhrg",
      },
    })
      .then((response) => response.json())
      .then((responseJson) => {
        const newData = responseJson.data;
        // setMasterData(responseJson.data);

        setData((prevData) => [...prevData, ...newData]);
        setPage((prevPage) => prevPage + 1);
        setIspaginated(false);
        setNumber(responseJson.total);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  };

  const handleLoadMore = () => {
    if (!isPaginated) {
      fetchPosts();
    }
  };

  //   const searchFilter = (text) => {
  //     if (text) {
  //       const newData = masterData.filter((item) => {
  //         const itemData = item.company.name ? item.company.name : "";
  //         const textData = text;
  //         return itemData.indexOf(textData) > -1;
  //       });
  //       setFilterData(newData);
  //       setSearch(text);
  //     } else {
  //       setFilterData(masterData);
  //       setSearch(text);
  //     }
  //   };

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

  const renderFooter = () => {
    return isPaginated ? (
      <View style={{ alignItems: "center", paddingVertical: 16 }}>
        <ActivityIndicator size="large" color="#00204C" />
      </View>
    ) : null;
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
            العدد الإجمالى للأرشيف الوارد : {number}
          </Text>
        </View>
        {/* <TextInput
          style={styles.TextInput}
          value={search}
          placeholder="البحث بإسم الشركة"
          onChangeText={(text) => searchFilter(text)}
        /> */}
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          ListFooterComponent={renderFooter}
          ItemSeparatorComponent={ItemSeparatorView}
          onEndReached={handleLoadMore}
          onEndReachedThreshold={0.5}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.itemStyle} activeOpacity={1}>
              <Text style={styles.text}>
                <Text style={styles.title}> كود الشركة : </Text>
                {item.company.code}
              </Text>
              <Text style={styles.text}>
                <Text style={styles.title}> إسم الشركة : </Text>
                {item.company.name}
              </Text>
              <Text style={styles.text}>
                <Text style={styles.title}> تاريخ الوارد : </Text>
                {item.ward_date}
              </Text>
              <Text style={styles.text}>
                <Text style={styles.title}> تاريخ تسجيل البيان : </Text>
                {item.tasgeel_date}
              </Text>
              <Text style={styles.text}>
                <Text style={styles.title}>البيان : </Text>
                {item.statement}
              </Text>
              <Text style={styles.text}>
                <Text style={styles.title}> المستلم : </Text>
                {item.receiver}
              </Text>
              <Text style={styles.text}>
                <Text style={styles.title}> مدخل البيان : </Text>
                {item.data_entry}
              </Text>
              <Text style={styles.text}>
                <Text style={styles.title}> ملاحظات : </Text>
                {item.note}
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

export default Ward;
