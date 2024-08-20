import "./App.css";
import React from "react";
import Header from "./components/Header";
import CommentsList from "./components/CommentsList";
import Footer from "./components/Footer";
import { useState } from "react";
import CommentInput from "./components/CommentInput";

function App() {
  const dummyFlatComments = ["Comment 1", "Comment 2", "Comment 3"];
  const dummyNestedComments = [
    {
      commentText: "Comment 1",
      commentDate: Date.now().toString(),
      replies: [
        {
          commentText: "Reply 1",
          commentDate: Date.now().toString(),
          replies: [],
        },
      ],
    },
  ];

  const [comments, setComments] = useState(dummyFlatComments);

  return (
    <div className="App">
      <Header />
      <CommentInput comments={comments} setComments={setComments} />
      <CommentsList comments={comments} setComments={setComments} />
      <Footer />
    </div>
  );
}

export default App;
