import express from "express";

const app_test = express();

app_test.get("/myfunction/get", (req, res) => {
  console.log("Received a GET request to /myfunction");
  res.json({ message: "Hello, World!" });
});

// Handler for POST requests to /hello
app_test.post("/myfunction/post", (req, res) => {
  console.log("Received a POST request to /myfunction/hell");
  res.json({ message: "Received a POST request to /myfunction/hell" });
});

const port = 3002;
app_test.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

export default app_test;
