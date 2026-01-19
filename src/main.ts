import { NestFactory } from '@nestjs/core';
import { CoreModule } from './core/core.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';


async function bootstrap() {

  const app = await NestFactory.create(CoreModule);
  app.useGlobalPipes(new ValidationPipe());

  app.enableCors({ origin: true, credentials: true });
  
  const config = new DocumentBuilder()
    .setTitle('dostawa API')
    .setDescription('Dostawa api documentation')
    .setVersion('1.0')
    .addTag('cats')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger', app, documentFactory);

  const PORT = process.env.PORT || 7777;

  try {
    await app.listen(PORT);
    console.log(`🚀 Server is running at port: ${PORT}`);
  } catch (error: any) {
    console.error(`❌ Failed to start server: ${error.message}`, error);
    process.exit(1);
  }
}
bootstrap();
