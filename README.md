# API Rest Simples com GraphQL 


   "scripts": {
      "start": "node dist/server.js",
      "build": "babel src --extensions \".js,.ts\" --out-dir dist --copy-files --no-copy-ignored",
      "dev": "ts-node-dev -r tsconfig-paths/register --respawn --transpile-only --ignore-watch node_modules src/index.ts",
      "test": "jest"
   },


"dev": "nodemon src/index.js --exec babel-node",
"build": "yarn clear && babel src -d dist --source-maps",

express express-graphql graphql

sqlite3 express morgan
jest ts-jest @types/jest
@types/node @types/morgan @types/express
@babel/preset-typescript @babel/preset-env @babel/node @babel/core @babel/cli babel-plugin-module-resolver
typescript tsconfig-paths ts-node-dev ts-node
eslint-plugin-standard eslint-plugin-promise eslint-plugin-node eslint-plugin-import eslint-config-standard eslint 












// var express = require('express');
// var {graphqlHTTP} = require('express-graphql');
// var graphql = require('graphql');
// const { query } = require('express');

// // Maps id to User object
// var fakeDatabase = [
//     {"id": 1,"name": 'alice',},
//     {"id": 2,"name": 'bob',},
// ];

// // Define the User type
// var userType = new graphql.GraphQLObjectType({
//   name: 'User',
//   fields: {
//     id: { type: graphql.GraphQLString },
//     name: { type: graphql.GraphQLString },
//   }
// });


// const typeQuery = new graphql.GraphQLObjectType(
//     {
//         name: 'Query',
//         fields: {
//             user: { 
//                 type: userType,
//                 args: {id: { type: graphql.GraphQLInt }},
//                 resolve: (parent, {id}) => {
//                     return fakeDatabase.find(o => o.id === id);
//                 }
//             },
//             users: { 
//                 type: graphql.GraphQLList(userType),
//                 args: {},
//                 resolve: ( ) => {
//                     return fakeDatabase;
//                 }
//             }
//         }
//     }
// );



// const schema = new graphql.GraphQLSchema({
//     query: typeQuery
// });

// var app = express();
// app.use('/graphql', graphqlHTTP({
//   schema: schema,
//   graphiql: true,
// }));

// const port = Number(process.env.PORT) || 3000

// app.listen(port, ()=>console.log(`Running a GraphQL API server at http://localhost:${port}/graphql`));