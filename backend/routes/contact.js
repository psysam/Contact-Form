const router = require("express").Router();
const contact = require("../models/contact");

router.post("/post", async (req, res) => {
    try {
        const { name, number, address, state, city, message } = req.body;
        const newContact = new contact({ name, number, address, state, city, message });
        await newContact.save().then(() => {
            res.status(201).json({ message: "data saved" });
        }, 
        () => {
            res.status(400).json({ message: "data not saved" })
        }
    );
    } catch (error) {
        res.status(400).json({ message: "error ocurred" })
    }
});
module.exports = router;