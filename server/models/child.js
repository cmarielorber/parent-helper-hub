const { Schema } = require('mongoose');

// This is a subdocument schema, it won't become its own model but we'll use it as the schema for the User's `savedBooks` array in User.js
const childSchema = new Schema({
  // child's name
  childName: {
    type: String,
    required: true,
  },

  // age group 
  ageGroup: {
    type: String,
    required: true,
  },
});

module.exports = childSchema;