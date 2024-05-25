class PipeMapper {
  entityToDto(entity) {
    return {
      id: entity.id,
      // Other mappings
    };
  }

  dtoToEntity(dto) {
    return {
      name: dto.name,
      email: dto.email
      // Other mappings
    };
  }

  // Other mapping methods
}

const pipeMapper = new PipeMapper()

export {
    pipeMapper
}