import { IsEmpty, IsInt, IsNotEmpty, IsOptional, IsString, MinLength } from "class-validator";

export class CreateProfessorDto {
    @IsString({message: " O nome do professor e invalido"})
    @IsEmpty( {message: " O do professor nao pode ser vazio"})
    nome: string;

    @IsString({message: " O nome do professor e invalido"})
    @IsEmpty( {message: " O do professor nao pode ser vazio"})
    departamento: string;


}

