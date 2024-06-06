import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { IsEmail, isEmail, IsInt, IsString } from 'class-validator';

export class UpdateUserDto extends PartialType(CreateUserDto) {}
