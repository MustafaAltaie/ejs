import express from "express";
let app = express();
import bodyParser from 'body-parser';
import path from 'path';
import products from "./routes/products.mjs";

const __dirname = path.resolve();

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false })); // To post data submitted from HTML forms
app.use(products);


app.get("/", (request, response) => {
    response.status(200).sendFile('./public/pages/home.html', { root: __dirname });
});

app.get("/about", (request, response) => {
    response.status(200).sendFile('./public/pages/about.html', { root: __dirname });
});

let port = 3000;

app.listen(port, () => {
    console.log(`Server is working on port ${port}`);
});