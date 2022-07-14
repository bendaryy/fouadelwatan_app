import React, { useContext, useEffect } from "react";
import { Text, View, FlatList, Button } from "react-native";
import axios from "axios";
import { AuthContext } from "../src/AuthProvider";

axios.defaults.baseURL = `https://fouadelwatan.net/`;

function Roles() {
  const { user, logout } = useContext(AuthContext);
  const [userData, setUserData] = React.useState("");
  const [permissions, setPermission] = React.useState("");
  useEffect(() => {
    axios.defaults.headers.common["Authorization"] = `Bearer ${user.token}`;

    axios
      .get(`/api/users/${user.id}`)
      .then((response) => {
        setUserData(response.data.data[0]);
        setPermission(response.data.data[0].permissions);
        // console.log(userData);
        console.log(permissions);
      })
      .catch((error) => {
        console.log(error.response);
      });
  }, []);
  return (
    <View>
      <Text>{userData.name}</Text>
      <FlatList
        data={Object.keys(permissions)}
        renderItem={({ item }) => (
          <View>
            <Text>
              {permissions[item].name == "عرض الشركات" ? (
                <Button title="عرض الشركات" />
              ) : permissions[item].name == "عرض ملفاتى" ? (
                <Button title="عرض ملفاتى" />
              ) : (
                permissions[item].name
              )}
            </Text>
                {/* <Text>{permissions[item].name == "عرض الشركات" ? <Button title="عرض الشركات" />:'' }</Text> */}
                {/* <Text>{permissions[item].name == "عرض ملفاتى" ? <Button title="عرض ملفاتى" />:'' }</Text> */}
          </View>
        )}
      />
    </View>
  );
}

export default Roles;
