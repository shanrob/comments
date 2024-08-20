import "./App.css";
import React from "react";
import Header from "./components/Header";
import CommentsList from "./components/CommentsList";
import Footer from "./components/Footer";
import { useState } from "react";
import CommentInput from "./components/CommentInput";

function App() {
  const testNestedObject = {
    name: "Mansi",
    age: 25,
    department: {
      name: "Customer Experience",
      section: "Technical",
      branch: {
        name: "Bangalore",
        timezone: "IST",
      },
    },
    company: {
      name: "SAP",
      customers: ["Ford", "Nestle"],
    },
    skills: ["javascript", "node.js", "html"],
  };
  const flattenObject = (nestedComments) => {
    let result = {};
    for (const key in nestedComments) {
      if (!nestedComments.hasOwnProperty(key)) {
        continue;
      }
      if (
        typeof nestedComments[key] === "object" &&
        !Array.isArray(nestedComments[key])
      ) {
        const subFlatObject = flattenObject(nestedComments[key]);
        for (const subKey in subFlatObject) {
          result[key + "_" + subKey] = subFlatObject[subKey];
        }
      } else {
        result[key] = nestedComments[key];
      }
    }
    return result;
  };

  console.log("Nested object before flattening: ", testNestedObject);
  const flattenedObject = flattenObject(testNestedObject);
  console.log("Flattened object: ", flattenedObject);

  const dummyFlatComments = ["Comment 1", "Comment 2", "Comment 3"];
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

  const [comments, setComments] = useState(dummyNestedComments);

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
