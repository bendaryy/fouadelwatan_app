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
function MezanyatType({ navigation }) {
  const DATA = [
    {
      id: 1,
      type: "عربى",
    },
    {
      id: 2,
      type: "إنجليزى",
    },
  ];
  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#00204C",
          }}
          
    >
      <FlatList
        data={DATA}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("إختر سنة الميزانية", {
                type: item.type,
              });
            }}
            style={styles.text}
          >
            <Text style={styles.text2}>{item.type}</Text>
          </TouchableOpacity>
        )}
      />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

export default MezanyatType;

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
