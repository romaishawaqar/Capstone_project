import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.render("index.ejs");
  });
app.post("/submit", (req, res) => {
    const bookName = req.body["bookName"];
    const randomContext = req.body["RandomContext"];
    const date = new Date();
    // console.log("Book Name:", bookName);
    // console.log("Random Context:", randomContext);
    res.render("index.ejs",{BooksName : bookName, RandomContext : randomContext, Datee:date});
  });

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });