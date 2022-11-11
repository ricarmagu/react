const express = require("express");
const userSchema = require ("../models/user.model");
const userRouter = express.Router();

userRouter.post('/person', (req, res)=>{
    const new_person = new userSchema(req.body);
    new_person.save()
    .then((data)=>{
        res.json(data);

    }).catch((err)=>{
        res.json({message: err})
    })
});

userRouter.get('/person', (req, res)=>{
    userSchema
    .find()
    .then((data)=>res.json(data))
    .catch((err)=>res.json({message: err}))
});

userRouter.get('/:personId', (req, res) => {
    const { personId } = req.params;
    userSchema
        .findById(personId)
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            res.json({ message: err });
        });
});

userRouter.put('/:personId', (req, res) => {
    const { personId } = req.params;
    const { name, lastname, email, contact, proffession } = req.body;
    userSchema
        .updateOne(
            { _id: personId },
            { $set: { name, lastname, email, contact, proffession } }
        )
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            res.json({ message: err });
        });
});
userRouter.delete('/:personId', (req, res) => {
    const { personId } = req.params;
    userSchema
        .deleteOne({ _id: personId })
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            res.json({ message: err });
        });
});
module.exports = userRouter;