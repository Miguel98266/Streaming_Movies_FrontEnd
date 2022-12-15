import { gql } from "@apollo/client";

export const GET_MOVIES = gql`
  {
    getMovies {
      _id
      title
      description
      image
      dateRelease
      rate {
        user {
          name
        }
        rate
        description
        date
      }
    }
  }
`;
export const GET_MOVIESBYID = gql`
  query getMovieById($_id: ID) {
  getMovieById(_id: $_id) {
    _id
    title
    description
    image
    dateRelease
    rate{
      user{
        name
      }
      rate
      description
      date
    }
  }
}
`;
