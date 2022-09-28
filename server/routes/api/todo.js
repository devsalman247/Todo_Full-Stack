const router = require('express').Router(),
      Todo = require('../../models/Todo');

router.get('/', (req, res, next) => {
    Todo.find((err, todos) => {
        if(err) {
            res.send({error : {message : "Data cannot be fetched..Please try again"}});
        }else {
            res.send({message : "success" , todos});
        }
    })
})

router.post('/add', (req, res, next) => {
    if(!req.body.body) {
        res.send({error : {message : "Body of todo cannot be empty"}});
    }else {
        const todo = new Todo({body : req.body.body});
        todo.save((err, added) => {
            if(err) {
                res.send({error : {message : "Task cannot be added.Please try again!!"}});
            }else {
                res.send({message : "success", added});
            }
        })
    }
});

router.put('/update', (req, res, next) => {
    let setDocument = {};
    const {body, id, done} = req.body;
    console.log(!id);
    if(!id) {
        res.send({error : {message : "Please provide todo id."}});
    }else if(!body && done===null) {
        res.send({error : {message : "Todo can't be updated due to providing insufficient info."}});
    }else {
        if(body) {
            setDocument.body = body;
        }else if(done) {
            setDocument.done = done;
        }
        Todo.findByIdAndUpdate(req.body.id, {$set : setDocument}, (err, updated) => {
            if(err) {
                res.send({error : {message : "Task cannot be updated.Please try again!!"}})
            }else {
                res.send({message : "success", updated});
            }
        })
    }
})

router.delete('/delete', (req, res, next) => {
    if(!req.body.id) {
        res.send({error : {message : "Please provide todo id to delete it"}})
    }else {
        Todo.findByIdAndDelete(req.body.id, (err, deleted) => {
            if(err) {
                res.send({error : {message : "Task cannot be deleted.Please try again!!"}})
            }else {
                res.send({message : "success", deleted})
            }
        })
    }
})

module.exports = router;