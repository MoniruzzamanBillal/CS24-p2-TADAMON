const mongoose = require("mongoose");

// const url = `${process.env.MONGODB_URI}/${process.env.DB_NAME}`;
const url = `mongodb+srv://EcoSync:2zVekajrzQGBaD1n@cluster0.wng5cg8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

const connectDb = () => {
  mongoose
    .connect(url)
    .then(() => console.log("Connected to DB!"))
    .catch((err) => console.error("Error connecting to DB!", err));
};

module.exports = { connectDb };
