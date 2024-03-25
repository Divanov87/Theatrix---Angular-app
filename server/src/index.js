const express = require('express');
const { SERVER_NAME, PORT } = require('./configs/envVariables');
const routes = require('./routes');
const { initDatabases } = require('./configs/initDatabases');
const { authHandler } = require('./middlewares/authMiddleware');
const cors = require("cors");
const cookieParser = require('cookie-parser');


const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/', express.static('public'));
app.use(cookieParser());
app.use(authHandler);
app.use(routes);

initDatabases()
    .then(() => {
        app.listen(PORT, () => console.log(`Server [${SERVER_NAME}] is listening @ http://127.0.0.1:${PORT}.. `));
    })
    .catch(err => console.error('Error Establishing a Database Connection!', err));