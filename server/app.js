const express = require('express');
const mongoose = require('mongoose');
const socket = require('socket.io');
const app = express();



// choose one of those two methods
mongoose.connect("mongodb://localhost:27017/community", { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connect("mongodb+srv://" + process.env.AdminCredentials + "/community", { useNewUrlParser: true, useUnifiedTopology: true });

const port = process.env.PORT || 3000;

var server = app.listen(port, function() {
    console.log("listening to port " + port)
});

const io = socket(server, {
    cors: {
        origin: process.env.origin,
        methods: ["GET", "POST"]
    }
});


const postSchema = {
    name: String,
    content: String,
    ownerUid: String,
    profileImage: String
};
const Post = mongoose.model("Post", postSchema);

const usersProfileSchema = {
    email: String,
    username: String,
    uid: String,
    profileImage: String
}
const User = mongoose.model("User", usersProfileSchema)

const commentSchema = {
    ownerUid: String,
    content: String,
    ownerName: String,
    ownerImage: String,
    fatherPost: String
}
const Comment = mongoose.model("Comment", commentSchema)


io.on('connection', (socket) => {

    Post.find(function(data, err) {
        if (!err) {
            socket.emit('getAll', data)
        } else {
            socket.emit('getAll', err)
        }
    })

    socket.on('getAllComments', ({ father }, callback) => {
        Comment.find({ fatherPost: father }, function(found, err) {
            if (!err) {
                callback()
            } else {
                callback(err)
            }
        })
    })

    socket.on('user', ({ userUid }, callback) => {
        User.find({ uid: userUid }, function(data, err) {
            if (!err) {
                callback()
            } else {
                callback(err)
            }

        })
    })

    socket.on('newPost', ({ ownerName, content, ownerUid, profile }, callback) => {
        const post = new Post({
            name: ownerName,
            content: content,
            ownerUid: ownerUid,
            profileImage: profile
        })
        post.save(function(err) {
            if (!err) {
                Post.find(function(data, err) {
                    if (!err) {
                        callback()
                    } else {
                        callback(err)
                    }
                })
            }
        })
    })

    socket.on("userProfile", ({ email, username, uid, profileImage }) => {
        console.log("i am called");
        const user = new User({
            email: email,
            username: username,
            uid: uid,
            profileImage: profileImage
        })
        user.save()
    })

    socket.on('getPost', ({ id }, callback) => {
        Post.find({ _id: id }, function(data, err) {
            if (!err) {
                callback()
            } else {
                callback(err)
            }
        })
    })

    socket.on('deletePost', ({ id }, callback) => {
        Post.deleteOne({ _id: id }, function(err) {
            Post.find(function(found, err) {
                if (!err) {
                    callback()
                } else {
                    callback(err)
                }

            })
        })
    })

    socket.on('deleteComment', ({ id }, callback) => {
        Comment.deleteOne({ _id: id }, function(err) {
            Comment.find(function(found, err) {
                if (!err) {
                    callback()
                } else {
                    callback(err)
                }
            })
        })
    })

    socket.on('addComment', ({ ownerUid, content, ownerName, ownerImage, fatherPost }, callback) => {
        const comment = new Comment({
            ownerUid: ownerUid,
            content: content,
            ownerName: ownerName,
            ownerImage: ownerImage,
            fatherPost: fatherPost
        })
        comment.save(function(err) {
            if (!err) {
                Comment.find({ fatherPost: fatherPost }, function(found, err) {
                    if (!err) {
                        callback()
                    } else {
                        callback(err)
                    }
                })
            }
        })
    })
})