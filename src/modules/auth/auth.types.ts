import { UserRole } from "../user/user.types.js";

export interface RegisterUser {
    name: string;
    email: string;
    password: string;
    role: UserRole;
    department: string;
}