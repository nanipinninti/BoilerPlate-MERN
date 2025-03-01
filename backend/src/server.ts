import http from 'http';
import app from './app';
import connectDB from './config/db';
import { config } from 'dotenv';

config()
const PORT = process.env.PORT || 5000;

const server = http.createServer(app);

server.listen(PORT, () => {
    connectDB()
    console.log(`Server running on port ${PORT}`);
});