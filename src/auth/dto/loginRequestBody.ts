import { IsEmail, IsNotEmpty } from 'class-validator';

export class LoginRequestBody {
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  senha: string;
}
