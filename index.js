const hapi = require("hapi")

const mockMovie = require('./mock_movie')

// Create a server with a host and port
const server = new hapi.Server();
server.connection({ host: 'localhost', port: 8000 });

// Add the route
server.route({
    method: 'GET',
    path:'/movie/{id}', 
    handler: function (request, reply) {
        console.log(request.params.id)
        reply(mockMovie);
    }
});

// Start the server
server.start((err) => {

    if (err) {
        throw err;
    }
    console.log('Server running at:', server.info.uri);
});

server.route({
    method: 'GET',
    path: '/',
    handler: function (request, reply) {reply('Hello, world!'); }
});
