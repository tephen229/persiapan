import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Bank } from './entities/banks.entity.js';

@Injectable()
export class BanksService {
  constructor(
    @InjectRepository(Bank)
    private readonly bankRepository: Repository<Bank>,
  ) {}

  async create(createBankDto: { name: string }): Promise<Bank> {
    const bank = this.bankRepository.create(createBankDto);
    return await this.bankRepository.save(bank);
  }

  async findAll(): Promise<Bank[]> {
    return await this.bankRepository.find();
  }

  async findOne(id: string): Promise<Bank> {
    const bank = await this.bankRepository.findOneBy({ id });
    if (!bank) {
      throw new NotFoundException(`Bank dengan ID "${id}" tidak ditemukan`);
    }
    return bank;
  }

  async update(id: string, updateBankDto: { name?: string }): Promise<Bank> {
    const bank = await this.findOne(id);
    Object.assign(bank, updateBankDto);
    return await this.bankRepository.save(bank);
  }

  async remove(id: string): Promise<void> {
    const bank = await this.findOne(id);
    await this.bankRepository.remove(bank);
  }
}