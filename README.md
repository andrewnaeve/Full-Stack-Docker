# HapiGraphQL

## Multi-threaded GraphQL / Hapi server

This repository is a launching off point for a multi-threaded GraphQL server built on Hapi, running in Docker!

## Start

To get started, download Docker, cd into the root directory, and `docker-compose up`
With that, you get access to preconfigured Node and PostgreSQL containers, running GraphQL.

## Node

Node's Cluster module spins up one server for every CPU core on the host machine, for increased load handling and concurrent performance.

## API

Start writing GraphQL queries and mutations, and you can access them on port ```https://localhost:8000/graphql```
Graphiql, a special self documentation tool for viewing your data, is located on ```https://localhost:8000/graphiql```

## GraphQL

GraphQL scaffold includes a blank schema and folder structure, but will not run until you populate it.
Included is a utilities file for importing GraphQL types. Instead of writing ```new GraphQLObjectType({foo: GraphQLString})``` you can write ```ObjectType({foo: StringType})``` reducing chance for typos.