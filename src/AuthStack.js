import React, { useContext, useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AuthContext } from "./AuthProvider";
import {
  Button,
  Text,
  View,
  TextInput,
  Image,
  StyleSheet,
  useWindowDimensions,
  Platform,
  Pressable,
  TouchableWithoutFeedback,
  Keyboard
} from "react-native";
import Logo from "../assets/logo2.png";

const Stack = createNativeStackNavigator();

function LoginScreen({ navigation }) {
  const { login, error } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { height } = useWindowDimensions();

  return (
    <TouchableWithoutFeedback onPress={()=>{Keyboard.dismiss()}}>
      <View style={styles.root}>
        <Image
          source={Logo}
          style={[styles.logo, { height: height * 0.3 }]}
          resizeMode="contain"
        />

        {error && (
          <Text style={{ color: "red", marginBottom: 24 }}>{error}</Text>
        )}

        <TextInput
          style={styles.textinput}
          onChangeText={(text) => setEmail(text)}
          placeholder="Email"
          placeholderTextColor="gray"
          textContentType="emailAddress"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.textinput}
          placeholderTextColor="gray"
          onChangeText={(text) => setPassword(text)}
          placeholder="Password"
          secureTextEntry={true}
        />

        {/* <Button
        color="#ccc"
        style={{ padding: 30, margin: 50 }}
        title="Login"
        onPress={() => login(email, password)}
      /> */}
        <Pressable style={styles.button} onPress={() => login(email, password)}>
          <Text style={styles.text}>Login</Text>
        </Pressable>
      </View>
    </TouchableWithoutFeedback>
  );
}

export const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    padding: 20,
    backgroundColor: "#00204C",
    flex: 1,
  },
    logo: {
      marginTop:"30%",
    width: "70%",
    maxWidth: 300,
    maxHeight: 200,
  },
  textinput: {
    height: 40,
    width: 300,
    borderColor: "#bbb",
    borderWidth: 1,
    padding: 8,
    width: "100%",
    marginVertical: 10,
    textAlign: "center",
    borderRadius: 5,
    color: "#fff",
  },
  button: {
    color: "#ccc",
    backgroundColor: "#3B71f3",
    padding: 12,
    borderRadius: 10,
    margin: 30,
    fontWeight: "bold",
    width: "100%",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    color: "white",
  },
});
