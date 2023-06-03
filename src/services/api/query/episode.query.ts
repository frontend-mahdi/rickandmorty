export const episodeQuery = `
query GetCharacter($id: ID!) {
    character(id: $id) {
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
      episode {
        name
        air_date
        episode
      }
    }
  }`;
