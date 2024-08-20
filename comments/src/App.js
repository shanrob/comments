import "./App.css";
import React from "react";
import Header from "./components/Header";
import CommentsList from "./components/CommentsList";
import Footer from "./components/Footer";
import { useState, useEffect } from "react";
import CommentInput from "./components/CommentInput";
import Skeleton from "./components/Skeleton";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  async function getData() {
    setIsLoading(true);
    const response = await fetch("https://catfact.ninja/facts");
    const data = await response.json();
    setComments(data.data);
    setIsLoading(false);
  }

  useEffect(() => {
    getData();
  }, []);

  const dummyNestedComments = [
    {
      commentText: "Comment 1",
      commentDate: Date.now(),
      replies: [
        {
          commentText: "Reply 1",
          commentDate: Date.now(),
          replies: [],
        },
      ],
    },
    {
      commentText: "Comment 2",
      commentDate: Date.now(),
      replies: [
        {
          commentText: "Reply 1",
          commentDate: Date.now(),
          replies: [],
        },
      ],
    },
    {
      commentText: "Comment 3",
      commentDate: Date.now(),
      replies: [
        {
          commentText: "Reply 1",
          commentDate: Date.now(),
          replies: [],
        },
      ],
    },
  ];

  const [comments, setComments] = useState([]);

  return (
    <div className="App">
      <Header />
      <CommentInput comments={comments} setComments={setComments} />
      {isLoading ? (
        <Skeleton />
      ) : (
        <CommentsList comments={comments} setComments={setComments} />
      )}
      <Footer />
    </div>
  );
}

export default App;
