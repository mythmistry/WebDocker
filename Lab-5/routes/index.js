const educationroutes = require("./student");

const constructorMethod = (app) => {
    app.use("/student", educationroutes);


    app.use("*", (req, res) => {
        res.status(404).json({ error: "Not found" });
    });
};

module.exports = constructorMethod;