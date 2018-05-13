# HapiGraphQL

## Multi-threaded GraphQL / Hapi server

This repository is a launching off point for a multi-threaded GraphQL server built on Hapi, Node, and PostgreSQL, running in Docker containers.

## Start

To get started, download Docker, cd into the root directory, and `docker-compose up`
With that, you get access to preconfigured Node and PostgreSQL containers, running GraphQL.

## Node

Node's Cluster module spins up one Hapi server for every CPU core on the host machine, for increased performance and load handling.

## API

Start writing GraphQL queries and mutations, and you can access them on port `https://localhost:8000/graphql`
Graphiql, a special self documentation tool for viewing your data, is located on `https://localhost:8000/graphiql`

## GraphQL

GraphQL scaffold includes a blank schema and folder structure, but will not run until you populate it.
