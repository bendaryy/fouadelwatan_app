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


  // const [season, setSeason] = React.useState(2022);
  // return (
  //   <View
  //     style={{
  //       flex: 1,
  //       alignItems: "center",
  //       justifyContent: "center",
  //       backgroundColor: "#00204C",
  //     }}
  //   >
  //     <TouchableOpacity
  //       style={styles.text}
  //       // onPress={() => navigation.navigate("الإقرارات")}
  //       onPress={() => navigation.navigate("الإقرارات",{season})}
  //     >
  //       <Text style={styles.text}>{season}</Text>
  //     </TouchableOpacity>
  //   </View>
  // );
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
               navigation.navigate("الإقرارات", {
                 season: item.season,
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

export default Season;

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

