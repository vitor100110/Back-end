import { IsInt, IsNotEmpty, IsString, MinLength } from "class-validator";

export class CreateCommentDto {
    @IsString({message: " O ID do usuario invalido"})
    @IsNotEmpty( {message: " O ID do usuario nao pode ser vazio"})
    usuarioID: string;

    @IsInt( {message: "O ID da avaliacao precisa ser um Numero"})
    @IsNotEmpty( {message: "O ID da avaliacao nao pode ser vazio"})
    avaliacaoID: number;

    @IsString( {message: "Conteudo invalido"})
    @IsNotEmpty( {message: "A senha nao pode ser vazio."})
    @MinLength(5, {message: "O Comentario deve possuir 5 ou mais caracteres."})
    conteudo: string;

}
