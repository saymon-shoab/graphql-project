const graphql = require('graphql')
const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLSchema } = graphql;

const userType = new GraphQLObjectType({
    name: "user",
    discription: 'documantation for user',
    fields: () => ({
        id: {type: GraphQLString},
        name: {type: GraphQLString},
        age: {type: GraphQLInt}
    })
})

//root query

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    description:'description',
    fields:{
        user:{
            type: userType,
            args: {id:{type: GraphQLString}},
            resolve(parent, args){
             //we resolve with data
             // get and return data from a datasource
            }
        }
    }
});

module.exports =  new GraphQLSchema({
    query: RootQuery
})