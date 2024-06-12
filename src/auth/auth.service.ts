import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma.service';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt';
import { LoginRequestBody } from './dto/loginRequestBody';
import { UserToken } from './types/UserToken';
import { UserPayload } from './types/UserPayload';


@Injectable()
export class AuthService {
  constructor(private readonly userService: UsersService,
    private readonly prismaService: PrismaService,
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService){}

    async login (loginRequest : LoginRequestBody): Promise<UserToken>{
      const user = await this.ValidarUser(loginRequest.email, loginRequest.senha);
      if(!user){
        throw new UnauthorizedException("Invalido")
      }
      
      const payload: UserPayload = {email: user.email, sub: user.id}
      const jwtToken = this.jwtService.sign(payload, { expiresIn: '1d',
        secret: this.configService.get('JWT_SECRET')});
      return {
          access_token: jwtToken,
      };
    }


    async ValidarUser(email: string, senha: string)
    {

      const user = await this.userService.findByEmail(email);
      if(user)
      {
        const ValidarPassword = await bcrypt.compare(senha, user.senha);
        if(ValidarPassword)
        {
          return {
            ...user,
          senha: undefined
          };
        }
      }
      return null;
    }
}
