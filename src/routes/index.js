import express from 'express';

const router = express();

router.get('/', (req, res) =>
  res.status(200).json({
    status: res.statusCode,
    message: 'Edustripe Schools Service V1',
  }),
);

export default router;
