import { Stack } from "expo-router";
import { TripPlanner } from "../components/TripPlanner";

export default function TripPlannerScreen() {
  return (
    <>
      <Stack.Screen
        options={{
          title: "Trip Planner",
        }}
      />
      <TripPlanner />
    </>
  );
}
