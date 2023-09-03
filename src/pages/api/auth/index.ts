
import { connectDB } from "@/config/db";
import { ReturnAuthTS, ResponseSignup } from "@/constant/auth";
import { AuthDeleteController, AuthPatchController, SignUpController, AuthGetController } from "@/controller/auth";
import { NextApiRequest, NextApiResponse } from "next";
import mysql from 'mysql2/promise';
import { QueryMySql } from "@/config/query";



export default async function SignupRoute(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === "GET") {
        let query = "SELECT * FROM unique_cats WHERE cat_id = ?";
        const valuesParams: any = [1];
        let data = await QueryMySql({ query, values: valuesParams });

        if (Array.isArray(data)) {
            return res.status(201).send({
                flag: true,
                statusCode: 201,
                message: "Getting All Users From QueryMySql",
                desc: {
                    dataLength: +data.length,
                },
                data,
            });
        } else {
            return res.status(403).send({
                flag: false,
                statusCode: 403,
                message: "Error Occured",
                desc: data,
            });
        }
    }
    // else if (req.method === "DELETE") {
    //     const { userId } = req.query;

    //     const { statusCode, flag, message, desc }: ReturnAuthTS = AuthDeleteController();
    //     if (flag) {
    //         return res.status(statusCode).send({ message, desc });
    //     } else {
    //         return res.status(statusCode).send({ message, desc });
    //     }
    // } else if (req.method === "PATCH") {
    //     const { userId: string } = req.query;

    //     const { name, email, password } = req.body;

    //     const { statusCode, flag, message, desc }: ReturnAuthTS = AuthPatchController({ name, email, password });
    //     if (flag) {
    //         return res.status(statusCode).send({ message, desc });
    //     } else {
    //         return res.status(statusCode).send({ message, desc });
    //     }
    // }
    // const connectDB = await mysql.createConnection({
    //     host: 'localhost',
    //     user: process.env.USER_MYSQL,       // Access environment variables like properties
    //     database: process.env.DATABASE_MYSQL
    // });


    // if (req.method === 'GET') {
    //     try {
    //         let query = 'SELECT * FROM cats';
    //         const values: any = [];

    //         // Explicitly specify the type as 'mysql2/promise' Connection
    //         const connection: mysql.Connection = await connectDB();

    //         const [result]: any = await connection.execute(query, values);

    //         // Close the connection when done
    //         await connection.end();

    //         res.status(200).json({ message: "Get All Cats", result });
    //     } catch (error: any) {
    //         res.status(500).json({ message: error.message });
    //     }
    // }
}


