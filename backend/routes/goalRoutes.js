// you need express in order to use the router
const express = require('express');

// the Router function is used to create a new router object and it handles router requests 
const router = express.Router()

const {getGoals, setGoal, updateGoal, deleteGoal} = require("../controllers/goalController")






// // this performs a get request using the api
// router.get('/', getGoals)

// // this will be used to create new goals 
// router.post('/', setGoal)



// * *

// SINCE THE UPPER TWO FUNCTIONS BOTH HAVE "/", WE CAN REWRITE THEIR FUNCTIONS ASCII

router.route("/").get(getGoals).post(setGoal)


// // the http put request requires an id to know exactly what it is doing
// router.put('/:id', updateGoal)
// router.delete('/:id', deleteGoal)

router.route("/:id").delete(deleteGoal).put(updateGoal);






//  exporting the file using module
module.exports = router;
