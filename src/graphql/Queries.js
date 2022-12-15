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
export const GET_MOVIEBYID = gql`
  query getMovieById($_id: ID) {
    getMovieById(_id: $_id) {
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

export const LOGIN = gql`
  query login($email: String, $password: String) {
    login(email: $email, password: $password) {
      isValid
      msg
      token
    }
  }
`;
