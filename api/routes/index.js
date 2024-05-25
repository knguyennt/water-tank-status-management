import express from 'express';
import { pipeController } from '../controllers/pipeController.js'

const router = express.Router();

router.get("/getDataTable", pipeController.getAllPipe)
router.post("/createPipe", pipeController.createPipe)


router.get('/', async (req, res, next) => {
  res.send('Hello World!')
});



export default router;