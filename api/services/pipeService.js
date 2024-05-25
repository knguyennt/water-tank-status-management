import { pipeRepository } from '../repositories/pipeRepository.js';
import { pipeMapper } from '../mappers/pipeMapper.js'

class PipeService {
  async getAllPipe() {
    const pipeEntity = await pipeRepository.getAllPipe();
    if (!pipeEntity) {
      throw new Error('Pipe not found');
    }
    return pipeEntity
  }

  async createPipe(data) {
    if (data?.size) {
      data.pipe_type = parseInt(data.size) < 50 ? "Ống ngánh": "Ống cái"
    }
    if (data?.material) {
      data.pipe_material = data.material == "Gang" ? "Gang" : "Nhựa"
    }
    await pipeRepository.createPipe(data);
  }
}

export const pipeService = new PipeService()
