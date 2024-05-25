import { pipeService } from '../services/pipeService.js'

class PipeController {
    getAllPipe = async (req, res, next) => {
        const result = await pipeService.getAllPipe()
        return res.status(200).json({ data: result });
    }

    createPipe = async (req, res, next) => {
        const result = await pipeService.createPipe(req.body)
        return res.status(200).json({ data: result });
    }
}

export const pipeController = new PipeController();