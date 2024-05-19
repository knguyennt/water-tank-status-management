import { pipeRepository } from '../repositories/pipeRepository.js';
import { pipeMapper } from '../mappers/pipeMapper.js'

class PipeService {
  async getPipeById(id) {
    const pipeEntity = await pipeRepository.getPipeById(id);
    if (!pipeEntity) {
      throw new Error('Pipe not found');
    }
    return pipeMapper.entityToDto(pipeEntity);
  }
}

export const pipeService = new PipeService()
