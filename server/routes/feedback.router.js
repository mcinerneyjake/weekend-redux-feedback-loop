const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// Setup a POST route to add a new feedback to the database
router.post('/', (req, res) => {
  const feedbackSubmitted = req.body;
  const sqlText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
  VALUES ($1, $2, $3, $4);`;
  const sqlValues = [
    feedbackSubmitted.feeling,
    feedbackSubmitted.understanding,
    feedbackSubmitted.support,
    feedbackSubmitted.comments,
  ];
  pool
    .query(sqlText, sqlValues)
    .then((dbResult) => {
      console.log(`Added feedback to the database`, feedbackSubmitted);
      res.sendStatus(201);
    })
    .catch((error) => {
      console.log(`Error making database query ${sqlText}`, error);
      res.sendStatus(500);
    });
});

module.exports = router;
