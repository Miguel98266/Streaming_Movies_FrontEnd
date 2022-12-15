import {gql} from '@apollo/client'

export const CREATE_MOVIE =gql`
mutation createMovie(
  $title: String
  $description: String
  $image: String
  $dateRelease: String
) {
  createMovie(
    input: {
      title: $title
      description: $description
      image: $image
      dateRelease: $dateRelease
    }
  ) {
    _id
    title
    description
    image
    dateRelease
  }
}`

export const CREATE_RATE =gql`
mutation createRate(
  $user: ID!
  $description: String
  $rate: Int!
  $movie:ID!
  $date:String
) {
  createRate(
    input: {
      user: $user
      description: $description
      rate: $rate
      date:$date
    },
    _id:$movie
  ) {
    _id
    title
    description
    rate{
      rate
      description
      user{
        name
      }
    }
  }
}
`