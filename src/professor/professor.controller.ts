import { Controller, Get, Post, Body, Patch, Param, Delete, UnauthorizedException } from '@nestjs/common';
import { ProfessorService } from './professor.service';
import { CreateProfessorDto } from './dto/create-professor.dto';
import { UpdateProfessorDto } from './dto/update-professor.dto';
import { Public } from 'src/auth/decorators/isPublic.decorators';
import { CurrentUser } from 'src/auth/decorators/current-user.deciratirs';
import { UserPayload } from 'src/auth/types/UserPayload';

@Controller('professor')
export class ProfessorController {
  constructor(private readonly professorService: ProfessorService) {}


  @Post()
  async create(@Body() createProfessorDto: CreateProfessorDto) {
    return await this.professorService.create(createProfessorDto);
  }
  @Public()
  @Get()
  async findAll() {
    return await this.professorService.findAll();
  }
  @Public()
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.professorService.findOne(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateProfessorDto: UpdateProfessorDto){
    return await this.professorService.update(+id, updateProfessorDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string, @CurrentUser() currentUser: UserPayload) {
    if ( id !== currentUser.sub) {
      throw new UnauthorizedException('Voce não pode deletar o professor(a).');
    } {
    return await this.professorService.remove(+id);
    }
  }
}
