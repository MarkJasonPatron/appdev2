import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Login = ({ navigation }) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>

      <View style={styles.logoBox}>
        <Image
          source={require("../components/login.png")}
          style={styles.logo}
        />
      </View>

      <Text style={styles.title}>Welcome</Text>
      <Text style={styles.subtitle}>Please login to continue</Text>

      {/* Email */}
      <View style={styles.inputWrapper}>
        <Ionicons name="person-circle-outline" size={22} color="#444" />
        <TextInput
          placeholder="Email address"
          placeholderTextColor="#777"
          style={styles.input}
          value={email}
          onChangeText={setEmail}
        />
      </View>

      {/* Password */}
      <View style={styles.inputWrapper}>
        <Ionicons name="key-outline" size={22} color="#444" />
        <TextInput
          placeholder="Password"
          placeholderTextColor="#777"
          style={styles.input}
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
      </View>

      {/* Login Button */}
    <TouchableOpacity
        style={styles.loginButton}
        onPress={() => navigation.navigate("Todo")}
    >
        <Text style={styles.loginText}>Log In</Text>
    </TouchableOpacity>

      {/* Signup */}
      <View style={styles.signupRow}>
        <Text style={styles.signupText}>New user?</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
            <Text style={styles.signupLink}> Sign up</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#eef2ff",
    justifyContent: "center",
    paddingHorizontal: 30
  },

  logoBox: {
    alignItems: "center",
    marginBottom: 20
  },

  logo: {
    width: 110,
    height: 110,
    resizeMode: "contain"
  },

  title: {
    fontSize: 28,
    fontWeight: "700",
    textAlign: "center",
    color: "#222"
  },

  subtitle: {
    textAlign: "center",
    color: "#666",
    marginBottom: 30
  },

  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ffffff",
    paddingHorizontal: 15,
    borderRadius: 12,
    marginBottom: 18,
    height: 50,
    elevation: 2
  },

  input: {
    flex: 1,
    marginLeft: 10,
    fontSize: 15
  },

  loginButton: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#4f46e5",
    padding: 15,
    borderRadius: 12,
    marginTop: 10
  },

  loginText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
    marginRight: 8
  },

  signupRow: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 25
  },

  signupText: {
    color: "#444"
  },

  signupLink: {
    color: "#4f46e5",
    fontWeight: "600"
  }

});

export default Login;