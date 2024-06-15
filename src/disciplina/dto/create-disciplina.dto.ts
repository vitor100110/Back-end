import { IsInt, IsNotEmpty, IsString } from "class-validator";

export class CreateDisciplinaDto {
    @IsString({message: " O nome da disciplina e invalido"})
    @IsNotEmpty( {message: " o Campo disciplina nao pode ser vazio"})
    nome: string;

    @IsNotEmpty( {message: " o Campo disciplina nao pode ser vazio"})
    @IsInt( {message:"error id professor"})
    professorID: number;
}
