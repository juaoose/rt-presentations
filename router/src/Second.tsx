import * as React from "react";
import { Link } from "react-router-dom";

export default function Second() {
  return (
    <div style={{ position: "absolute" }}>
      <h1>This is the Second component</h1>
      <Link to="/">Go to first</Link>
    </div>
  );
}
