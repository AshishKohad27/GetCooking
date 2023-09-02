import { connectDB } from "@/config/db";
import { QueryMySql } from "@/config/query";
import { initialStateTS } from "@/constant/auth";
import mysql from "mysql2/promise";

export const LoginController = ({ email, password }: initialStateTS) => {
    return {
        flag: true,
        statusCode: 201,
        message: "Login Successfully!",
        desc: "You are now logged into our platform.",
        accessToken: "accessToken",
        refreshToken: "refreshToken",
    };
};

export const SignUpController = ({ name, email, password }: initialStateTS) => {
    return {
        flag: true,
        statusCode: 201,
        message: "Sign Up Successfully!",
        desc: "Your account has been created successfully. Welcome to our platform!",
    };
};

export const AuthPatchController = ({
    name,
    email,
    password,
}: initialStateTS) => {
    return {
        flag: true,
        statusCode: 201,
        message: "Sign Up Successfully!",
        desc: "Your account has been created successfully. Welcome to our platform!",
    };
};

export const AuthDeleteController = () => {
    return {
        flag: true,
        statusCode: 201,
        message: "Sign Up Successfully!",
        desc: "Your account has been created successfully. Welcome to our platform!",
    };
};

export const AuthGetController = async () => {
    let query = "SELECT * FROM unique_cats WHERE cat_ix = ?";
    const valuesParams: any = [1];
    let data = await QueryMySql({ query, values: valuesParams });

    if (Array.isArray(data)) {
        return {
            flag: true,
            statusCode: 201,
            message: "Getting All Users From QueryMySql",
            desc: {
                dataLength: +data.length,
            },
            data,
        };
    } else {
        return {
            flag: false,
            statusCode: 403,
            message: "Error Occured",
            desc: data,
        };
    }
};
