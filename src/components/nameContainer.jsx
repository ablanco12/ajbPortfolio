import React from "react";
import { Wave } from "react-animated-text";

const Name = () => {
  return (
    <div className="name">
      <Wave
        text="ANDREWJOSEPHBLANCO"
        effect="color"
        delay={1.0}
        speed={20}
        effectChange="#2c435d"
      />
    </div>
  );
};
export default Name;
