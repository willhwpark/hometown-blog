const { BlogSchema, CommentSchema } = require("../models/blog.model");

const createAdmin = (req, res) => {
  const { userName, password } = req.body;
  BlogSchema.create({
    userName,
    password,
  })
    .then((blog) => res.json(blog))
    .catch((err) => res.json(err));
};

const newPost = (req, res) => {
  const { guestName, text } = req.body;
  console.log(req.body);
  CommentSchema.create({
    guestName,
    text,
  })
    .then((newComment) => res.json(newComment))
    .catch((err) => res.json(err));
};

module.exports = {
  createAdmin,
  newPost,
};
