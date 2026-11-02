import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BanksController } from './banks.controller.js';
import { BanksService } from './banks.service.js';
import { Bank } from './entities/banks.entity.js';

@Module({
  imports: [TypeOrmModule.forFeature([Bank])],
  controllers: [BanksController],
  providers: [BanksService],
  exports: [TypeOrmModule, BanksService],
})
export class BanksModule {}