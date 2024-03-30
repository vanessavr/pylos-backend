import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { ValidationPipe } from '@nestjs/common'
import cookieParser from 'cookie-parser'
import express from 'express'
import { join } from 'path'

process.env.TZ = 'America/Bogota'
const port = process.env.PORT || 3000
console.log(`Launching NestJS app on port ${port}, URL: http://0.0.0.0:${port}`)

async function bootstrap() {
    const app = await NestFactory.create(AppModule)

    const config = new DocumentBuilder().addBearerAuth().setTitle('Pylos').setDescription('Pylos').setVersion('1.0').addTag('pylos').build()
    const document = SwaggerModule.createDocument(app, config)
    SwaggerModule.setup('api', app, document)

    app.useGlobalPipes(new ValidationPipe())

    // Enable CORS
    app.enableCors({
        origin: process.env.NEXTJS_PUBLIC_URL,
        credentials: true,
    })

    app.use('/uploads', express.static(join(__dirname, '..', 'uploads')))

    app.use(cookieParser())

    await app.listen(port)
}

bootstrap()
