// express is our backend framework for handling api requests
const express = require("express");

const colors = require("colors")


// dotenv allows us to have environment variables in our application
const dotenv = require("dotenv").config();

const { errorHandler } = require("./middleware/errorMiddleware")
const { connectDB } = require("./config/db");


// we want our server or api to run on the port 8000, so anytime we make a request to localhost 8000,
// we expect to find our server run on it.
//  the server gives us access to our backend data. ie, data stored in our mongodb. it helps us or provides the means for us to access our backend
//  these data.
//  the require () works like imports. it imports all these frameworks and libraries into our applcation
const port = process.env.PORT;


connectDB()

// const app is used to initialize express into our application after it has been imported into the application.
const app = express();


// MIDDLEWARES
// In order to log certain things in the console, we need to use some middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: false  }))



// ROUTES

// so from the frontend, when a user goes to the page api/goals, we then send the user to the routes
// routes ./routes/goalRoutes. this is beacuse that's what we have specified here
app.use('/api/goals', require('./routes/goalRoutes'))

app.use(errorHandler)


// express has a method or function called listen(). Listen takes in two parameters, the port number and the function. and it
// checks the port whether anything is going on the port ond then gives its feedback.
app.listen(port, () => console.log(`Server has started on port ${port}`));