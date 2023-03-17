import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!, $childCount: Int, $zipcode: String! ) {
    addUser(username: $username, email: $email, password: $password, childCount: $childCount, zipcode: $zipcode ) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const SAVE_SCHOOL = gql`
  mutation saveSchool($school: SchoolData!) {
    saveSchool(school: $school) {
      _id
      username
      email
      savedSchools {
        schoolId
        schoolName
      }
    }
  }
`;
