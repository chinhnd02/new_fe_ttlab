export interface User {
    name?: string;
    password?: string;
    email?: string;
    birthday?: Date;
    phone?: number;
    avatar?: File | null;
    roles?: string;
}