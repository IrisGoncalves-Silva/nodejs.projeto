import {IsString, IsNotEmpty, IsPhoneNumber, MinLength, IsEmail} from 'class-validator';

export class RegisterUserDTO {

    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;

    @MinLength(6)
    @IsNotEmpty()
    password:string;

    @IsNotEmpty()
    @IsString()
    site:string;

    @IsPhoneNumber()
    phone:number;



}