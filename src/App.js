import React from "react";
import Home from "./pages/Home";

function App() {
  return (
    <div className="fixed inset-0 flex flex-col md:flex-row bg-lightgreen overflow-y-auto md:overflow-hidden">
      <Home />
    </div>
  );
}

export default App;
