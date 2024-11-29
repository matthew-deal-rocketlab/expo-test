import { AppRegistry, Platform } from "react-native";
import { TripPlanner } from "../../components/TripPlanner";

// Create a wrapper component as default export
export default function TripPlannerWeb() {
  return <TripPlanner />;
}

// Register the component for web
AppRegistry.registerComponent("TripPlanner", () => TripPlanner);

// Web-specific setup
if (Platform.OS === "web" && typeof window !== "undefined") {
  AppRegistry.runApplication("TripPlanner", {
    rootTag: document.getElementById("trip-planner-root"),
  });
}
