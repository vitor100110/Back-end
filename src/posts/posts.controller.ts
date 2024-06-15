import { Controller, Get, Post, Body, Patch, Param, Delete, UnauthorizedException } from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { UserPayload } from 'src/auth/types/UserPayload';
import { CurrentUser } from 'src/auth/decorators/current-user.deciratirs';
import { Public } from 'src/auth/decorators/isPublic.decorators';

@Controller('post')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Post()
  create(@Body() createPostDto: CreatePostDto, @CurrentUser() currentUser: UserPayload) {
    if (createPostDto.usuarioID !== currentUser.sub) {
      throw new UnauthorizedException('Só é possível criar posts para si mesmo');
    }

    return this.postsService.create(createPostDto);
  }

  @Public()
  @Get()
  findAll() {
    return this.postsService.findAll();
  }

  @Public()
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.postsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePostDto: UpdatePostDto, @CurrentUser() currentUser: UserPayload) {
    if (updatePostDto.usuarioID !== currentUser.sub) {
      throw new UnauthorizedException('Só é possível mudar os seus posts');
    }
    return this.postsService.update(+id, updatePostDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string, @CurrentUser() currentUser: UserPayload) {
    const User = await this.postsService.findOne(+id);
    if (User.usuarioID !== currentUser.sub) {
      throw new UnauthorizedException('Só é possível criar posts para si mesmo');
    }
    return this.postsService.remove(+id);
  }
}