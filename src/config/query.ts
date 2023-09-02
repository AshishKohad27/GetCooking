import mysql from 'mysql2/promise';
require('dotenv').config();

type QueryValue = {
    query: any,
    values: any
}

export const QueryMySql = async ({ query, values = [] }: QueryValue) => {

    try {
        // Connection with db
        const connection = await mysql.createConnection({
            host: 'localhost',
            user: process.env.USER_MYSQL,
            database: process.env.DATABASE_MYSQL
        });

        // Explicitly specify the type as 'mysql2/promise' Connection
        const [result]: any = await connection.execute(query, values);

        // Close the connection when done
        await connection.end();
        console.log("Result--------------->", result)
        // Return Result
        return result;

    } catch (error: any) {
        console.log("error------------------>:", error)
        // throw Error(error.message);
        return error;
    }
}