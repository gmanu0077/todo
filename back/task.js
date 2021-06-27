const router=require('express').Router();
let Task=require('./task.mod');

router.route('/').get((req,res)=>{
    Task.find()
     .then(task=>res.json(task))
     .catch(err=>res.status(400).json('Error:' + err));
});
router.route('/add').post((req,res)=>{
    const task=req.body.task;
    console.log(req.body)
    console.log("Checking", { task })
    const newtask=new Task({task});
    newtask.save()
     .then(()=>res.json('added'))
     .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/:id').get((req, res) => {
    Task.findById(req.params.id)
      .then(task => res.json(task))
      .catch(err => res.status(400).json('Error: ' + err));
  });
router.route('/:id').delete((req, res) => {
    Task.findByIdAndDelete(req.params.id)
    .then(() => res.json('deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
  });

  module.exports = router;