import "./App.css";
import React from "react";
import Header from "./components/Header";
import CommentsList from "./components/CommentsList";
import Footer from "./components/Footer";
import { useState } from "react";

function App() {
  const [comments, setComments] = useState([
    "Comment 1",
    "Comment 2",
    "Comment 3",
  ]);

  return (
    <div className="App">
      <Header />
      <CommentsList comments={comments} setComments={setComments} />
      <Footer />
    </div>
  );
}

export default App;
