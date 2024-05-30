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

function MezanyatSeason({ route, navigation }) {
  const { type } = route.params;
  const [seasonInput, setSeasonInput] = useState("");

  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#00204C",
      }}
    >
      <Text style={{ color: "white" }}> سنة الميزانية</Text>
      <TextInput
        style={styles.input}
        placeholder="برجاء كتابة سنة الميزانية"
        placeholderTextColor="#ccc"
        keyboardType="numeric"
        value={seasonInput}
        onChangeText={setSeasonInput}
      />
      <TouchableOpacity
        style={styles.navigateButton}
        onPress={() => {
          if (seasonInput) {
            navigation.navigate("إختر شهر الميزانية", {
              season: parseInt(seasonInput),
              type,
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

export default MezanyatSeason;

const styles = StyleSheet.create({
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
