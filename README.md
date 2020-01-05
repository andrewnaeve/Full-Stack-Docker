# Full Stack Docker

## Multi-core Node / Apollo Server 2 / React / Postgres running in Docker

This repository is a launching off point for a full stack, multi-core, React, Apollo Server 2, Node, and Postgres app, running in Docker containers.

## Start

## Docker

To get started in development, download Docker, cd into the root directory, and

```
docker-compose up
```

To build for production, run:

```
docker-compose -f docker-compose-prod.yml up -d --build
```

This will automatcally build a container with the frontend create-react-app build being served by NGINX.

## Node

Node's Cluster module spins up one instance of Apollo server for every CPU core on the host machine, for increased performance and load handling.

## Apollo Server 2

Apollo Server 2 has been implemented with a permissions middleware layer using GraphQL Shield. The schema has been modularized, with each 'feature' folder combining types and resolvers, before re-exporting and combining in schema.js. Because all queries and mutations are using the 'extend' feature, it is necessary to have a blank query and schema that the others extend from.

ESM is providing ES module support until such time that Node & Node library authors have fully implemented them.

Any request made to `/graphql` with be proxied to the Node container, and served by Apollo Server. Example sign-in, sign-up, and listAllUsers queries and mutations provided. For example:

```
query listAllUsers {
  listAllUsers {
    first_name,
    last_name,
    email,
    id
  }
}
```

```
mutation signUp($firstName: String!, $lastName: String!, $email:String!, $password:String!){
  signUp(firstName: $firstName, lastName:$lastName, email: $email, password:$password){
    result,
    id
  }
}

query variables:

{
  "firstName": "Xander",
  "lastName": "Cruise",
  "email": "xsticles@gmail.com"
  "password": "flowers4nearl"
}
```

```
query signIn($email:String!, $password:String!){
  signIn(user:{email: $email, password:$password}){
    result,
    id
  }
}

query variables:

{
  "email": "friskydingo@gmail.com",
  "password": "awesomex"
}
```

## React

A create-react-app scaffold is running in its own container, and will proxy all unknown routes to the API container through the proxy option in the package.json.

## Postgres

Postgres integration happens through Knex, a query builder, and Objection, an ORM. Models can be required in context.js to automatically place models onto GraphQL's context argument.
