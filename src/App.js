import "./App.css";
import React from "react";
import CVFooter from "./components/CVFooter/CVFooter";
import CVLeftSide from "./components/CVLeftSide/CVLeftSide";
import CVRightSide from "./components/CVRightSide/CVRightSide";

function App() {
  return (
    <>
      <div className="App">
        <main>
          <CVLeftSide />
          <CVRightSide />
        </main>
        <CVFooter />
      </div>
    </>
  );
}

export default App;
