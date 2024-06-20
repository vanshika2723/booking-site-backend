import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());

app.get("/", async (req, res) => {
  try {
    res.json({ data: "hello" });
  } catch (err) {
    console.log(err);
  }
});

app.post("/signin", async (req, res) => {
  try {
    console.log(req.body);
    res.json({ data: "hello post" });
  } catch (err) {
    console.log(err);
  }
});

app.listen(8000);
