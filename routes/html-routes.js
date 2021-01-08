const path = require("path");

module.exports = app => {
    // Route to serve the index.html page
    app.get("/", (req, res) => {
        console.log("hello");
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });

    // Route to serve the exercise.html page
    app.get("/exercise", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/exercise.html"));
    });

    // Route to serve the stats.html page
    app.get("/stats", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/stats.html"));
    });
};