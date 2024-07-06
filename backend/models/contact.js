const mongoose = require("mongoose");

const contact = new mongoose.Schema({
    name: {
        type: "String",
        required: true,
    },
    number: {
        type: "number",
        required: true,
    },
address:{
    type: "string",
    required: true,
},
state:{
    type: "string",
    required: true,
},
city:{
    type: "string",
    required: true,
},
message:{
    type: "string",
    required: true,
},
});

module.exports = mongoose.model("contact", contact);