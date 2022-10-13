// the controller function performs the main function of an application
const asyncHandler = require('express-async-handler')


const Goal = require("../models/goalModel")



// @desc    GET goals
// @route   GET /api/goals
// @access Private
const getGoals = asyncHandler(async (req, res) => {

    const goals = await Goal.find()


    res.status(200).json(goals)
})


// @desc    SET goals
// @route   POST /api/goals
// @access Private
const setGoal = asyncHandler( async (req, res) => {

    // error handling
    if (!req.body.text) {
        // res.status(400).json({ message: "Please add a text field "})

        // we can do the error handling using the commented section
        // we can also use the express error handling mechanism

        res.status(400)
        throw new Error("Please add a text field")
    }

    const goal = await Goal.create({
        text: req.body.text
    })

    // console.log(req.body) 
    res.status(200).json(goal)
})





// @desc    UPDATE goal
// @route   PUT /api/goals/:id
// @access Private
const updateGoal = asyncHandler( async (req, res) => {

    const goal = await Goal.findById(req.params.id)

    if(!goal) {
        // res.status (400)
        res.status(400)
        throw new Error('Goal not found')
    }

    // findbyidandupdate takes three parameters; id, text, and then an options field
    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    })

    res.status(200).json(updatedGoal)
})




// @desc    DELETE goal
// @route   DEL /api/goals/:id
// @access Private
const deleteGoal = asyncHandler( async (req, res) => {
    const goal = await Goal.findById(req.params.id)
    if(!goal){
        res.status(400)
        throw new Error("Goal not available")
    }

    await goal.deleteOne()
    res.status(200).json({ id: req.params.id})
}) 


module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal
}
