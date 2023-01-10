const corsOptions = {
    origin: "http://localhost:3000",
    methods: 'GET,POST', //GET,HEAD,PUT,PATCH,POST,DELETE
    preflightContinue: false,
    allowedHeaders: ['Content-Type', 'Authorization'],
    exposedHeaders: ['Content-Type'],
    credentials: true
}
module.exports = corsOptions;