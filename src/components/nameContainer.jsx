import React from "react";
import { Wave } from "react-animated-text";

const Name = () => {
  return (
    <div className="name">
      <Wave
        text="ANDREWJOSEPHBLANCO"
        effect="color"
        effectChange="#2c435d"
        delay={1.1}
        speed={20}
      />
    </div>
  );
};
export default Name;
