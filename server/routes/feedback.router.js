const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// Setup a POST route to add a new creature to the database
router.post('/', (req, res) => {
  const feedbackSubmitted = req.body;
  // {name: 'Turtle', origin: 'Earth'}
  const sqlText = `
    INSERT INTO "feedback"
      (feeling, understanding, support, comments)
        VALUES
        ($1, $2, $3, $4)
    `;
  const sqlValues = [
    feedbackSubmitted.feelings,
    feedbackSubmitted.understanding,
    feedbackSubmitted.support,
    feedbackSubmitted.comments,
  ];
  // Let sql sanitize your inputs (NO Bobby Drop Tables here!)
  // the $1, $2, etc get substituted with the values from the array below
  pool
    .query(sqlText, sqlValues)
    .then((dbResult) => {
      console.log(`Added feedback to the database`, feedbackSubmitted);
      res.sendStatus(201);
    })
    .catch((error) => {
      console.log(`Error making database query ${sqlText}`, error);
      res.sendStatus(500); // Good server always responds
    });
});

module.exports = router;
