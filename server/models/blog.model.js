const mongoose = require('mongoose');

const BlogSchema = new mongoose.Schema({
    userName: { type: String },
    password: { type: String }
}, { timestamps: true });

const CommentSchema = new mongoose.Schema({
    guestName: { type: String },
    text: { type: String }
}, { timestamps: true });

module.exports = {
    BlogSchema: mongoose.model("Blog", BlogSchema),
    CommentSchema: mongoose.model("Comment", CommentSchema)
}