import express from "express";
import morgan from "morgan";
import { graphqlHTTP } from "express-graphql";

import {schema} from './resolvers'

const app = express();

app.use(morgan('dev'));
app.use(express.json());

app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true,
    context:{
        message:'test'
    }
}));

export default app;