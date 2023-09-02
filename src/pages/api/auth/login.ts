import { ReturnLoginTS, ResponseLogin } from "@/constant/auth";
import { LoginController } from "@/controller/auth";
import { NextApiRequest, NextApiResponse } from "next";

export default function login(
    req: NextApiRequest,
    res: NextApiResponse<ResponseLogin>
) {
    if (req.method === "POST") {
        const { email, password } = req.body;
        const { statusCode, flag, message, desc, accessToken, refreshToken }: ReturnLoginTS = LoginController({ email, password });

        if (flag) {
            return res.status(statusCode).send({ message, desc, accessToken, refreshToken });
        } else {
            return res.status(statusCode).send({ message, desc, accessToken, refreshToken });
        }
    }
}