const { Schema } = require('mongoose');

// This is a subdocument schema, it won't become its own model but we'll use it as the schema for the User's `savedBooks` array in User.js
const schoolSchema = new Schema({

  // school id from SchoolDigger
  schoolId: {
    type: String,
    required: true,
  },
  schoolName: {type: String},
  phone: {type: String},
  latitude: {type: String},
  longtitude: {type: String},
  street: {type: String},
  city: {type: String},
  state: {type: String},
  zip: {type: String},
  zip4: {type: String},
  lowGrade: {type: String},
  highGrade: {type: String},
  schoolLevel: {type: String},
  isCharterSchool: {type: String},
  isMagnateSchool: {type: String},
  isVirtualSchool: {type: String},
  isTitleISchool: {type: String},
  isTitleISchoolwideSchool: {type: String},
  districtName: {type: String},
  rank: {type: String},
  rankOf: {type: String},
  rankStars: {type: String},
  rankStatewidePercentage: {type: String},
  averageStandardScore: {type: String},
  numberOfStudents: {type: String},
  pupilTeacherRatio: {type: String},
});

module.exports = schoolSchema;