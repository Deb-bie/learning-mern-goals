// Models - define  any resources you have in your application , ie, blog posts, todos   
// define schema
// 



const mongoose = require("mongoose")

const goalSchema = mongoose.Schema(
    {
        text: {
            type: String,
            required: [true, "Please add a text value"]
        }
    },
    {
        timestamps: true
    }
)


module.exports = mongoose.model("Goal", goalSchema)
