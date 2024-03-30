import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty } from 'class-validator'

export class CreateMascotaDto {
    id: string

    @ApiProperty()
    @IsNotEmpty()
    mascota: string

    @ApiProperty()
    @IsNotEmpty()
    foto: string
}
