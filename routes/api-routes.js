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

    app.put("/api/workouts/:id", (req, res) => {
        db.Workout.updateOne({_id: req.params.id}, {$push: {exercises: req.body}}, (err, data) => {
            if (err) {
                res.json(err);
            } else {
                res.json(data);
            }
        });
    });
};