const express = require('express');
const { getWorkouts, createWorkout, editWorkout, deleteWorkout, getWorkout } = require('../controller/workout');
const { authenticate } = require('../middleware/auth/authenticate');
const workoutRouter = express.Router();


// Get all workouts
workoutRouter.get('/list', authenticate, getWorkouts);

// GET single workouts
workoutRouter.get('/:id', getWorkout);

// POST a new workout
workoutRouter.post('/create', createWorkout);

// UPDATE workout
workoutRouter.patch('/:id', editWorkout);

// DELETE workout
workoutRouter.delete('/:id', deleteWorkout);

module.exports = workoutRouter;