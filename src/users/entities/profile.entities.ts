import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('profile')
export class Profile{
    @PrimaryGeneratedColumn('uuid')
    id:string;

    @Column({type:"varchar", nullable:true})
    bio:string;

    @Column({type:'varchar', nullable:true})
    phoneNumber:string;

    @CreateDateColumn({type:'datetime'})
    createAt:Date;

    @UpdateDateColumn({type:'datetime'})
    updateAt:Date;
}