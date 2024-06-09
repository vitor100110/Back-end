import { IsEmpty, IsString } from "class-validator";

export class CreateDisciplinaDto {
    @IsString({message: " O nome da disciplina e invalido"})
    @IsEmpty( {message: " o Campo disciplina nao pode ser vazio"})
    nome: string;
}
