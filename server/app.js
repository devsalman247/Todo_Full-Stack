const express = require('express'),
      app = express(),
      cors = require('cors'),
      router = require('./routes'),
      mongoose = require('mongoose'),
      PORT = process.env.PORT || 3000;
      
mongoose.connect('mongodb://127.0.0.1:27017/todo', () => {
    console.log("Connected to database successfully.");
});

app.use(express.json());
app.options('*', cors());
app.use(cors());
app.use(router);

app.listen(PORT, () => {
    console.log(`Listening at port ${PORT}.`);
})