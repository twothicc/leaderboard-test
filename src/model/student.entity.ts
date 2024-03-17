import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'admin.student' })
export class Student {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  name: string;
}