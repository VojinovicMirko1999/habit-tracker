import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Sign Up" }} />
      <Stack.Screen name="login" options={{ title: "Log In" }} />
      <Stack.Screen name="enterEmail" options={{ title: "Enter Email" }} />
      <Stack.Screen name="enterOtp" options={{ title: "Enter OTP" }} />
      <Stack.Screen name="enterNewPassword" options={{ title: "Enter OTP" }} />
    </Stack>
  );
}
