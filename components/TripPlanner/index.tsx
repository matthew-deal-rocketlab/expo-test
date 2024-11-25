import { useLocalSearchParams } from "expo-router";
import { StyleSheet, Text, TextInput, View } from "react-native";

export function TripPlanner() {
  // This works in both mobile app and web iframe
  const { destination } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Plan Your Trip</Text>

      {/* This input will be pre-filled if destination is in URL */}
      <TextInput
        style={styles.input}
        placeholder="Where do you want to go?"
        defaultValue={destination?.toString()}
      />

      {/* Show what destination was passed */}
      <Text style={styles.debug}>
        {destination
          ? `Planning trip to: ${destination}`
          : "No destination selected"}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
  },
  debug: {
    color: "#666",
    fontSize: 14,
  },
});
