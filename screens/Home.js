import React, { useContext } from "react";
import {
  View,
  Button,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";

const Home = ({ navigation }) => {
  return (
    <View style={styles.center}>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}
      >
        <TouchableOpacity
          onPress={() => navigation.navigate("عرض جميع الشركات")} // We added an onPress event which would navigate to the About screen
          style={styles.TouchableOpacity}
        >
          <Text style={styles.text}>جميع الشركات</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.TouchableOpacity}
          title="قسم الضرائب"
          onPress={() => navigation.navigate("قسم الضرائب")} // We added an onPress event which would navigate to the About screen
        >
          <Text style={styles.text}>قسم الضرائب</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.TouchableOpacity}
          title="قسم المراجعة"
          onPress={() => navigation.navigate("قسم المراجعة")} // We added an onPress event which would navigate to the About screen
        >
          <Text style={styles.text}>قسم المراجعة</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.TouchableOpacity}
          title="الفواتير الإلكترونية"
          onPress={() => navigation.navigate("الفواتير الإلكترونية")} // We added an onPress event which would navigate to the About screen
        >
          <Text style={styles.text}>الفواتير الإلكترونية</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.TouchableOpacity}
          title="الشئون القانونية"
          onPress={() => navigation.navigate("الشئون القانونية")} // We added an onPress event which would navigate to the About screen
        >
          <Text style={styles.text}>الشئون القانونية</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    backgroundColor: "#00204C",
  },
  TouchableOpacity: {
    backgroundColor: "#3B71f2",
    marginTop: 30,
    padding: 20,
    borderRadius: 10,
    width: 200,
  },
  text: {
    textAlign: "center",
    color: "white",
  },
});

export default Home;
