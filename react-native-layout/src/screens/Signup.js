import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Signup = ({ navigation }) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Sign up</Text>

      <View style={styles.inputBox}>
        <Ionicons name="person-outline" size={20} color="#444" />
        <TextInput
          placeholder="Email"
          style={styles.input}
          value={email}
          onChangeText={setEmail}
        />
      </View>

      <View style={styles.inputBox}>
        <Ionicons name="lock-closed-outline" size={20} color="#444" />
        <TextInput
          placeholder="Password"
          secureTextEntry
          style={styles.input}
          value={password}
          onChangeText={setPassword}
        />
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>

      <View style={styles.footer}>
        <Text>Already have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text style={styles.link}> Login</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: "center",
    padding: 25,
    backgroundColor: "#eef2ff"
  },

  title: {
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 30
  },

  inputBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 15,
    height: 50
  },

  input: {
    flex: 1,
    marginLeft: 10
  },

  button: {
    backgroundColor: "#4f46e5",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 10
  },

  buttonText: {
    color: "white",
    fontWeight: "bold"
  },

  footer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20
  },

  link: {
    color: "#4f46e5",
    fontWeight: "bold"
  }

});

export default Signup;