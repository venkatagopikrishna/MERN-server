/*const { Query } = require('mongoose');
const User = require('../mode/userSchema');  // Ensure the path is correct
const { search } = require('superagent');  // Parent

// Define our resolvers to execute
const resolvers = {
    Query: {
        getUser: async (_, { id }) => {
            return await User.findById(id);
        },
        getUsers: async () => {
            return await User.find();
        },
        searchUsers: async (_, { name }) => {
            return await User.find(
                { name: new RegExp(name, 'i') }
            );
        },
        getLimitedUsers: async (_, { limit }) => {  // Correctly placed in Query
            return await User.find().limit(limit);
        },
    },
    Mutation: {
        createUser: async (_, { input }) => {
            const newUser = new User(input);
            return await newUser.save();
        },
        changepass: async (_, { id, password }) => {
            return await User.findByIdAndUpdate(id, { password });
        },
        updateUser: async (_, { id, input }) => {
            return await User.findByIdAndUpdate(id, input, { new: true });
        },
        deleteUser: async (_, { id }) => {
            return await User.findByIdAndDelete(id);
        },
    },
    User: {
        email: (parent) => parent.email || '',
    },
};

module.exports = resolvers;  // Export
*/





//PROJECT 


// mutation{
//     createUser(input: {name:"sindhu",email:"latha@gmail.com",password:"3464"}) {
//       id
//       name
//       password
//     }
//   }


// query{
//     getUsers {
//       email
//       id
//       name
//       password
//     }
//   }


//resolvers.js  
const User = require('../model/userSchema');

const resolvers = {
  Query: {
    getUser: async (_, { id }) => {
      try {
        return await User.findById(id);
      } catch (err) {
        throw new Error(`Error fetching user: ${err.message}`);
      }
    },
    getUsers: async () => {
      try {
        return await User.find();
      } catch (err) {
        throw new Error(`Error fetching users: ${err.message}`);
      }
    },
  },
  Mutation: {
    createUser: async (_, { input }) => {
      const { name, email, password } = input;
      try {
        if (!name || !email || !password) {
          throw new Error("Please enter all the fields");
        }
        const newUser = new User({ name, email, password });
        return await newUser.save();
      } catch (err) {
        throw new Error(`Error creating user: ${err.message}`);
      }
    },
    changePass: async (_, { id, password }) => {
      try {
        const user = await User.findByIdAndUpdate(id, { password }, { new: true });
        if (!user) {
          throw new Error("User not found");
        }
        return user;
      } catch (err) {
        throw new Error(`Error updating password: ${err.message}`);
      }
    },
  },
  User: {
    email: (parent) => parent.email || '',
    name: (parent) => parent.name || '',
    password: (parent) => parent.password || '',
  },
};

module.exports = resolvers;
