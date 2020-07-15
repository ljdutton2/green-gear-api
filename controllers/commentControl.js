const PostModel = require('../models/PostModel');
const commentModel = require('../models/commentModel')

module.exports = {
// ADD comment to database
    create: (req, res) => {
        let comment = new commentModel({
           content: req.body.content,
           author: req.user._id
        })
        comment.save()
        .then(result => {
            res.json({ success: true, result: result});
            
        })
        .catch(err => {
             res.json({ success: false, result: err})
            })
    },
    // UPDATE existing comment in db, allows user to edit comments
    update: (req, res) => {
    commentModel.update({_id: req.body._id}, req.body)
    .then(comment => {
        if (!comment) res.json({ success: false, result: "No such comment exists"})
      
        res.json(comment)
    })
      .catch(err => {
          res.json({ success: false, result: err})
      })
    },
    // url/api/post/${req.params.postId}/comments I think
    // get ALL comments on a post
    retrieve: (req, res) => {
        commentModel.find()
        .then(comment => {
            if (!comment) res.json({ success: false, result: "No comments found"})

            res.json({ sucess: true, result: result})
        })
        .catch(err => {
            res.json({ success: false, result: err})
        })
    },
    // REMOVE comment from db & post
    delete: (req, res) => {
        commentModel.remove({ _id: req.body._id})
        .then(comment => {
            if (!comment) res.json({ success: false, result: "No comment with such ID was found" })
            res.json({ success: true, result: result })
        })
        .catch(err => res.json({success: false, result: err}))
    }
}