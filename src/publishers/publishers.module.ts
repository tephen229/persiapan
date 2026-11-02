import { Module } from '@nestjs/common';
import { PublishersController } from './publishers.controller.js';

@Module({
  controllers: [PublishersController]
})
export class PublishersModule {}
