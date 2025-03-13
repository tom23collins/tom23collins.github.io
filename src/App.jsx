import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Blog from "./components/Blog";

function App() {
  return (
    <div style={styles.container}>
      <Routes>
        {/* Homepage */}
        <Route
          path="/"
          element={
            <div>
              <h1 style={styles.heading}>🚀 Welcome to My GitHub Page!</h1>
              <p style={styles.text}>Explore my blog posts below:</p>

              {/* Navigation Menu */}
              <nav style={styles.menu}>
                <Link to="/blog/sample-post" style={styles.button}>📖 First Blog Post</Link>
                <Link to="/blog/second-post" style={styles.button}>📝 Second Blog Post</Link>
              </nav>
            </div>
          }
        />

        {/* Blog Route */}
        <Route path="/blog/:postId" element={<Blog />} />
      </Routes>
    </div>
  );
}

// CSS-in-JS Styles (Matches Your App)
const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100vw",  // Ensure it spans the full width
    height: "100vh",  // Ensure it spans the full height
    backgroundColor: "#282c34",
    color: "white",
    fontFamily: "system-ui, Avenir, Helvetica, Arial, sans-serif",
    overflow: "hidden", // Prevents extra scrollbars
  },
  heading: {
    fontSize: "2.5rem",
    marginBottom: "10px",
  },
  text: {
    fontSize: "1.2rem",
    maxWidth: "600px",
  },
  menu: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    marginTop: "20px",
  },
  button: {
    padding: "10px 20px",
    backgroundColor: "#61dafb",
    color: "black",
    textDecoration: "none",
    borderRadius: "5px",
    fontSize: "1rem",
    fontFamily: "system-ui, Avenir, Helvetica, Arial, sans-serif", // Ensure buttons use the same font
  },
};


export default App;

