import React from "react";

function App() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>🚀 Welcome to My GitHub Page!</h1>
      <p style={styles.text}>
        This is a simple React app deployed on GitHub Pages.
      </p>
    </div>
  );
}

// CSS-in-JS styles
const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100vw", // Full width
    height: "100vh", // Full height
    textAlign: "center",
    backgroundColor: "#282c34", // Dark background (optional)
    color: "white", // White text
  },
  heading: {
    fontSize: "2.5rem",
    marginBottom: "10px",
  },
  text: {
    fontSize: "1.2rem",
    maxWidth: "600px",
  },
};

export default App;

