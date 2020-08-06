import express from 'express';
import routes from './src/routes/crmRoutes';
import mongoose from 'mongoose';
import bodyParser from 'body-Parser';

const app = express();
const PORT = 4000;

//mongoose connection

// wait for a result when connection
mongoose.Promise = global.Promise;

//create connection on the localhost create DB
mongoose.connect('mongodb://localhost/CRMdb', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

//bodyparser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


routes(app);

//serve static files from public
app.use(express.static( 'public' ));

app.get('/', (req, res) =>
  res.send(`Node and express server running on ${PORT}`)
);

app.listen(PORT, () =>
  console.log(`Your server is running on on ${PORT}`)
);


//Other tools to check out
//koajs.com - es6 - generators instead of callbacks
//swagger.io - pre-built api's
//loopback.io - api generator - backend server with endpoints - several cli commands
//jwt.io - security features for API's
