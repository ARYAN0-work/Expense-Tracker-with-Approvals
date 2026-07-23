export interface RegisterUserDTO {
    name: string;
    email: string;
    password: string;
    role: "employee" | "manager" | "finance";
    department: string;
}