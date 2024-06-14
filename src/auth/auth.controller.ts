import { Controller,
   Post, 
   Body, 
   HttpCode, 
   HttpStatus, 
   UseGuards, 
   Get,
   Request
 
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginRequestBody } from './dto/loginRequestBody';
import { AuthGuard } from '@nestjs/passport';
import { Public } from './decorators/isPublic.decorators';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}
    @Public()
    @HttpCode(HttpStatus.OK)
    @Post('login')
    login(@Body() LoginRequest : LoginRequestBody) {
      return this.authService.login(LoginRequest);
    }

  @Get('re')
  getProfile(@Request() req){
    return req.user;
  }
}
