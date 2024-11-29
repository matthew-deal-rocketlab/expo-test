import { CameraType, CameraView, useCameraPermissions } from "expo-camera";
import { Link, Stack } from "expo-router";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function CameraScreen() {
  const [type, setType] = useState<CameraType>("back");
  const [permission, requestPermission] = useCameraPermissions();

  useEffect(() => {
    requestPermission();
  }, []);

  if (!permission) {
    return (
      <View>
        <Stack.Screen options={{ title: "Camera" }} />
        <Text>Requesting permission...</Text>
      </View>
    );
  }

  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Stack.Screen options={{ title: "Camera" }} />
        <Text style={{ textAlign: "center" }}>
          We need your permission to show the camera
        </Text>
        <TouchableOpacity style={styles.button} onPress={requestPermission}>
          <Text style={styles.text}>Grant Permission</Text>
        </TouchableOpacity>
      </View>
    );
  }

  function toggleCameraType() {
    setType((current) => (current === "back" ? "front" : "back"));
  }

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: "Camera" }} />
      <CameraView style={styles.camera} type={type}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={toggleCameraType}>
            <Text style={styles.text}>Flip Camera</Text>
          </TouchableOpacity>
          <Link href="/" style={styles.button}>
            <Text style={styles.text}>Back to Home</Text>
          </Link>
        </View>
      </CameraView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "transparent",
    margin: 64,
  },
  button: {
    flex: 1,
    alignSelf: "flex-end",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
    padding: 12,
    borderRadius: 8,
    marginHorizontal: 4,
  },
  text: {
    fontSize: 14,
    fontWeight: "bold",
    color: "white",
  },
});
