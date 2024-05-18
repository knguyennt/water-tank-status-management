import express from 'express';
import { pipeController } from '../controllers/pipeController.js'

const router = express.Router();

router.get("/test", pipeController.getPipeById)


router.get('/', async (req, res, next) => {
  res.send('Hello World!')
});



export default router;