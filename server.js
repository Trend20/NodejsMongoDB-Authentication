const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

const corsOptions={
    origin: 'https://localhost:8081',
};

