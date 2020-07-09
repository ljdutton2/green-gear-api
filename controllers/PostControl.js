const PostModel = require('../models/PostModel');

module.exports = {
    create: (req, res) => {
        let post = new PostModel({
           title: req.body.title,
        body: req.body.body,
        
        })
        post.save()
        .then(result => {
            res.json({ success: true, result: result});
            
        })
        .catch(err => {
             res.json({ success: false, result: err})
            })
    },

    update: (req, res) => {
    postModel.update({_id: req.body._id}, req.body)
    .then(post => {
        if (!post) res.json({ success: false, result: "No such post exists"})
      
        res.json(post)
    })
      .catch(err => {
          res.json({ success: false, result: err})
      })
    },

    retrieve: (req, res) => {
        postModel.find()
        .then(post => {
            if (!post) res.json({ success: false, result: "No posts found"})

            res.json({ sucess: true, result: result})
        })
        .catch(err => {
            res.json({ success: false, result: err})
        })
    },

    delete: (req, res) => {
        postModel.remove({ _id: req.body._id})
        .then(post => {
            if (!post) res.json({ success: false, result: "No post with such ID was found" })
            res.json({ success: true, result: result })
        })
        .catch(err => res.json({success: false, result: err}))
    }
}