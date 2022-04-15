const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware')

/**
 * Get all of the items on the shelf
 */
router.get('/', rejectUnauthenticated, (req, res) => {
  const query = `SELECT * FROM "item";`

  pool.query(query)
    .then((results) => res.send(results.rows))
    .catch((err) => {
      console.log('Error in shelf GET', err);
    })
})

/**
 * Add an item for the logged in user to the shelf
 */
router.post('/', rejectUnauthenticated, (req, res) => {
  // endpoint functionality
  const query = `INSERT INTO "item" ("description", "image_url", "user_id")
                  VALUES ($1, $2, $3);`;

  const values = [req.body.description, req.body.image_url, req.user.id]
  pool.query(query, values)
    .then(result => {
      res.sendStatus(201);
    }).catch(err => {
      console.log('Error in post', err);
    })
});

/**
 * Delete an item if it's something the logged in user added
 */
router.delete('/:id', rejectUnauthenticated, (req, res) => {
  // endpoint functionality
  const id = req.params.id;
  console.log('router DELETE id:', id);


  const query = `DELETE FROM "item" WHERE id =$1 AND user_id = $2`;
  values = [id, req.user.id];
  pool.query(query, values)
    .then(() => { res.sendStatus(200); })
    .catch((err) => {
      console.log('Error completing DELETE', err);
      res.sendStatus(500);
    });
});

/**
 * Update an item if it's something the logged in user added
 */
router.put('/:id', (req, res) => {
  // endpoint functionality
});

/**
 * Return all users along with the total number of items
 * they have added to the shelf
 */
router.get('/count', (req, res) => {
  // endpoint functionality
});

/**
 * Return a specific item by id
 */
router.get('/:id', (req, res) => {
  // endpoint functionality
});

module.exports = router;
