const { Schema, Types} = require('mongoose');

// This is a subdocument schema, it won't become its own model but we'll use it as the schema for the User's `savedBooks` array in User.js
const schoolSchema = new Schema({

  // school id from SchoolDigger
  schoolId: {
    type: String,
    required: true,
  },
  schoolName: {type: String},
  phone: {type: String},
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
  rank: {type: Number},
  rankOf: {type: Number},
  rankStars: {type: Number},
  rankStatewidePercentage: {type: String},
  averageStandardScore: {type: String},
  numberOfStudents: {type: Number},
  pupilTeacherRatio: {type: String},
});

module.exports = schoolSchema;