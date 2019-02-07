const { GraphQLServer } = require('graphql-yoga')
const fs = require('fs')
const typeDefs = fs.readFileSync(`${__dirname}/typeDefs.graphql`, 'utf8')
const resolvers = require('./resolvers')

const PORT = process.env.PORT || 7000

const server = new GraphQLServer({
  typeDefs,
  resolvers,
  resolverValidationOptions: {
    requireResolversForResolveType: false
  }
})

server.start({ port: PORT }, () => console.log(`Server started at ${new Date()} on port: ${PORT}.`))
