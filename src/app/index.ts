import  express  from "express";
import { ApolloServer } from '@apollo/server';
import bodyParser from "body-parser";
import { expressMiddleware } from '@apollo/server/express4';
import { prismaClient } from "../clients/db";

import { User } from "./user";

export async function initiServer (){
    const app = express();

    app.use(bodyParser.json())

    const graphqlServer = new ApolloServer({
        typeDefs: `
        ${User.types}
        type Query {
            ${User.queries}
        }
        `,
        resolvers:{
            Query: {
                ...User.resolvers.quries
            },
            // Mutation: {}
        }
    })

    await graphqlServer.start()
    app.use('/graphql', expressMiddleware(graphqlServer))

    return app
}

