import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    members: [
      { id: 1, name: 'Alice' },
      { id: 2, name: 'Bob' },
      { id: 3, name: 'Charlie' }
    ]
  });
});

export default router;