const express = require('express');
const connectDB = require('./config/db');
const app = express();

// connect database
connectDB();

// init middleware
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ msg: 'Welcome to the ContactKeeper API...' });
});

// define router
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/contacts', require('./routes/contacts'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
