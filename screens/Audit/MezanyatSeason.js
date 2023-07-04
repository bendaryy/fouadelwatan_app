import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  SafeAreaView,
  FlatList,
} from "react-native";
function MezanyatSeason({ route, navigation }) {
  const { type } = route.params;
  const DATA = [
    {
      id: 1,
      season: 2021,
    },
    {
      id: 2,
      season: 2022,
    },
    {
      id: 2,
      season: 2023,
    },
  ];
  return (
    <SafeAreaView  style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#00204C",
      }}>
      <FlatList
        data={DATA}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("إختر شهر الميزانية", {
                season: item.season,
                type
              });
            }}
            style={styles.text}
          >
            <Text style={styles.text2}>{item.season}</Text>
          </TouchableOpacity>
        )}
      />
      <StatusBar style="auto" />
    </SafeAreaView>

    
  );
}

export default MezanyatSeason;

const styles = StyleSheet.create({
  text: {
    color: "white",
    fontSize: 20,
    backgroundColor: "#3355D4",
    padding: 30,
    borderRadius: 5,
    textAlign: "center",
    margin: 20,
    width: 150,
  },
  text2: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 15,
  },
});
