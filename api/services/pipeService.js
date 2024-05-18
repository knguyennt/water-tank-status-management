import { PipeRepository } from '../repositories/pipeRepository';
import { pipeMapper } from '../mappers/pipeMapper.js'

class PipeService {
  async getPipeById(id) {
    const pipeEntity = await PipeRepository.getPipeById(id);
    if (!pipeEntity) {
      throw new Error('Pipe not found');
    }
    return pipeMapper.entityToDto(pipeEntity);
  }
}

export const pipeService = new PipeService()
