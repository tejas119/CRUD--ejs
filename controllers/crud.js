var User = require('../models/users');

exports.showAll = (req,res) => {
    User.find()
    .then(user => {
        res.render('index', {data:user});
    });
}

exports.insert = (req,res) => {
    res.render('insert');
}

exports.store = (req, res) => {
    var user = new User({
        first_name: req.body.fname,
        last_name: req.body.lname,
        number: req.body.num,
        city: req.body.city
    });

    user.save();
    res.redirect('/');
}

exports.edit = (req, res) => {
    User.findById(req.params.id)
    .then(user => {
        if(!user) {
            return res.status(404).send({
                message: "User not found with id " + req.params.id
            });            
        }
        res.render('edit', {data: user});
    })
}


exports.update = (req,res) => {
    User.findByIdAndUpdate(req.params.id, {
        first_name: req.body.fname,
        last_name: req.body.lname,
        number: req.body.num,
        city: req.body.city
    },
     {useFindAndModify: true}, function(err,doc) {
    res.redirect('/');
    });
}

exports.delete = (req, res) => {
    User.findByIdAndRemove(req.params.id)
    .then(user => {
    	res.redirect('/');
    })
}