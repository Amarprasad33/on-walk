const mongoose = require("mongoose");

module.exports = (dbName) => {
    mongoose.set("strictQuery", true);

    // Replace <db_username>, <db_password>, and <db_name> with your actual credentials and desired database name
    const uri = 'mongodb+srv://commonuser:D0QrXZkOBKAHWmrq@cluster0.weshkot.mongodb.net/?retryWrites=true&w=majority';
    mongoose.connect(uri, {  dbName: dbName })
        .then(() => {
            console.log(`Connected to database: ${dbName}`);
        })
        .catch((err) => {
            console.error('Database connection error:', err);
        });
};
