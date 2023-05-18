/***** Note: Database connection file *****/

import mongoose from "mongoose";

const connectMongoDb = async () => {

    try {
        let response = await mongoose.connect(
            process.env.MONGO_DB_URL,
            {
                dbName: "next-db"
            }
        );

        response && console.log("Mongo DB Connected successfully!");
    }

    catch (error) {
        console.log(`Something went wrong while connecting to Mongo DB: ${error}`);
    };
};

export default connectMongoDb;