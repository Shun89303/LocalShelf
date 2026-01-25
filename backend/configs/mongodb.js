import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';
dotenv.config();

export const client = new MongoClient(process.env.MONGODB_URI);

export async function connectDB() {
    try {
        await client.connect();
        console.log("Successful DB connection")
    } catch (error) {
        console.error("Failed DB connection")
        throw error;
    }
}