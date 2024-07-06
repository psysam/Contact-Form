const mongoose = require("mongoose");

const conn = async () => {
    try {
        await mongoose.connect("mongodb+srv://psysam38:12345psy@cluster0.ydfckb6.mongodb.net/contact").then(() => {
            console.log("connected")
        }, (error) => { console.log(error) })

    } catch (error) {
        console.log("error")
    }
}

conn();