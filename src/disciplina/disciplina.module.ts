import { Module } from '@nestjs/common';
import { DisciplinaService } from './disciplina.service';
import { DisciplinaController } from './disciplina.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [DisciplinaController],
  providers: [PrismaService,DisciplinaService],
})
export class DisciplinaModule {}
