// the controller function performs the main function of an application
const asyncHandler = require('express-async-handler')




// @desc    GET goals
// @route   GET /api/goals
// @access Private
const getGoals = asyncHandler(async (req, res) => {
    res.status(200).json({ message: "Get current goals "})
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

    // console.log(req.body) 
    res.status(200).json({ message: "Post current goals "})
})





// @desc    UPDATE goal
// @route   PUT /api/goals/:id
// @access Private
const updateGoal = asyncHandler( async (req, res) => {
    res.status(200).json({ message: `Updated current goal ${req.params.id}`})
})




// @desc    DELETE goal
// @route   DEL /api/goals/:id
// @access Private
const deleteGoal = asyncHandler( async (req, res) => {
    res.status(200).json({ message: `Deleted current goal ${req.params.id}` })
})


module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal
}
