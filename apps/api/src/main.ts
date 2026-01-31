import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable CORS for frontend (supports both local and production)
  const clientUrl = process.env.CLIENT_URL || 'http://localhost:3000';
  app.enableCors({
    origin: [
      clientUrl,
      'http://localhost:3000',
      'https://ecommerce-vibe-website-client.vercel.app'
    ],
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  });

  await app.listen(process.env.PORT ?? 4000);
  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
