export class UserPayload {

    sub: string;
    email: string;
    iat?: number; // quando token foi criado
    exp?: number; // quando token for expirado
}