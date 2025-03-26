require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const connectDB = require('./config/database');
const apiRoutes = require('./routes/api');

const app = express();
connectDB();

//middleware 
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

// routes
app.use('/api' , apiRoutes)

const PORT = process.env.PORT || 3000;

app.listen(PORT , ()=>{
    console.log('server running on port ${PORT}');
}
);

/* dotenv.config() → Loads environment variables from a .env file (used for storing secrets like database credentials).

express → The web framework for handling HTTP requests.

cors → Middleware to allow Cross-Origin Resource Sharing, useful when frontend and backend are on different domains.

morgan → Middleware for logging HTTP requests (useful for debugging and monitoring).

connectDB → Function to connect to a MongoDB database (defined in a separate file: ./config/database).

apiRoutes → Handles API route definitions, located in ./routes/api.js.


app.use(cors()) → Allows cross-origin requests.

app.use(morgan('dev')) → Logs incoming requests in a concise format (dev mode logs method, status, response time).

app.use(express.json()) → Parses incoming JSON payloads, allowing Express to handle POST and PUT requests.
All routes inside apiRoutes (defined in ./routes/api.js) are prefixed with /api.

Example:

If apiRoutes has router.get('/users', ...), the full endpoint will be http://localhost:3000/api/users.

process.env.PORT → Reads the port from .env file (useful for production deployments like Heroku).

Defaults to port 3000 if no environment variable is set.

app.listen(PORT, callback) → Starts the server and logs the running p

#const app = express();
This line initializes an Express application and assigns it to the app variable.

Breakdown:
express() creates an instance of an Express server.

This app object will be used to:

Define routes (e.g., app.get('/', (req, res) => {...})).

Apply middleware (e.g., app.use(cors())).

Start the server (e.g., app.listen(PORT, () => {...})).
*/