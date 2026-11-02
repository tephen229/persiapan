import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomersController } from './customers.controller.js';
import { CustomersService } from './costumers.service.js'; // Menyesuaikan nama file costumers.service.ts di sidebar
import { Customer } from './entities/customer.entities.js';
import { CustomerAddress } from './entities/cust_address.entities.js';

@Module({
  imports: [TypeOrmModule.forFeature([Customer, CustomerAddress])],
  controllers: [CustomersController],
  providers: [CustomersService],
  exports: [TypeOrmModule, CustomersService],
})
export class CustomersModule {}