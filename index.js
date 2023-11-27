import express from 'express';
import axios from "axios";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", async (req, res) => {
  try{
   const quoteResponse = await axios.get("https://favqs.com/api/qotd");
   const quoteData = quoteResponse.data.quote;
   res.render("index.ejs", {
       quote : quoteData,
   })
  } catch (error) {
    console.error("Failed to make request:", error.message);
    res.render("index.ejs", {
      error: error.message,
    });
  }
});

app.listen(port, ()=> {
    console.log(`Server is running on ${port}`);
})