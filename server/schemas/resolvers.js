const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    // retrieve the logged in user from the context and find the user details in the database
    me: async (parent, args, context) => {
      if (context.user) {
        data = await User.findOne({ _id: context.user._id });
        return data;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },

  Mutation: {
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user with this email found!');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect password!');
      }

      const token = signToken(user);
      return { token, user };
    },

    addUser: async (parent, { username, email, password, childCount, zipcode }) => {
      const user = await User.create({ username, email, password, childCount, zipcode});
      const token = signToken(user);
      
      return { token, user};
    },
    saveUser: async (parent, email, childCount, zipcode) => {
      if (constext.user) {
        return User.findOneAndReplace(
        { _id: context.user},
        {
          $addToSet: { childCount, zipcode, email},
          
        },
        { returnNewDocument: true,
          new: false,
          runValidators: true 
          // returnDocument: username, email, password, childCount, zipcode, children: [], savedSchools: [] 
        }
        );
     
    }
  },

    // retrieve the logged in user from the context and add the book to the user's savedSchools array
    saveSchool: async (parent, school, context) => {
      // If context has a `user` property, that means the user executing this mutation has a valid JWT and is logged in
      if (context.user) {
        return User.findOneAndUpdate(
          { _id: context.user._id},
          {
            $addToSet: { savedSchools: {...school}}
          },
          {
            new: true,
            runValidators: true 
          }
        );
      }
      // If user attempts to execute this mutation and isn't logged in, throw an error
      throw new AuthenticationError('You need to be logged in!');
    },
    
    removeSchool: async (parent, { schoolId }, context) => {
      if (context.user) {
        return User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { savedSchools: { schoolId: schoolId } } },
          { new: true }
        );
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },
};

module.exports = resolvers;
