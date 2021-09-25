import React, { useState } from "react";
import axios from "axios";

const CommentForm = () => {
  const [guestName, setGuestName] = useState("");
  const [posts, setPosts] = useState([]);
  const [text, setText] = useState("");
  const [errors, setErrors] = useState("");

  const handleSubmitComment = async (e) => {
    e.preventDefault();
    const commentData = {
      guestName,
      text,
    };
    try {
      const newComment = await axios.post(
        "http://localhost:8000/api/new-comment",
        commentData
      );
      setPosts([...posts, newComment.data]);
      commentData.guestName = "";
      commentData.text = "";
    } catch (error) {
      setErrors(error);
      console.log(error);
    }
  };

  //onClick delete function here

  return (
    <>
      <form onSubmit={handleSubmitComment}>
        <p style={{ marginLeft: "75px" }}>Comments</p>
        {errors
          ? Object.keys(errors).map((objKey, index) => (
              <p key={index}>{errors[objKey].message}</p>
            ))
          : null}
        <div className="commentSection">
          <div>
            Guest Name:{" "}
            <input type="text" onChange={(e) => setGuestName(e.target.value)} />
          </div>
          <div>
            Comment:{" "}
            <textarea
              id=""
              cols="30"
              rows="2"
              onChange={(e) => setText(e.target.value)}></textarea>
            <button type="submit" className="addCommentButton">
              Add Comment
            </button>
          </div>
        </div>
      </form>
      <div>
        {posts.length > 0 &&
          posts.map((comment, index) => (
            <div key={index}>
              <p style={{ textAlign: "center" }}>
                {comment.guestName} commented {comment.text}
              </p>
              <button
                style={{
                  display: "block",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}>
                Delete Post 🔺
              </button>
            </div>
          ))}
      </div>
    </>
  ); //end return
}; //end CommentForm

export default CommentForm;
