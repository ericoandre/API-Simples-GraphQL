import { GraphQLObjectType, GraphQLString,GraphQLSchema, GraphQLInt,GraphQLList } from 'graphql';  

// Maps id to User object
const fakeDatabase = [
    {"id": 1,"name": 'Maria'},
    {"id": 2,"name": 'Joao'},
];

// Define the User type
const userType = new GraphQLObjectType({
  name: 'User',
  fields: {
    id: { type: GraphQLString },
    name: { type: GraphQLString },
  }
});

const typeQuery = new GraphQLObjectType(
    {
        name: 'Query',
        fields: {
            user: { 
                type: userType,
                args: {id: { type: GraphQLInt }},
                resolve: (parent, {id}) => {
                    return fakeDatabase.find(o => o.id === id);
                }
            },
            users: { 
                type: GraphQLList(userType),
                args: {},
                resolve: ( ) => {
                    return fakeDatabase;
                }
            }
        }
    }
);

const schema = new GraphQLSchema({
    query: typeQuery
});

export {schema};
