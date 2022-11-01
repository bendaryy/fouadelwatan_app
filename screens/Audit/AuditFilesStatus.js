

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
function AuditFileStatus({ route, navigation }) {
  const { season, month } = route.params;
  const DATA = [
    {
      id: 1,
      status: "لم يتم تسليمه للأرشيف",
      operator:"="
    },
    {
        id: 2,
        status: "تم تسليمه للأرشيف",
        operator:"!="
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
              navigation.navigate("ملفات المراجعة", {
                season: season,
                operator: item.operator,
                month: month,
              });
            }}
            style={styles.text}
          >
            <Text style={styles.text2}>{item.status}</Text>
          </TouchableOpacity>
        )}
      />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

export default AuditFileStatus;

const styles = StyleSheet.create({
  text: {
    color: "white",
    fontSize: 20,
    backgroundColor: "#3355D4",
    padding: 30,
    borderRadius: 5,
    textAlign: "center",
    margin: 20,
    width: 200,
  },
  text2: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 15,
  },
});
