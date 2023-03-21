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
  mutation addUser($username: String!, $email: String!, $password: String!, $zipcode: String! ) {
    addUser(username: $username, email: $email, password: $password, zipcode: $zipcode ) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const SAVE_USER = gql`
  mutation saveUser($email: String!, $zipcode: String ) {
    saveUser(email: $email, zipcode: $zipcode ) {
        _id
        username
        email
        zipcode
    }
  }
`;

export const SAVE_SCHOOL = gql`
  mutation saveSchool(
    $schoolId: String!
    $schoolName: String
    $phone: String
    $street: String
    $city: String
    $state: String
    $zip: String
    $zip4: String
    $lowGrade: String
    $highGrade: String
    $schoolLevel: String
    $isCharterSchool: String
    $isMagnateSchool: String
    $isVirtualSchool: String
    $isTitleISchool: String
    $isTitleISchoolwideSchool: String
    $districtName: String
    $rank: Int
    $rankOf: Int
    $rankStars: Int
    $rankStatewidePercentage: Float
    $averageStandardScore: Float
    $numberOfStudents: Int
    $pupilTeacherRatio: Float  
  ) {
    saveSchool(
    schoolId: $schoolId
    schoolName: $schoolName
    phone: $phone
    street: $street
    city: $city
    state: $state
    zip: $zip
    zip4: $zip4
    lowGrade: $lowGrade
    highGrade: $highGrade
    schoolLevel: $schoolLevel
    isCharterSchool: $isCharterSchool
    isMagnateSchool: $isMagnateSchool
    isVirtualSchool: $isVirtualSchool
    isTitleISchool: $isTitleISchool
    isTitleISchoolwideSchool: $isTitleISchoolwideSchool
    districtName: $districtName
    rank: $rank
    rankOf: $rankOf
    rankStars: $rankStars
    rankStatewidePercentage: $rankStatewidePercentage
    averageStandardScore: $averageStandardScore
    numberOfStudents: $numberOfStudents
    pupilTeacherRatio: $pupilTeacherRatio
    ) {
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

export const REMOVE_SCHOOL = gql`
  mutation removeSchool($schoolId: String!) {
    removeSchool(schoolId: $schoolId) {
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

