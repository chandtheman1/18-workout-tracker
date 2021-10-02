const router = require('express').Router();
const db = require("../../models");

// /api routes

router.get("/workouts", async (req, res) => {
    try {
        const workouts = await db.Workout.find({});
        // const workoutsDuration = workouts.map(workout => {
        //     return workout.exercises[0].duration
        // })

        // const total = workoutsDuration.reduce((a, b) => a + b, 0);
        // console.log(total);

        res.json(workouts);
    } catch (err) {
        res.status(500).send(err);
    }

    
});

router.get("/workouts/range", async (req, res) => {
    try {
        const workouts = await db.Workout.find({});
        res.json(workouts);
    } catch (err) {
        res.status(500).send(err);
    }
});

router.put("/workouts/:id", async (req, res) => {
    try {
        const exercise = req.body;
        const result = await db.Workout.findByIdAndUpdate(
            req.params.id,
            { $push: { exercises: exercise } },
            { new: true }
        );
        res.json(result);
    } catch (err) {
        res.status(500).send(err);
    }

});

router.post("/workouts", async (req, res) => {
    try {
        const workout = req.body;
        workout.day = Date.now();
        const result = await db.Workout.create(workout);
        res.json(result);
    } catch (err) {
        res.status(500).send(err);
    }
});


module.exports = router;