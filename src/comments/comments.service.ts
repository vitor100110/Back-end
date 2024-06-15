import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class CommentsService {
  constructor(private prismaService: PrismaService) {}
  async create(createCommentDto: CreateCommentDto) {
    return await this.prismaService.comentarios.create({
      data: createCommentDto,
    });
  }

  async findAll() {
    return await this.prismaService.comentarios.findMany();
  }

  async findOne(id: number) {
    const ValidarId = await this.prismaService.comentarios.findUnique({
      where: { id },
    });
    if (!ValidarId) {
      throw new NotFoundException('Usuario Invalido');
    }
    return this.prismaService.comentarios.findUnique({
      where: { id },
    });
  }

  async update(id: number, updateCommentDto: UpdateCommentDto) {
    const ValidarId = await this.prismaService.comentarios.findUnique({
      where: { id },
    });
    if (!ValidarId) {
      throw new NotFoundException('Usuario Invalido');
    }
    return await this.prismaService.comentarios.update({
      where: { id },
      data: updateCommentDto,
    });
  }

  async remove(id: number) {
    const ValidarId = await this.prismaService.comentarios.findUnique({
      where: { id },
    });
    if (!ValidarId) {
      throw new NotFoundException('Usuario invalido');
    }
    return await this.prismaService.comentarios.delete({
      where: { id },
    });
  }
}
