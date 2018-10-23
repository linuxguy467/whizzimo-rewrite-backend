const mongoose = require('mongoose');

const connectToDatabase = () => {
    mongoose.connect(process.env.WHIZZIMODEV_MONGO_URI);

    mongoose.connection.on('error', console.error.bind(console, 'connection error:'));
    mongoose.connection.on('open', () => {
        console.log('Connected!');
    });
}

const disconnectFromDatabase = () => {
    mongoose.disconnect();
}

module.exports = {
    connectToDatabase,
    disconnectFromDatabase
}