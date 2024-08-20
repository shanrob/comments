import "./App.css";
import React from "react";
import Header from "./components/Header";
import CommentsList from "./components/CommentsList";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <CommentsList />
      <Footer />
    </div>
  );
}

export default App;
