import { Controller, Post, Body, HttpCode, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Public } from '@prisma/client/runtime/library';
import { LoginRequestBody } from './dto/loginRequestBody';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}
    @HttpCode(HttpStatus.OK)
    @Post('login')
    login(@Body() LoginRequest : LoginRequestBody) {
      return this.authService.login(LoginRequest);
    }
}
