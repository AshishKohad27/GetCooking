import { ReturnAuthTS, ResponseSignup } from "@/constant/auth";
import { SignUpController } from "@/controller/auth";
import { NextApiRequest, NextApiResponse } from "next";

export default function SignupRoute(
    req: NextApiRequest,
    res: NextApiResponse<ResponseSignup>
) {
    if (req.method === "POST") {
        const { name, email, password } = req.body;

        const { statusCode, flag, message, desc }: ReturnAuthTS = SignUpController({ name, email, password });
        if (flag) {
            return res.status(statusCode).send({ message, desc });
        } else {
            return res.status(statusCode).send({ message, desc });
        }
    }
}
