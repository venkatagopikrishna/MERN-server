/*const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
  id: ID!,
  name: String!,
  email: String!
}
type Query { 
  getUser(id: ID!): User
  getUsers: [User]
  searchUsers(name: String): [User]
  getLimitedUsers(limit: Int!): [User]  // Correctly placed in Query
}
input createUserInput {
  name: String!,
  email: String!,
  password: String!
}
input updateUserInput {
  name: String!,
  email: String!,
  password: String!
}
type Mutation {
  createUser(input: createUserInput!): User
  updateUser(id: ID!, input: updateUserInput!): User
  changepass(id: ID!, password: String!): User
  deleteUser(id: ID!): User
}`;

module.exports = typeDefs;  // Export
*/


//PROJECT

//create a schema using GQL
const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Query {
    getUser(id: ID!): User
    getUsers: [User]
  }

  type User {
    id: ID!
    name: String!
    email: String!
    password: String  # Ensure password field is defined in schema
  }

  input createUserInput {
    name: String!
    email: String!
    password: String!
  }

  input updateUserInput {
    name: String!
    email: String!
    password: String!
  }

  type Mutation {
    createUser(input: createUserInput!): User
    updateUser(id: ID!, input: updateUserInput!): User
    changePass(id: ID!, password: String!): User
    deleteUser(id: ID!): User
  }
`;

module.exports = typeDefs;
