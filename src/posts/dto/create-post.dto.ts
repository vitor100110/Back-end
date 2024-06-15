import { IsInt, IsNotEmpty, IsString, MinLength } from "class-validator";

export class CreatePostDto {
    @IsString({message: " O ID do usuario invalido"})
    @IsNotEmpty( {message: " O ID do usuario nao pode ser vazio"})
    usuarioID: string;

    @IsInt( {message:"O ID do professor precisa ser um Numero"})
    @IsNotEmpty( {message: "O ID do professor nao pode ser vazio"})
    professorID: number;

    @IsInt( {message:"O ID da disciplina precisa ser um Numero"})
    @IsNotEmpty( {message: "O ID da disciplina nao pode ser vazio"})
    disciplinaID: number;

    @IsString( {message: "Conteudo invalido"})
    @IsNotEmpty( {message: "A senha nao pode ser vazio."})
    @MinLength(5, {message: "O Comentario deve possuir 5 ou mais caracteres."})
    conteudo: string;
}
