import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { userModel } from "./models/userModel.js";
import { postModel } from "./models/postModel.js";

const app = express();
const PORT = 4999;
const MongoDbUrl = "mongodb://127.0.0.1:27017/Blog";

app.use(express.json());

// app.use(cors())
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type"],
  })
);

app.get("/", (req, res) => {
  res.status(201).send("Welcome to the Blog");
});

app.post("/signup", async (req, res) => {
  try {
    const newUserDetails = {
      email: req.body.email,
      password: req.body.password,
    };
    const newUser = new userModel(newUserDetails);
    const success = newUser.save();
    res.status(201).send(success);
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: err.message });
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const fetchedUser = await userModel.findOne({ email: email });
  console.log(fetchedUser);
  try {
    if (fetchedUser && fetchedUser.email ===email && fetchedUser.password === password) {
      res.status(200).json({ success: true, message: "Login successful" });
    }else {
      res.status(401).json({success: false, message: "Invalid Credentials"})
    }
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal Server Error");
  }
});

app.post("/submitPost", (req, res) => {
  const {title, summary, content} = req.body
  const newPostContents = {
    title: title,
    summary: summary,
    content: content
  }
  try{
    const newPost = new postModel(newPostContents)
    const success = newPost.save()
    res.status(201).send(success)
  }catch(err){
    console.log(err);
    res.status(500).send("Internal Server Error")
  }
});

mongoose
  .connect(MongoDbUrl)
  .then(() => {
    console.log(`Database connection successful`);
    app.listen(PORT, () => {
      console.log(`App runnin on PORT:${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
