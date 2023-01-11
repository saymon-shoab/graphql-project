const graphql = require('graphql')
var _ = require('lodash');
// dummy data
var userData =[
    {id: '1', name: 'surovi', age:21, profession: 'vloger'},
    {id: '13', name: 'sadia', age:28, profession: 'namazi'},
    {id: '211', name: 'sushmita', age:19, profession: 'business'},
    {id: '19', name: 'odhori', age:15, profession: 'barovatari'},
    {id: '150', name: 'Shoab', age:23, profession: 'Programmer'}
];
// hobbi dummy data..
var hobbiesData =[
    {id: '1', tittle:'Programming',description:'build new Project'},
    {id: '2', tittle:'Rowing',description:'sweet and feel better when I eat food'},
    {id: '3', tittle:'Swiming',description:'get in the water and learn to become the water'},
    {id: '4', tittle:'Fencing',description:'A hobby for fency people'},
    {id: '5', tittle:'Hiking',description:'wear hiking boots and explore'},
];
// Post dummy data
var postsData =[
    {id: '1', comment: 'Building a HRMS Software..',userId:'1'},
    {id: '2', comment: 'Graphql is awasome',userId:'13'},
    {id: '3', comment: 'How to Change the economi',userId:'211'},
    {id: '4', comment: 'hi sushmita..',userId:'19'},
    {id: '5', comment: 'hi subria bente surovi..',userId:'150'},
];
const { GraphQLObjectType, GraphQLString,GraphQLID, GraphQLInt, GraphQLSchema } = graphql;

// user type
const UserType = new GraphQLObjectType({
    name: "User",
    discription: 'documantation for user.....',
    fields: () => ({
        id: {type: GraphQLID},
        name: {type: GraphQLString},
        age: {type: GraphQLInt},
        profession: {type: GraphQLString}
    })
})
// hobby type
const HobbyType = new GraphQLObjectType({
    name: 'Hobby',
    description: 'Hobby description...',
    fields: ()=> ({
        id: {type: GraphQLID},
        tittle: {type:GraphQLString},
        description: {type: GraphQLString}
    })
})
// post type
const PostType = new GraphQLObjectType({
    name: 'Post',
    description: 'Post description',
    fields: ()=> ({
        id: {type: GraphQLID},
        comment: {type:GraphQLString},
        user:{
            type: UserType,
            resolve(parent,args){
                return _.find(userData,{id:parent.userID})
            }
        }
    })
})

//root query
const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    description:'description',
    fields:{
        user:{
            type: UserType,
            args: {id:{type: GraphQLString}},
            resolve(parent, args){
                return _.find(userData,{id: args.id});
             //we resolve with data
             // get and return data from a datasource
            }
        },
        hobby: {
            type: HobbyType,
            args: {id:{type: GraphQLID}},
            resolve(parent, args){
                // return data for our hobby,
                return _.find(hobbiesData,{id: args.id})
            }
        },
        post :{
            type: PostType,
            args: {id:{type:GraphQLID}},
            resolve(parent,args){
                return _.find(postsData,{id:args.id})
            }
        }
    }
});

module.exports =  new GraphQLSchema({
    query: RootQuery
})