import React from "react";
import Typewriter from "typewriter-effect";

const DefaultDashboard = () => {
  return (
    <div>
      <div
        style={{ display: "flex", justifyContent: "center", height: "100vh" }}
      >
        <h1 style={{ color: "#F63E7B", marginTop: "10vh" }}>
          <Typewriter
            className="text-center"
            options={{
              strings: ["WellCome To DashBoard"],
              autoStart: true,
              loop: true,
            }}
          />
        </h1>
      </div>
    </div>
  );
};

export default DefaultDashboard;
