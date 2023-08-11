import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { createUser } from "../toolkit/userSlice";
import { StatusBar } from "expo-status-bar";

export default function LoginScreen({navigation,route}) {

  const dispatch = useDispatch();
  const user = useSelector((state)=>state.user.data);

  console.log("user ",user)

  const [name, setName] = useState(user?.name ?? "");
  const [email, setEmail] = useState(user?.email ?? "");
  const [password, setPassword] = useState(user?.password ?? "");

  const [error, setError] = useState({
    name: false,
    email: false,
    password: false,
  });

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  function validate() {
    let validation = true;
    const isValidEmail = emailRegex.test(email);

    if (!name || name.length < 3) {
      setError((pre) => ({ ...pre, name: true }));
      validation = false;
    }
    if (!isValidEmail) {
      setError((pre) => ({ ...pre, email: true }));
      validation = false;
    }
    if (!password || password.length < 8) {
      setError((pre) => ({ ...pre, password: true }));
      validation = false;
    }
    return validation;
  }


  const handleLogin = () => {
    if (validate()) {
      const sendData = {
        name : name,
        email : email,
        password : password
      }
      dispatch(createUser(sendData));
      navigation.navigate('My Profile', {screen : 'Profile'});
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar style="light"/>
      <View style={styles.content}>
        <Text style={styles.header}>{route?.params?.msg ?? "Login"}</Text>

        <View style={{ marginBottom: 24 }}>
          <Text style={{ color: "white", fontSize: 15 }}>Name</Text>
          <TextInput
            style={styles.input}
            value={name}
            name="name"
            onChangeText={(text) => {
              setName(text);
              setError((pre) => ({ ...pre, name: false }));
            }}
          />
          {error.name && (
            <Text style={{ color: "tomato", marginTop: 10 }}>
              * Please enter valid Name
            </Text>
          )}
        </View>

        <View style={{ marginBottom: 24 }}>
          <Text style={{ color: "white", fontSize: 15 }}>Email</Text>
          <TextInput
            style={styles.input}
            value={email}
            name="email"
            onChangeText={(text) => {
              setEmail(text);
              setError((pre) => ({ ...pre, email: false }));
            }}
          />
          {error.email && (
            <Text style={{ color: "tomato", marginTop: 10 }}>
              * Please enter valid Email
            </Text>
          )}
        </View>

        <View style={{ marginBottom: 24 }}>
          <Text style={{ color: "white", fontSize: 15 }}>Password</Text>
          <TextInput
            style={styles.input}
            value={password}
            name="password"
            secureTextEntry={true}
            onChangeText={(text) => {
              setPassword(text);
              setError((pre) => ({ ...pre, password: false }));
            }}
          />
          {error.password && (
            <Text style={{ color: "tomato", marginTop: 10 }}>
              * Please enter Password greater then 8 digit
            </Text>
          )}
        </View>

        <TouchableOpacity
          style={styles.loginButton}
          activeOpacity={0.7}
          onPress={handleLogin}
        >
          <Text style={styles.loginButtonText}>{route?.params?.msg ?? 'Login'}</Text>
        </TouchableOpacity>
        {
          route?.params?.msg === 'Login' && (
            <View style={{ marginTop: 20, alignItems: "center" }}>
            <Text style={{ color: "#f1f1f1", fontSize: 16, fontWeight: "bold" }}>
              Create an account
            </Text>
          </View>
          )
        }

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    // padding: 32,
    width: "100%",
    maxWidth: 300,
  },
  header: {
    marginBottom: 34,
    marginTop: 34,
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
  },
  input: {
    width: "100%",
    color: "white",
    borderColor: "#f1f1f1",
    borderBottomWidth: 1.5,
    height: 36,
    // marginTop: 4,
    paddingHorizontal: 8,
    fontSize: 15,
  },

  loginButton: {
    height: 48,
    borderRadius: 4,
    backgroundColor: "rgba(122,222,224,0.4)",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  loginButtonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
});
