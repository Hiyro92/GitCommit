import express from 'express';
import config from '../config.js';

const router = express.Router();

router.get('/', function(req, res, next) {
  // GET/userss/ route
  res.send({name: config.admin.name});
});

export default router;
