import { pipeService } from '../services/pipeService.js'

class PipeController {
    getPipeById = () => {
        const result = pipeService.getPipeById()
        return result
    }
}

export const pipeController = new PipeController();