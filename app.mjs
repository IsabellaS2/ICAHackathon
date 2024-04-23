//Importing frameworks
import express from "express";
const app = express();
const port = 3000;

app.use(express.static("public"));


app.get("/", (req, res) => {
  res.render("index.html")
});

app.get("/api/health", (req, res) => {
 res.json({ ok: true }); });

app.listen(port, () => {
   // eslint-disable-next-line no-console
   console.log(`Server running on port ${port}`);
 });