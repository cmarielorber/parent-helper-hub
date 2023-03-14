import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
        _id
        username
        email
        kids
        zipcode
        children {
            childName
            ageGroup
        }
    }
  }
`;

export const QUERY_ME = gql`
    query me {
        me {
            _id
            username
            email
            bookCount
            savedBooks {
                bookId
                title
                description
                authors
                image
                link
            }
        }
    }
`;