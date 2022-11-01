// import React from "react";
// import {
//   StyleSheet,
//   Text,
//   TouchableOpacity,
//   View,
//   TextInput,
// } from "react-native";
// function MezanyaStatus({ navigation }) {
//   const [inCompany, setInCompany] = React.useState("فى الشركة للتوقيع");
//   const [InArchive, setInArchive] = React.useState("فى الأرشيف");
//   const [InOffice, setInOffice] = React.useState("فى المكتب");
//   const [noPrint, setNoPrint] = React.useState("غير مطبوعة");
//   return (
//     <View
//       style={{
//         flex: 1,
//         alignItems: "center",
//         justifyContent: "center",
//         backgroundColor: "#00204C",
//       }}
//     >
//       <TouchableOpacity
//         style={styles.text}
//         onPress={() => navigation.navigate("الميزانيات", { inCompany })}
//       >
//         <Text style={styles.text2}>{inCompany}</Text>
//       </TouchableOpacity>
//       <TouchableOpacity
//         style={styles.text}
//         onPress={() => navigation.navigate("الميزانيات", { InArchive })}
//       >
//         <Text style={styles.text2}>{InArchive}</Text>
//       </TouchableOpacity>
//       <TouchableOpacity
//         style={styles.text}
//         onPress={() => navigation.navigate("الميزانيات", { InOffice })}
//       >
//         <Text style={styles.text2}>{InOffice}</Text>
//       </TouchableOpacity>
//       <TouchableOpacity
//         style={styles.text}
//         onPress={() => navigation.navigate("الميزانيات", { noPrint })}
//       >
//         <Text style={styles.text2}>{noPrint}</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

// export default MezanyaStatus;

// const styles = StyleSheet.create({
//   text: {
//     color: "white",
//     fontSize: 20,
//     backgroundColor: "#3355D4",
//     padding: 30,
//     borderRadius: 5,
//     textAlign: "center",
//     margin: 12,
//     width: 200,
//   },
//   text2: {
//     color: "white",
//     textAlign: "center",
//     fontWeight: "bold",
//     fontSize: 15,
//   },
// });

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
function MezanyaStatus({ route, navigation }) {
  const { type,season, month } = route.params;
  const DATA = [
    {
      id: 1,
      status: "فى الشركة للتوقيع",
    },
    {
      id: 2,
      status: "فى المكتب",
    },
    {
      id: 3,
      status: "فى الأرشيف",
    },
    {
      id: 4,
      status: "غير مطبوعة",
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
              navigation.navigate("الميزانيات", {
                season: season,
                status: item.status,
                month: month,
                type
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

export default MezanyaStatus;

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
