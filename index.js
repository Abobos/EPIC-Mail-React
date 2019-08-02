import express from "express";
import path from "path";

const port = process.env.PORT || 8080;

const app = express();

app.use(express.static("dist"));

app.all("/*", (req, res) => {
  res.status(200).sendFile(path.join(__dirname, "index.html"));
});

app.listen(port, () => {
  console.log(`App started on port ${port}`);
});
