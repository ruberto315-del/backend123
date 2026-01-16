import { Module } from '@nestjs/common';
import { CoreController } from './core.controller';
import { CoreService } from './core.service';
import { ConfigModule } from '@nestjs/config';
import { CourseModule } from 'src/modules/course/course.module';
import { RegistrationModule } from 'src/modules/registration/registration.module';
import { CertificateTemplateModule } from 'src/modules/certificate-template/certificate-template.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    CourseModule,
    RegistrationModule,
    CertificateTemplateModule,
    PrismaModule
  ],
  controllers: [CoreController],
  providers: [CoreService],
})
export class CoreModule {}
