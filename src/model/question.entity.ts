import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'admin.question' })
export class Question {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  description: string;

  @Column('text')
  answer: string;
}