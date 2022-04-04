import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AnimeDetails from "./components/AnimeDetails";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Anime Hub</h1>
      </header>

      <main>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route
              exact
              path="/anime_details/:animeId"
              element={<AnimeDetails />}
            />
          </Routes>
        </BrowserRouter>
      </main>
    </div>
  );
}

export default App;
