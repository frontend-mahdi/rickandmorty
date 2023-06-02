export const charactersQuery = `query {
    characters {
      results {
        id
        name
        status
        species
        gender
        origin {
          name
          type
          dimension
        }
        location {
          name
          type
          dimension
        }
        image
      }
    }
  }`;
