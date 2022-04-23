import { IsEmail, IsNotEmpty, Length, Matches } from 'class-validator'

export class LoginUserDto {
    @IsEmail()
    @Length(1, 30)
    @IsNotEmpty()
    email: string

    @Length(8, 30)
    @IsNotEmpty()
    @Matches("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@$!%*?&-_])[A-Za-z0-9@$!%*?&-_]{8,30}$") // prettier-ignore
    password: string
}
