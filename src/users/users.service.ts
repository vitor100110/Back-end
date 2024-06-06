import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaClient } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prismaService: PrismaService) {

  }
  async create(createUserDto: CreateUserDto) {
    return await this.prismaService.user.create({
      data: createUserDto,
    });
  }

  async findAll() {
    return await this.prismaService.user.findMany();
  }

  async findOne(id: string) {
    const ValidarId = await this.prismaService.user.findUnique({
      where: { id }
    });
    if(ValidarId){
      throw new NotFoundException ("Usuario Invalido")
    }
    return await this.prismaService.user.findUnique({ where: { id }});
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const ValidarId = await this.prismaService.user.findUnique({
      where: { id },
    });
    if(ValidarId){
      throw new NotFoundException ("Usuario Invalido")
    }
    return await this.prismaService.user.update({ 
      where: { id },
      data: updateUserDto,
    });
  }

  async remove(id: string) {
    const ValidarId = await this.prismaService.user.findUnique({
      where: { id }
    });
    if(ValidarId){
      throw new NotFoundException ("Usuario Invalido")
    }
    return await this.prismaService.user.delete({ 
      where: { id }});
  }
}
