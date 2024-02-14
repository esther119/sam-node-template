import express from "express";

const app_test = express();

app_test.get("/", (req, res) => {
  console.log("Received a GET request to /hello");
  res.json({ message: "Hello, World!" });
});

// Handler for POST requests to /hello
app_test.post("/hello", (req, res) => {
  console.log("Received a POST request to /hello");
  res.json({ message: "Received a POST request to /hello" });
});

const port = 3002;
app_test.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

export default app_test;
