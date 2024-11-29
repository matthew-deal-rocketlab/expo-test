import * as Location from "expo-location";
import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export function LocationDisplay() {
  const [location, setLocation] = useState<Location.LocationObject | null>(
    null
  );
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const getLocation = async () => {
    try {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      const currentLocation = await Location.getCurrentPositionAsync({});
      setLocation(currentLocation);
    } catch (error) {
      setErrorMsg("Error getting location");
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Location</Text>

      <TouchableOpacity style={styles.button} onPress={getLocation}>
        <Text style={styles.buttonText}>Get Location</Text>
      </TouchableOpacity>

      {errorMsg ? (
        <Text style={styles.error}>{errorMsg}</Text>
      ) : location ? (
        <View style={styles.locationContainer}>
          <Text style={styles.locationText}>
            Latitude: {location.coords.latitude}
          </Text>
          <Text style={styles.locationText}>
            Longitude: {location.coords.longitude}
          </Text>
          <Text style={styles.locationText}>
            Accuracy: ±{Math.round(location.coords.accuracy || 0)}m
          </Text>
        </View>
      ) : (
        <Text style={styles.waiting}>Tap button to get location</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#007AFF",
    padding: 15,
    borderRadius: 8,
    marginBottom: 20,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
  locationContainer: {
    backgroundColor: "#f5f5f5",
    padding: 15,
    borderRadius: 8,
    width: "100%",
  },
  locationText: {
    fontSize: 16,
    marginBottom: 5,
  },
  error: {
    color: "red",
    marginTop: 10,
  },
  waiting: {
    color: "#666",
    marginTop: 10,
  },
});
