import React from "react";
import { AlbumProvider } from "./context/AlbumContext";
import Home from "./components/home/Home";

const App = () => {
  return (
    <AlbumProvider>
      <div className="appContainer">
        <Home />
      </div>
    </AlbumProvider>
  );
};

export default App;
