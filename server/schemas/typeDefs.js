const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
    childCount: Int
    zipcode: String!
    savedSchools: [School]
    children: [Child]
  }

  type Child {
    ageGroup: String!
    childName: String!
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
    latitude: String
    longtitude: String
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
    rank: String
    rankOf: String
    rankStars: String
    rankStatewidePercentage: String
    averageStandardScore: String
    numberOfStudents: String
    pupilTeacherRatio: String
  }
  input SchoolData {
    schoolId: String!
    schoolName: String
    phone: String
    latitude: String
    longtitude: String
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
    rank: String
    rankOf: String
    rankStars: String
    rankStatewidePercentage: String
    averageStandardScore: String
    numberOfStudents: String
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

    saveSchool(school: SchoolData): User

  }
`;

module.exports = typeDefs;
