import "./App.css";
import React from "react";
import Header from "./components/Header";
import CommentsList from "./components/CommentsList";
import Footer from "./components/Footer";
import { useState, useEffect } from "react";
import CommentInput from "./components/CommentInput";
import Skeleton from "./components/Skeleton";
import Pagination from "./components/Pagination";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [comments, setComments] = useState([]);

  async function getData() {
    setIsLoading(true);
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/comments"
    );
    const data = await response.json();
    console.log(data);
    setComments(data);
    setIsLoading(false);
  }

  useEffect(() => {
    getData();
  }, []);

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);

  return (
    <div className="App">
      <Header />
      <CommentInput comments={comments} setComments={setComments} />
      {isLoading ? (
        <Skeleton />
      ) : (
        <CommentsList comments={comments} setComments={setComments} />
      )}
      <Pagination
        length={10}
        postsPerPage={postsPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
      <Footer />
    </div>
  );
}

export default App;
