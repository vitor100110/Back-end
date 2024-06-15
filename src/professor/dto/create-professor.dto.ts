import { IsNotEmpty, IsString} from "class-validator";

export class CreateProfessorDto {
    @IsNotEmpty( {message: " O nome do professor nao pode ser vazio"})
    @IsString({message: " O nome do professor e invalido"})
    nome: string;

    @IsNotEmpty( {message: " O do professor nao pode ser vazio"})
    @IsString({message: " O nome do professor e invalido"})
    departamento: string;


}

