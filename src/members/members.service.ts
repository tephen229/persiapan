import { Injectable } from '@nestjs/common';
import { Member } from './entities/member.entity.js';

@Injectable()
export class MembersService {
      private members: Member[] = [
        {
          id: 1,
            name: 'John Doe',
            email: 'john.doe@example.com',
            password: 'password123',
        }
      ];
    
    
        // Menampilkan semua anggota
        findAll(): Member[] {
          return this.members;
        }
      
        // Menampilkan anggota berdasarkan ID
        findById(id: number): Member | undefined {
          return this.members.find((member) => member.id === id);
        }

        // Menambahkan anggota baru
        create(dto: any): Member {
          const newMember: Member = {
            id: this.members.length + 1,
            name: dto.name,
            email: dto.email,
            password: dto.password,
          };
          this.members.push(newMember);
          return newMember;
        }

        // Mengupdate anggota berdasarkan ID
        update(id: number, dto: any): Member | undefined {
          const memberIndex = this.members.findIndex((member) => member.id === id);
          if (memberIndex === -1) {
            return undefined;
          }
          this.members[memberIndex] = { ...this.members[memberIndex], ...dto };
          return this.members[memberIndex];
        }

        // Menghapus anggota berdasarkan ID
        delete(id: number): boolean {
          const memberIndex = this.members.findIndex((member) => member.id === id);
          if (memberIndex === -1) {
            return false;
          }
          this.members.splice(memberIndex, 1);
          return true;
        }
}
