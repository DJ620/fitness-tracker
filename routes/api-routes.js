const db = require("../models");

module.exports = app => {
    app.get("/api/workouts", (req, res) => {
        db.Workout.find({}).then(dbWorkouts => {
            res.json(dbWorkouts);
        });
    });

    app.post("/api/workouts", (req, res) => {
        console.log("hello");
        db.Workout.create(req.body, (err, data) => {
            if (err) {
                res.json(err);
            } else {
                res.json(data);
            }
        });
    });
};