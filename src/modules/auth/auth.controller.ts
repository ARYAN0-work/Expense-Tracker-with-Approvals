import { Request, Response } from "express";
import { registerUser } from "./auth.service.js";

export const register = async (
    req: Request,
    res: Response
)=> {
    const result = await registerUser(req.body);

    res.status(201).json(result);
};