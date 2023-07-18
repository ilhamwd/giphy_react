import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from "./components/HomeScreen";
import "bootstrap/dist/css/bootstrap.css";
import "./styles/App.css";
import SearchScreen from "./components/SearchScreen";
import IronManScreen from "./components/IronManScreen";

function App() {
  return (
    <div className="container p-4">
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={HomeScreen} />

          <Route path="/gifs">
            <Route path="search" Component={SearchScreen} />
            <Route path="iron-man" Component={IronManScreen} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
