const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
    childCount: Int
    zipcode: String
    savedSchools: [School]
  }


  type Auth {
    token: ID!
    user: User
  }

  type School {
    _id: ID!
    schoolId: String!
    schoolName: String
    phone: String
    street: String
    city: String
    state: String
    zip: String
    zip4: String
    lowGrade: String
    highGrade: String
    schoolLevel: String
    isCharterSchool: String
    isMagnateSchool: String
    isVirtualSchool: String
    isTitleISchool: String
    isTitleISchoolwideSchool: String
    districtName: String
    rank: Int
    rankOf: Int
    rankStars: Int
    rankStatewidePercentage: String
    averageStandardScore: String
    numberOfStudents: Int
    pupilTeacherRatio: String
  }
  
  type Query {
    me: User
  }

  type Mutation {
    login(
      email: String!, 
      password: String!
    ): Auth

    addUser(
      username: String!, 
      email: String!, 
      password: String!,
      childCount: Int,
      zipcode: String!,
    ): Auth

    saveUser (
      username: String!, 
      email: String!, 
      childCount: Int,
      zipcode: String!,
    ): Auth

    saveSchool(
    schoolId: String!,
    schoolName: String,
    phone: String,
    latitude: String,
    longtitude: String,
    street: String,
    city: String,
    state: String,
    zip: String,
    zip4: String,
    lowGrade: String,
    highGrade: String,
    schoolLevel: String,
    isCharterSchool: String,
    isMagnateSchool: String,
    isVirtualSchool: String,
    isTitleISchool: String,
    isTitleISchoolwideSchool: String,
    districtName: String,
    rank: Int,
    rankOf: Int,
    rankStars: Int,
    rankStatewidePercentage: String,
    averageStandardScore: String,
    numberOfStudents: Int,
    pupilTeacherRatio: String,
    ): User

  }
`;

module.exports = typeDefs;
