import React, { useState } from "react";
import "../tindernav.css";
import Navbar from "../components/NavBar";
import Recommendations from "../components/Recommendations"; // Import the Recommendations component
import users from "../data/users"; // Import users data

const currentUser = {
  id: 0,
  name: "Naman Iqbal",
  gender: "male",
  location: "New York",
  // You can change to either NYU or Harvard University or Sunway University to see changes.
  university: "Harvard University",
  interests: ["sports", "music"],
};

const MainTinder = () => {
  const initialCounts = users.map((user) => ({
    id: user.id,
    approved: 0,
    declined: 0,
  }));
  const [counts, setCounts] = useState(initialCounts);

  const handleApprove = (userId) => {
    setCounts(
      counts.map((count) =>
        count.id === userId ? { ...count, approved: count.approved + 1 } : count
      )
    );
  };

  const handleDecline = (userId) => {
    setCounts(
      counts.map((count) =>
        count.id === userId ? { ...count, declined: count.declined + 1 } : count
      )
    );
  };

  return (
    <div className="color-Tinder">
      <Navbar currentUser={currentUser} />
      <Recommendations
        currentUser={currentUser}
        counts={counts}
        onApprove={handleApprove}
        onDecline={handleDecline}
      />{" "}
      {/* Display Recommendations */}
    </div>
  );
};

export default MainTinder;
