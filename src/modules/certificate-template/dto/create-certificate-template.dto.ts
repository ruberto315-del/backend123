import { ApiProperty } from "@nestjs/swagger";
import { type InputJsonValue } from "@prisma/client/runtime/client";
import { IsBoolean, IsJSON, IsString } from "class-validator";

export class CreateCertificateTemplateDto {
  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsString()
  templateUrl: string;

  @ApiProperty()
  @IsJSON()
  namePosition: InputJsonValue;

  @ApiProperty()
  @IsJSON()
  courseNamePosition: InputJsonValue;

  @ApiProperty()
  @IsJSON()
  courseDatePosition: InputJsonValue;

  @ApiProperty()
  @IsJSON()
  certificateNumberPosition: InputJsonValue;

  @ApiProperty()
  @IsBoolean()
  isGlobal: boolean;
}
