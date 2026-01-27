import express from 'express';
import { client, connectDB } from './configs/mongodb.js';
import { initModels } from './models/index.js';
import errorHandler from './middlewares/errorHandler.js';
import router from './routers/index.js';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

await connectDB();
initModels(client.db('localShelf'));

const PORT = process.env.PORT || 3000;
const app = express();
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}))
app.use(express.json());
app.use('/uploads', express.static('uploads'));

app.use('/api', router);
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
})