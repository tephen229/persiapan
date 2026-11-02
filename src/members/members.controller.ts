import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { MembersService } from './members.service.js';
import { UpdateMembersDto } from './dto/update-members-dto.js';
import { CreateMembersDto } from './dto/create-members-dto.js';

@Controller('members')
export class MembersController {

  constructor(private readonly membersService: MembersService) {}

  @Get()
  findall() {
    return this.membersService.findAll();
  }

  @Get('/:id')
  findById(@Param('id') id: string) {
    return this.membersService.findById(parseInt(id));
  }

  @Post()
  create(@Body() createMembersDto: CreateMembersDto) {
    return this.membersService.create(createMembersDto);
  }

  @Patch('/:id')
  update(@Param('id') id: string, @Body() updateMembersDto: UpdateMembersDto) {
    return this.membersService.update(parseInt(id), updateMembersDto);
  }

  @Delete('/:id')
  delete(@Param('id') id: string) {
    return this.membersService.delete(parseInt(id));
  }

}
