import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

export class CreateRegistrationDto {
    @ApiProperty()
    @IsString()
    userId: string;

    @ApiProperty()
    @IsNumber()
    courseId: number;
}

