import { 
  Controller, 
  Get, 
  Post, 
  Body, 
  Param, 
  Patch, 
  Delete, 
  ParseUUIDPipe 
} from '@nestjs/common';
import { BanksService } from './banks.service.js';
import { Bank } from './entities/banks.entity.js';

@Controller('banks')
export class BanksController {
  constructor(private readonly banksService: BanksService) {}

  @Post()
  create(@Body() createBankDto: { name: string }): Promise<Bank> {
    return this.banksService.create(createBankDto);
  }

  @Get()
  findAll(): Promise<Bank[]> {
    return this.banksService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string): Promise<Bank> {
    return this.banksService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateBankDto: { name?: string },
  ): Promise<Bank> {
    return this.banksService.update(id, updateBankDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseUUIDPipe) id: string): Promise<void> {
    return this.banksService.remove(id);
  }
}