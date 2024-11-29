import { LocationDisplay } from "@/components/geo";
import { Link, Stack } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Home() {
  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          title: "Home",
        }}
      />
      <Text style={styles.title}>Welcome Home</Text>

      <Link href="/camera" style={styles.link}>
        <Text>Open Camera</Text>
      </Link>

      <LocationDisplay />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  link: {
    marginTop: 20,
    padding: 10,
    backgroundColor: "#007bff",
    borderRadius: 5,
    color: "#fff",
  },
});
