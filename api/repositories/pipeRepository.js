import { BrokenPipe } from '../models/brokenPipe.js';

class PipeRepository {
  async getPipeById(id) {
    return await BrokenPipe.findByPk(id);
  }

  async createPipe(data) {
    return await BrokenPipe.create(data);
  }
}

export const pipeRepository = new PipeRepository()
