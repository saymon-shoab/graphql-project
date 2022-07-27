const graphql = require('graphal')
const { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLInt } = require('graphql')

const userType = new GraphQLObjectType({
    name: "user",
    discription: 'documantation for user',
    fields: () => ({
        id: {type: GraphQLID},
        name: {type: GraphQLString},
        age: {type: GraphQLInt}
    })
})