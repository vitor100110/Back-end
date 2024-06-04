import { IsEmail, IsInt, IsString } from "class-validator";

export class CreateUserDto {
    @IsInt()
     id: number;
     @IsEmail()
     email: string;
     @IsString()
     name?: string;

}