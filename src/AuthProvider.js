import React, { useState } from "react";
// import { AsyncStorageStatic } from "react-native";
import * as SecureStore from "expo-secure-store";
import axios from "axios";

axios.defaults.baseURL = "https://fouadelwatan.net/";

export const AuthContext = React.createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        error,
        login: (email, password) => {
         axios.defaults.headers.common["AppKey"] = "31fdhg2334xzewrgfhfdjhrg";
          axios
            .post("/api/login", {
              email,
              password,
            })
            .then((response) => {
              const userResponse = {
                email: response.data.user.email,
                id: response.data.user.id,
                profile_photo: response.data.user.profile_photo_url,
                token: response.data.token,
                name: response.data.user.name,
              };
              console.log(userResponse);
              setUser(userResponse);
              setError(null);
              SecureStore.setItemAsync("user", JSON.stringify(userResponse));
            })
            .catch((error) => {
              const key = Object.keys(error.response.data.errors)[0];
              setError(error.response.data.errors[key][0]);
              console.log(error.response.data.errors);
            });
        },
        logout: () => {
          const userToken = user.token.split("|");
          const tokenId = userToken[0];
          axios.defaults.headers.common[
            "Authorization"
          ] = `Bearer ${user.token}`;
          axios.defaults.headers.common["AppKey"] = `31fdhg2334xzewrgfhfdjhrg`;
          axios
            .post(`api/logout/${tokenId}`)
            .then((response) => {
              setUser(null);
              SecureStore.deleteItemAsync("user");
            })
            .catch((error) => {
              console.log(error.response);
            });
        },
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
