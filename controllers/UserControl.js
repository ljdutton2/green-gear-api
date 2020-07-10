const UserModel = require('../models/UserModel');

module.exports = {

    //ADD user to database

    create: (req, res) => {
        let user = new UserModel(req.body);

        user.save()
        .then(result => {
            res.json({ success: true, result: result});
            
        })
        .catch(err => {
             res.json({ success: false, result: err})
            })
    },
    // UPDATE user
    update: (req, res) => {
        UserModel.update({_id: req.body._id}, req.body)
        .then(user => {
            if (!user) res.json({ success: false, result: "User does not exist"})
          
            res.json(user)
        })
          .catch(err => {
              res.json({ success: false, result: err})
          })
        },
    // get ALL users from db
    retrieveAll: (req, res) => {
        UserModel.find()
        .then(users => {
            if (!users) res.json({ success: false, result: "No users found"})

                return res.json({users})
        })
        .catch(err => {
            res.json({ success: false, result: err})
        })
    },
    // get ONE user from db
    retrieveOne: (req,res) => {
            UserModel.findOne({_id: req.params.userId})
        .then(result => {
            if (!result) res.json({ success: false, result: "User not found"})

            return res.json(result)
        })
        .catch(err => {
            res.json({ success: false, result: err})
            })
        },
    // REMOVE user from db
    delete: (req, res) => {
        UserModel.findByIdAndDelete({ _id: req.body._id})
        .then(user => {
            if (!user) res.json({ success: false, result: "user was not found" })
            return res.json({
                'message': 'Successfully deleted.',
                '_id': req.params.userId
            })
            .catch(err => res.json({success: false, result: err}))
        })
    }
}

    