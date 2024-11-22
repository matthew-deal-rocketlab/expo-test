import { Stack, useLocalSearchParams } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function About() {
  // Get URL parameters
  const { source } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          title: "About",
        }}
      />
      <Text style={styles.title}>About Page</Text>

      {/* Show how we got here */}
      <Text style={styles.subtitle}>
        {source ? `Accessed via: ${source}` : "Accessed directly"}
      </Text>

      {/* Deep linking instructions */}
      <View style={styles.linkContainer}>
        <Text style={styles.instructionText}>
          This page can be accessed directly via:
        </Text>
        <Text style={styles.urlText}>
          Mobile: myapp://about?source=deeplink
        </Text>
        <Text style={styles.urlText}>
          Web: https://your-domain.com/about?source=deeplink
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    marginBottom: 30,
  },
  linkContainer: {
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    padding: 20,
    borderRadius: 10,
    width: "100%",
  },
  instructionText: {
    fontSize: 16,
    marginBottom: 10,
  },
  urlText: {
    fontSize: 14,
    color: "#007AFF",
    marginBottom: 5,
  },
});
