import React, { useState } from "react";
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

function Season({ navigation }) {
  const DATA = [
    {
      id: 1,
      season: 2021,
    },
    {
      id: 2,
      season: 2022,
    },
  ];

  const [seasonInput, setSeasonInput] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      {/* <FlatList
        data={DATA}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("الإقرارات", {
                season: item.season,
              });
            }}
            style={styles.text}
          >
            <Text style={styles.text2}>{item.season}</Text>
          </TouchableOpacity>
        )}
      /> */}
      <TextInput
        style={styles.input}
        placeholder="Enter season"
        placeholderTextColor="#aaa"
        keyboardType="numeric"
        value={seasonInput}
        onChangeText={setSeasonInput}
      />
      <TouchableOpacity
        style={styles.navigateButton}
        onPress={() => {
          if (seasonInput) {
            navigation.navigate("الإقرارات", {
              season: parseInt(seasonInput),
            });
          }
        }}
      >
        <Text style={styles.navigateButtonText}>التالى</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

export default Season;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#00204C",
  },
  input: {
    height: 50,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    color: "white",
    marginVertical: 10,
    width: "80%",
    backgroundColor: "#3355D4",
    textAlign: "center",
    fontSize: 16,
  },
  navigateButton: {
    backgroundColor: "#3355D4",
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
    alignItems: "center",
  },
  navigateButtonText: {
    color: "white",
    fontSize: 16,
  },
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
