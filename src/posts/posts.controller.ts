import { Controller, Get, Post, Body, Patch, Param, Delete, UnauthorizedException } from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { UserPayload } from 'src/auth/types/UserPayload';
import { CurrentUser } from 'src/auth/decorators/current-user.deciratirs';

@Controller('post')
export class PostController {
  constructor(private readonly postsService: PostsService) {}

  @Post()
  async create(@Body() createPostDto: CreatePostDto, @CurrentUser() currentUser: UserPayload) {
    if (createPostDto.usuarioID !== currentUser.sub) {
      throw new UnauthorizedException('Só é possível criar posts para si mesmo');
    }
    return this.postsService.create(createPostDto);
  }

  @Get()
  async findAll() {
    return this.postsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return this.postsService.findOne(id);
  }

  @Patch(':id')
  async update(@Param('id') id: number, @Body() updatePostDto: UpdatePostDto, @CurrentUser() currentUser: UserPayload) {
    const post = await this.postsService.findOne(id);
    if (post.usuarioID !== currentUser.sub) {
      throw new UnauthorizedException('Você só pode atualizar seus próprios posts');
    }
    return this.postsService.update(id, updatePostDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: number, @CurrentUser() currentUser: UserPayload) {
    const post = await this.postsService.findOne(id);
    if (post.usuarioID !== currentUser.sub) {
      throw new UnauthorizedException('Você só pode deletar seus próprios posts');
    }
    return this.postsService.remove(id);
  }
}