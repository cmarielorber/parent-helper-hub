import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
        _id
        username
        email
        zipcode
        child {
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
            zipcode
            savedSchools {
                _id
                schoolId
                schoolName
                phone
                street
                city
                state
                zip
                zip4
                lowGrade
                highGrade
                schoolLevel
                isCharterSchool
                isMagnateSchool
                isVirtualSchool
                isTitleISchool
                isTitleISchoolwideSchool
                districtName
                rank
                rankOf
                rankStars
                rankStatewidePercentage
                averageStandardScore
                numberOfStudents
                pupilTeacherRatio
            }
        }
    }
`;