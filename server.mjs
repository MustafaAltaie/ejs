import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

import path from 'path';
const __dirname = path.resolve();

const app = express();
const port = 3000;
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false })); // To post data submitted from HTML forms

app.set("view engine", "ejs");
app.use(express.static("public"));

const url = 'mongodb+srv://MustafaAltaie:4435966@mustafacluster.tzl1h.mongodb.net/blogDB?retryWrites=true&w=majority';

mongoose.connect(url, {
}).then(() => console.log('Connected to Database'))
  .catch(error => console.error(error));

const blogSchema = new mongoose.Schema({
  blog: { type: String, required: true },
  image: { type: String, required: true },
  isLiked: { type: Boolean },
  author: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

const Blog = mongoose.model('blogs', blogSchema);

app.get('/rowdata', async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.status(200).json(blogs);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.get("/", (request, response) => {
  response.status(200).sendFile('./public/pages/home.html', { root: __dirname });
});

app.get('/blogs', (request, response) => {
  response.status(200).render("home", { productList: 'products' });
});

app.get('/myblogs', async (request, response) => {
  const blogs = await Blog.find();
  response.status(200).render("blogs", { blogs: blogs });
});

app.delete('/:id', async (req, res) => {
  await Blog.findByIdAndDelete(req.params.id);
  res.redirect('/');
});

app.post('/', async (req, res) => {
  try {
    const newBlog = new Blog({
        blog: req.body.blog,
        image: req.body.image,
        isLiked: 'false',
        author: req.body.author
    });
    const result = await newBlog.save();
    res.redirect('/myblogs');
  } catch (error) {
    res.status(500).send(error);
  }
});

app.patch('/:id', async (req, res) => {
  const id = req.params.id;
  await Blog.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });
  res.end();
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});