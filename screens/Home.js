import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import * as SecureStore from "expo-secure-store"; // Import SecureStore

const Home = ({ navigation }) => {
  const [userData, setUserData] = useState(null);

  // Fetch user data on component mount
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const storedUser = await SecureStore.getItemAsync("user");
        if (storedUser) {
          setUserData(JSON.parse(storedUser));
        }
      } catch (error) {
        console.error("Error fetching user data from SecureStore:", error);
      }
    };

    fetchUserData();
  }, []);

  // Check if userData is available and extract section_id
  const sectionId = userData?.section_id;

  return (
    <View style={styles.center}>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}
      >
        {/* {(sectionId === 1 || sectionId === 7) && ( */}
        {sectionId === 1 && (
          <TouchableOpacity
            onPress={() => navigation.navigate("عرض جميع الشركات")}
            style={styles.TouchableOpacity}
          >
            <Text style={styles.text}>جميع الشركات</Text>
          </TouchableOpacity>
        )}

        {sectionId === 1 && (
          <TouchableOpacity
            style={styles.TouchableOpacity}
            onPress={() =>
              navigation.navigate("بيانات الشركات و العملاء و الموظفين")
            }
          >
            <Text style={styles.text}>
              بيانات الشـركات و العـملاء و الموظفين
            </Text>
          </TouchableOpacity>
        )}

        {sectionId === 1 && (
          <TouchableOpacity
            style={styles.TouchableOpacity}
            onPress={() => navigation.navigate("قسم الضرائب")}
          >
            <Text style={styles.text}>قسم الضرائب</Text>
          </TouchableOpacity>
        )}

        {sectionId === 1 && (
          <TouchableOpacity
            style={styles.TouchableOpacity}
            onPress={() => navigation.navigate("قسم المراجعة")}
          >
            <Text style={styles.text}>قسم المراجعة</Text>
          </TouchableOpacity>
        )}

        {sectionId === 1 && (
          <TouchableOpacity
            style={styles.TouchableOpacity}
            onPress={() => navigation.navigate("الشئون القانونية")}
          >
            <Text style={styles.text}>الشئون القانونية</Text>
          </TouchableOpacity>
        )}

        {sectionId === 1 && (
          <TouchableOpacity
            style={styles.TouchableOpacity}
            onPress={() => navigation.navigate("الفواتير الإلكترونية")}
          >
            <Text style={styles.text}>الفواتير الإلكترونية</Text>
          </TouchableOpacity>
        )}

        {sectionId === 1 && (
          <TouchableOpacity
            style={styles.TouchableOpacity}
            onPress={() => navigation.navigate("الأرشيف الوارد و الصادر")}
          >
            <Text style={styles.text}>الأرشيف الوارد و الصادر</Text>
          </TouchableOpacity>
        )}
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
