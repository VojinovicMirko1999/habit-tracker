import { Text, View, StyleSheet } from "react-native";
import { Link } from "expo-router";

export default function EnterEmailScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Enter Email screen</Text>
      <Link href="/enterOtp" style={styles.button}>
        Go to OTP screen
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#fff",
  },
  button: {
    fontSize: 20,
    textDecorationLine: "underline",
    color: "#fff",
  },
});
