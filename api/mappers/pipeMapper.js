class pipeMapper {
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

export {
    pipeMapper
}