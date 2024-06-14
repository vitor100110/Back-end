import { Controller, Get, Post, Body, Patch, Param, Delete, UnauthorizedException } from '@nestjs/common';
import { DisciplinaService } from './disciplina.service';
import { CreateDisciplinaDto } from './dto/create-disciplina.dto';
import { UpdateDisciplinaDto } from './dto/update-disciplina.dto';
import { ProfessorService } from 'src/professor/professor.service';
import { CurrentUser } from 'src/auth/decorators/current-user.deciratirs';
import { UserPayload } from 'src/auth/types/UserPayload';
import { Public } from 'src/auth/decorators/isPublic.decorators';

@Controller('disciplina')
export class DisciplinaController {
  constructor(private readonly disciplinaService: DisciplinaService) {}

  @Post()
  create(@Body() createDisciplinaDto: CreateDisciplinaDto) {
    return this.disciplinaService.create(createDisciplinaDto);
  }

  @Public()
  @Get()
  findAll() {
    return this.disciplinaService.findAll();
  }

  @Public()
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.disciplinaService.findOne(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: number, @Body() updateDisciplinaDto: UpdateDisciplinaDto) {
    return this.disciplinaService.update(+id, updateDisciplinaDto);

  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    return this.disciplinaService.remove(+id);
  }
}
