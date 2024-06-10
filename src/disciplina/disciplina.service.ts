import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateDisciplinaDto } from './dto/create-disciplina.dto';
import { UpdateDisciplinaDto } from './dto/update-disciplina.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class DisciplinaService {
  constructor (private prismaService: PrismaService){}
  async create(createDisciplinaDto: CreateDisciplinaDto) {
    return await this.prismaService.disciplina.create( {
      data: createDisciplinaDto,
    });
  }

  async findAll() {
    return await this.prismaService.disciplina.findMany();
  }

  async findOne(id: number) {
    const ValidarID = await this.prismaService.disciplina.findUnique({
      where: { id }
    })
    if(!ValidarID){
      throw new NotFoundException("Usuario Invalido");
    }
    return  await this.prismaService.disciplina.findUnique({
      where: { id }
    }) ;
  }

  async update(id: number, updateDisciplinaDto: UpdateDisciplinaDto) {
    const ValidarID = await this.prismaService.disciplina.findUnique({
      where: { id }
    })
    if(!ValidarID){
      throw new NotFoundException("Usuario Invalido");
    }
    return await this.prismaService.disciplina.update({
      where: { id },
      data: updateDisciplinaDto
    });
  }

  async remove(id: number) {
    const ValidarID = await this.prismaService.disciplina.findUnique({
      where: { id }
    })
    if(!ValidarID){
      throw new NotFoundException("Usuario Invalido");
    }
    return await this.prismaService.disciplina.delete({
      where: { id }
    });
  }
}
