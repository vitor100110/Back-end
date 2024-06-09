import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { CommentsModule } from './comments/comments.module';
import { PostsModule } from './posts/posts.module';
import { ProfessorModule } from './professor/professor.module';

@Module({
  imports: [UsersModule, CommentsModule, PostsModule, ProfessorModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
