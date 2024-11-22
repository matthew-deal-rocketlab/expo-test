export default function TripPlannerPage() {
  return (
    <div className="trip-planner-container">
      <iframe
        src="https://your-hosted-domain.com/trip-planner.html"
        style={{
          width: "100%",
          height: "600px", // adjust as needed
          border: "none",
        }}
        title="Trip Planner"
      />
    </div>
  );
}
