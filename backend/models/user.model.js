import { ObjectId } from "mongodb";
let db;

export function setDB(database) {
    if (!database || typeof database.collection !== 'function') {
        throw new Error("Invalid database instance provided");
    }
    db = database;
}

function getDB() {
    if (!db) {
        throw new Error("Database not initialized");
    }
    return db;
}

export async function createUser({username, phone, password}) {
    return await getDB().collection('users').insertOne({username, phone, password});
}

export async function findUser({phone}) {
    return await getDB().collection('users').findOne({phone});
}

export async function getUserInfo(userId) {
    return await getDB().collection('users').findOne({ _id: new ObjectId(userId) });
}

export async function uploadImage({ owner, name, price, phone, images }) {
    return await getDB().collection('images').insertOne({ owner, name, price, phone, images });
}

export async function getUserImages({owner}) {
    return await getDB().collection('images').find({owner}).toArray();
}

export async function getImages() {
    return await getDB().collection('images').find().toArray();
}