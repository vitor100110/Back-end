import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProfessorDto } from './dto/create-professor.dto';
import { UpdateProfessorDto } from './dto/update-professor.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class ProfessorService {
    constructor (private prismaService: PrismaService){}
  async create(createProfessorDto: CreateProfessorDto) {
    return await this.prismaService.professor.create( {
      data: createProfessorDto,
    });
  }
  async findAll() {
    return await this.prismaService.professor.findMany();
  }

  async findOne(id: number) {
    const ValidarId = await this.prismaService.professor.findUnique( {
      where: { id },
    });
    if(ValidarId){
      throw new NotFoundException("Usuario Invalido")
    }
    return await this.prismaService.professor.findUnique( {
      where: { id },
    });
  }

  async update(id: number, updateProfessorDto: UpdateProfessorDto) {
    const ValidarId = await this.prismaService.professor.findUnique( {
      where: { id },
    });
    if(ValidarId){
      throw new NotFoundException("Usuario Invalido")
    }
    return await this.prismaService.professor.update( {
      where: { id },
      data: updateProfessorDto,
    });
  }

  async remove(id: number) {
    const ValidarId = await this.prismaService.professor.findUnique( {
      where: { id },
    });
    if(ValidarId){
      throw new NotFoundException("Usuario Invalido")
    }
    return await this.prismaService.professor.delete( {
      where: { id }
    });
  }
}
