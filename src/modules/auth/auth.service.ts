import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import User from "../user/user.model.js";
import config from "../../config/env.js";

import { RegisterUser } from "./auth.types.js";

export const registerUser = async (data: RegisterUser) => {

    const existingUser = await User.findOne({
        email: data.email,
    });

    if (existingUser) {
        throw new Error("Email already exists");
    }

    const hashedPassword = await bcrypt.hash(data.password, 10);

    const user = await User.create({
        ...data,
        password: hashedPassword,
    });

    const token = jwt.sign({
            id: user._id,
            role: user.role,
        },

        config.jwtSecret,{
            expiresIn: "7d", 
        }
    );

    return {
        token,
        user,
    };
};