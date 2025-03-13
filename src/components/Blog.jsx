import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";

const Blog = () => {
  const { postId } = useParams(); // Get post ID from URL
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch(`/posts/${postId}.md`)
      .then((res) => {
        if (!res.ok) throw new Error("Post not found");
        return res.text();
      })
      .then((text) => setContent(text))
      .catch(() => setContent("# Post Not Found\nSorry, this post does not exist."));
  }, [postId]);

  return (
    <div style={styles.container}>
      {/* Blog Post Content */}
      <div style={styles.postContainer}>
        <Link to="/" style={styles.backButton}>⬅ Back to Home</Link>
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>
    </div>
  );
};

// CSS-in-JS Styles (Matches Your App)
const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#282c34",
    color: "white",
    fontFamily: "system-ui, Avenir, Helvetica, Arial, sans-serif",
    padding: "20px",
    margin: "0",
  },
  blogContainer: {
    maxWidth: "800px",
    width: "80%",
    backgroundColor: "#3a3f4b",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
  },
  content: {
    maxWidth: "800px", // Center the blog post container
    width: "90%",
    textAlign: "left", // Keep text left-aligned
  },
  backButton: {
    alignSelf: "flex-start",
    color: "#61dafb",
    textDecoration: "none",
    fontSize: "1.2rem",
    marginBottom: "20px",
  },
  postContainer: {
    maxWidth: "800px",
    width: "90%",
    backgroundColor: "#3a3f4b",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
  },
};export default Blog;





