import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UnauthorizedException,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { CurrentUser } from 'src/auth/decorators/current-user.deciratirs';
import { UserPayload } from 'src/auth/types/UserPayload';
import { Public } from 'src/auth/decorators/isPublic.decorators';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  
  @Public()
  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    return await this.usersService.create(createUserDto);
  }
  
  @Public()
  @Get()
  async findAll() {
    return await this.usersService.findAll();
  }

  @Public()
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.usersService.findOne(id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto, @CurrentUser() currentUser: UserPayload) {
    if (id !== currentUser.sub) {
      throw new UnauthorizedException('Nao e possivel alterar outro usuario');
    } {
    return await this.usersService.update(id, updateUserDto);
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string, @CurrentUser() currentUser: UserPayload) {
    if (id !== currentUser.sub) {
      throw new UnauthorizedException('Nao e possivel deletar outro usuario');
    } {
    return await this.usersService.remove(id);
    }
  }
}
