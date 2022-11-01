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
function AuditFilesMonth({ route, navigation }) {
  const { season } = route.params;
  const DATA = [
    {
      id: 1,
      month: 3,
    },
    {
      id: 2,
      month: 6,
    },
    {
      id: 3,
      month: 8,
    },
    {
      id: 4,
      month: 9,
    },
    {
      id: 5,
      month: 12,
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
              navigation.navigate("إختر حالة ملف المراجعة", {
                season: season,
                month: item.month,
              });
            }}
            style={styles.text}
          >
            <Text style={styles.text2}>{item.month}</Text>
            </TouchableOpacity>
        )}
        />
     {/* <Text>{ season }</Text> */}
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

export default AuditFilesMonth;

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
