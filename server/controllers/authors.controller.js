const Authors = require("../models/authors.models");


module.exports = {
    index: (req,res) => {
        Authors.find()
            .then(data => res.json({results:data}))
            .catch(err => res.status(404).json({errors:err.errors}));
    },
    create: (req,res) => {
        Authors.create(req.body)
            .then(data => res.json({results:data}))
            .catch(err => res.status(404).json({errors:err.errors}));
    },
    show: (req,res) => {
        Authors.find({_id:req.params.id})
            .then(data => res.json({results:data}))
            .catch(err => res.status(404).json({errors:err.errors}));
    },
    update: (req,res) => {
        Authors.updateOne({_id:req.params.id},req.body,{runValidators:true})
            .then(data => res.json({results:data}))
            .catch(err => res.status(404).json({errors:err.errors}));
    },
    destroy: (req,res) => {
        Authors.deleteOne({_id:req.params.id})
            .then(data => res.redirect(303,'/api/authors'))
            .catch(err => res.status(404).json({errors:err.errors}));
    }
}