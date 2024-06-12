import { IsEmail, IsNotEmpty } from "class-validator";

export class LoginRequestBody {

    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @IsEmail()
    senha: string;
}
