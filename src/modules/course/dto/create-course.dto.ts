import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsDate, IsDateString, IsEnum, IsJSON, IsNotEmpty, IsNumber, IsOptional, IsPositive, IsString } from "class-validator";
import { CourseStatus } from "prisma/generated/enums";

export class CreateCourseDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsNumber()
    @IsPositive()
    @ApiProperty()
    price: number;

    @IsDateString()
    @ApiProperty()
    startDate: Date;

    @IsDateString()
    @ApiProperty()
    endDate: Date;

    @IsJSON()
    @ApiProperty()
    description: JSON;

    @IsEnum(CourseStatus)
    @ApiProperty()
    status: CourseStatus;

    @IsBoolean()
    @ApiProperty()
    registrationOpen: boolean;

    @IsNumber()
    @IsOptional()
    @ApiProperty()
    certificateTemplateid?: number;
}
