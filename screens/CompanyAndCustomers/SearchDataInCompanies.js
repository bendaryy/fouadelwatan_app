import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  View,
  Text,
  TextInput,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
  StyleSheet,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { SearchBar } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";

const SearchDataInCompanies = ({ navigation }) => {
  const [searchText, setSearchText] = useState("");
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [searchSubmitted, setSearchSubmitted] = useState(false);
  const [resultsCount, setResultsCount] = useState(0);

  const handleSearch = async () => {
    try {
      setSearchSubmitted(true);
      setLoading(true);

      // Make your API request or perform the search operation here
      // For example, you might use fetch or an API library like axios
      const response = await fetch(
        `https://fouadelwatan.net/api/searchcompany?search=${searchText}`,
        {
          method: "GET",
          headers: {
            AppKey: "31fdhg2334xzewrgfhfdjhrg",
          },
        }
      );
      const result = await response.json();
      setData(result);
      setResultsCount(result.length);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
      Keyboard.dismiss();
    }
  };

  const ItemSeparatorView = () => {
    return (
      <View
        style={{
          height: 1,
          padding: 1.5,
          width: "100%",
          backgroundColor: "#c8c8c8",
        }}
      />
    );
  };

  const renderNoResults = () => (
    <View style={{ alignItems: "center", marginTop: 20, borderRadius: 8 }}>
      <Text style={styles.NotFound}>لا تــوجد نـتائج للبحــث.</Text>
    </View>
  );

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View>
        <SearchBar
          containerStyle={{
            backgroundColor: "transparent",
            borderBottomColor: "transparent",
            borderTopColor: "transparent",
            margin: 10,
          }}
          inputContainerStyle={{
            backgroundColor: "#e0e0e0",
            borderRadius: 20,
            height: 50,
            flexDirection: "row",
            alignItems: "center",
            padding: 10,
            margin: 5,
          }}
          inputStyle={{
            color: "#333",
            fontSize: 18,
            textAlign: "right",
            marginRight: 10,
          }}
          searchIcon={() => (
            <Icon onPress={handleSearch} name="search" size={22} color="#333" />
          )}
          clearIcon={{ color: "#333", name: "close", size: 25 }}
          placeholder="بحث"
          value={searchText}
          onChangeText={(text) => setSearchText(text)}
          onSubmitEditing={handleSearch}
        />
        {/* <TextInput
        placeholder="Type to search..."
        value={searchText}
        onChangeText={(text) => setSearchText(text)}
        onSubmitEditing={handleSearch}
      /> */}
        {searchSubmitted && resultsCount > 0 && !loading && (
          <View style={styles.ViewStatus}>
            <Text style={styles.textStatus}>
              {" "}
              نـتائج البحث : {resultsCount}
            </Text>
          </View>
        )}

        {loading ? (
          <ActivityIndicator size="large" color="#00204C" />
        ) : (
          <FlatList
            data={data}
            keyExtractor={(item) => item.id.toString()}
            ItemSeparatorComponent={ItemSeparatorView}
            style={{ marginBottom: 100 }}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("companyDetails", {
                    name: item.name,
                    archive: item.googledrive,
                    companyId: item.id,
                    TxtYear: item.TxtYear,
                    Kian: item.Kian,
                    AddrCo: item.AddrCo,
                    TxtYear: item.TxtYear,
                    SegelTogary: item.SegelTogary,
                    BetakaDriba: item.BetakaDriba,
                    FileDriba: item.FileDriba,
                    MamoriaDriba: item.MamoriaDriba,
                    code: item.code,
                    NameOner: item.NameOner,
                    PhoneOner: item.PhoneOner,
                    EmailDir: item.EmailDir,
                    EmailOner: item.EmailOner,
                    notee: item.notee,
                  });
                }}
                style={styles.itemStyle}
              >
                <Text style={styles.text}>اسم الشركة : {item.name}</Text>
                <Text style={styles.text}>كود الشركة : {item.code}</Text>
              </TouchableOpacity>
            )}
            ListEmptyComponent={searchSubmitted ? renderNoResults : null}
          />
        )}
        <StatusBar style="auto" />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default SearchDataInCompanies;
const styles = StyleSheet.create({
  NotFound: {
    backgroundColor: "red",
    color: "white",
    padding: 10,
    borderRadius: 8,
    fontWeight: "bold",
    width: "55%",
    textAlign: "center",
  },
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
    padding: 3,
    margin: 3,
  },
  ViewStatus: {
    // backgroundColor: "#00204C",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold",
    marginBottom: 10,
    color: "white",
    padding: 10,
    backgroundColor: "#555",
    width: "50%",
    margin: "auto",
    alignSelf: "center",
    borderRadius: 10,
  },
  textStatus: {
    color: "white",
    fontWeight: "bold",
  },
  searchBarContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    borderRadius: 8,
    padding: 8,
    margin: 10,
  },
  searchInput: {
    flex: 1,
    marginLeft: 8,
    fontSize: 16,
    color: "#333",
  },
});
