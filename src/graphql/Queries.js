import { gql } from "@apollo/client";

export const GET_MOVIES = gql`
  {
   
  getMovies {
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