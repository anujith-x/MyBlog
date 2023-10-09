import axios from "axios";
import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useNavigate } from "react-router-dom";

const modules = {
  toolbar: [
    [{ header: [1, 2, false] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image"],
    ["clean"],
  ],
};
const formats = [
  "header",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
];

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate()

  const submitPost = (e) => {
    
    const data = {
      title,
      summary,
      content,
    };
    axios
    .post("http://localhost:4999/submitPost", data)
    .then(() => {
      console.log(`success`);
    })
    .catch((err) => {
      console.log(err);
    });
    navigate('/profile')
    
  }
  
  return (
    <div>
      <form action="" onSubmit={submitPost}>
        <input
          type="text"
          name=""
          id=""
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="Summary"
          value={summary}
          onChange={(e) => setSummary(e.target.value)}
        />
        <ReactQuill
          value={content}
          modules={modules}
          formats={formats}
          onChange={(newValue) => setContent(newValue)}
        />
        <br />
        <button type="submit">Submit Post</button>
      </form>
    </div>
  );
};

export default CreatePost;
