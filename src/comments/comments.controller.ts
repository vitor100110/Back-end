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
import { CommentsService } from './comments.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { CurrentUser } from 'src/auth/decorators/current-user.deciratirs';
import { UserPayload } from 'src/auth/types/UserPayload';
import { Public } from 'src/auth/decorators/isPublic.decorators';
import { UsersService } from 'src/users/users.service';

@Controller('comments')
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) {}

  @Post()
  async create(@Body() createCommentDto: CreateCommentDto, @CurrentUser() currentUser: UserPayload) {
    if (createCommentDto.usuarioID !== currentUser.sub) {
      throw new UnauthorizedException('Voce só pode criar seus comentarios.');
    } {
    return await this.commentsService.create(createCommentDto);
    }
  }
  @Public()
  @Get()
  async findAll() {
    return await this.commentsService.findAll();
  }

  @Public()
  @Get(':id')
  async findOne(@Param('id') id: number) {
    return await this.commentsService.findOne(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: number, @Body() updateCommentDto: UpdateCommentDto, @CurrentUser() currentUser: UserPayload) {
    if (updateCommentDto.usuarioID !== currentUser.sub) {
      throw new UnauthorizedException('Voce só pode criar seus comentarios.');
    } {
    return await this.commentsService.update(+id, updateCommentDto);
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: number, @CurrentUser() currentUser: UserPayload, usersService: UsersService) {
    const User = await this.commentsService.findOne(+id);
    if (User.usuarioID !== currentUser.sub) {
      throw new UnauthorizedException('Voce só pode criar seus comentarios.');
    }
    {
    return await this.commentsService.remove(+id);
    }
  }
}
