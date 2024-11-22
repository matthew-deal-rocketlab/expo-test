import { AppRegistry, Platform } from "react-native";
import { TripPlanner } from "../../components/TripPlanner";

// Register the component for web
AppRegistry.registerComponent("TripPlanner", () => TripPlanner);

// Web-specific setup
if (Platform.OS === "web" && typeof window !== "undefined") {
  AppRegistry.runApplication("TripPlanner", {
    rootTag: document.getElementById("trip-planner-root"),
  });
}
