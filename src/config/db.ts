import mysql from 'mysql2/promise';
require('dotenv').config(); // Import and load environment variables from .env file

// Function to establish a database connection
export const connectDB = async () => {
    try {
        const connection = await mysql.createConnection({
            host: 'localhost',
            user: process.env.USER_MYSQL,
            database: process.env.DATABASE_MYSQL
        });
        return connection;
    } catch (error) {
        throw error;
    }
};
