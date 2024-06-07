import { Comentarios } from "src/comments/entities/comment.entity"
export class User {
    id: string;
    email: string;
    nome?: string;
    departamento: string;
    curso: string;
    fotoPerfil?: string;
    createdAt: Date;
    updatedAt?: Date;
    comentarios: Comentarios[];
}