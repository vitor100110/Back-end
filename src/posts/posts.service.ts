import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class PostsService {
  constructor(private prismaService: PrismaService) {}
  async create(createPostDto: CreatePostDto) {
    return await this.prismaService.post.create({
      data: createPostDto,
    });
  }

  async findAll() {
    return await this.prismaService.post.findMany();
  }

  async findOne(id: number) {
    const ValidarId = await this.prismaService.post.findUnique({
      where: { id },
    });
    if (!ValidarId) {
      throw new NotFoundException('Usuario Invalido');
    }
    return await this.prismaService.post.findUnique({
      where: { id },
    });
  }

  async update(id: number, updatePostDto: UpdatePostDto) {
    const ValidarId = await this.prismaService.post.findUnique({
      where: { id },
    });
    if (!ValidarId) {
      throw new NotFoundException('Usuario Invalido');
    }
    return await this.prismaService.post.update({
      where: { id },
      data: updatePostDto,
    });
  }

  async remove(id: number) {
    const ValidarId = await this.prismaService.post.findUnique({
      where: { id },
    });
    if (!ValidarId) {
      throw new NotFoundException('Usuario Invalido');
    }
    return await this.prismaService.post.delete({
      where: { id },
    });
  }
}
