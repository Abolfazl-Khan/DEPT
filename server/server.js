const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const clientsRouter = require('./routes/clients');
const categoriesRouter = require('./routes/categories');
const industriesRouter = require('./routes/industries');
const portfoliosRouter = require('./routes/portfolios');


const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(helmet({
  crossOriginResourcePolicy: false,
}));

app.use(express.static(__dirname + '/public'));

app.use('/api/clients', clientsRouter);
app.use('/api/categories', categoriesRouter);
app.use('/api/industries', industriesRouter);
app.use('/api/portfolios', portfoliosRouter);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});

