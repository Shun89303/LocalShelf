import express from 'express';
import { client, connectDB } from './configs/mongodb.js';
import { initModels } from './models/index.js';
import errorHandler from './middlewares/errorHandler.js';
import router from './routers/index.js';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

try {
    await connectDB();
    initModels(client.db('localShelf'));
} catch (error) {
    console.error("Server startup aborted", error);
    process.exit(1);
}

const PORT = process.env.PORT || 3000;
const app = express();
app.use(cors({
    origin: process.env.CLIENT_ORIGIN,
    credentials: true
}))
app.use(express.json());
app.use('/uploads', express.static('uploads'));

app.use('/api', router);
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
})