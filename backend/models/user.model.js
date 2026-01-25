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

export async function getUserInfo({ userId }) {
    return await getDB().collection('users').findOne({ userId });
}