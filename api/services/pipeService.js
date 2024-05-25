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
}

export const pipeService = new PipeService()
