import { PartialType } from "@nestjs/mapped-types";
import { IsEmail, IsEmpty, IsNotEmpty, IsOptional, IsString, MinLength } from "class-validator";

export class CreateUserDto {
    @IsEmail({}, {message: "O email está inválido."})
    @IsNotEmpty( {message: "O email não pode ser vazio."})
    email: string;

    @IsString( {message: "Senha inválido."})
    @IsNotEmpty( {message: "A senha não pode ser vazio."})
    @MinLength(8, {message: "A senha deve possuir 8 ou mais caracteres."})
    senha: string;

    @IsOptional()
    @IsString( {message: "O nome deve ser uma string."})
    nome: string;

    @IsString()
    @IsEmpty()
    departamento: string;

    @IsString()
    @IsEmpty()
    curso: string;

    @IsOptional()
    @IsString( {message: "O nome deve ser uma string."})
    fotoPerfil: string;
}