import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

export default function WelcomeScreen() {
  return (
    <View style={styles.container}>
      {/* 1. Top Section */}
      <View style={styles.topSection}>
        <Text style={styles.title}>Let's Get Started!</Text>
      </View>

      {/* 2. Middle Section */}
      <View style={styles.middleSection}>
        <Image
          source={require("./../../assets/Welcome.png")}
          style={styles.image}
        />
      </View>

      {/* 3. Bottom Section */}
      <View style={styles.bottomSection}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>

        <View style={styles.loginContainer}>
          <Text style={styles.footerText}>Already have an account? </Text>
          <TouchableOpacity>
            <Text style={styles.loginLink}>Log In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  // Step 2: Main Container
  container: {
    flex: 1,
    backgroundColor: "#7D7AFF",
    paddingTop: 80,
    paddingHorizontal: 30,
  },
  // Step 3: Top Section
  topSection: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#FFFFFF",
    textAlign: "center",
  },
  // Step 4: Middle Section
  middleSection: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  // Step 5: Bottom Section
  bottomSection: {
    flex: 1.5,
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 40,
  },

});