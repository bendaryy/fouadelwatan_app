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
          onPress={() => navigation.navigate("بيانات الشركات و العملاء و الموظفين")} // We added an onPress event which would navigate to the About screen
        >
          <Text style={styles.text}>بيانات الشـركات و العـملاء و الموظفين</Text>
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
          title="الأرشيف الوارد و الصادر"
          onPress={() => navigation.navigate("الأرشيف الوارد و الصادر")} // We added an onPress event which would navigate to the About screen
        >
          <Text style={styles.text}>الأرشيف الوارد و الصادر</Text>
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
    // marginTop: 30,
    marginBottom: 30,
    padding: 20,
    borderRadius: 10,
    width: 250,
  },
  text: {
    textAlign: "center",
    color: "white",
  },
});

export default Home;
