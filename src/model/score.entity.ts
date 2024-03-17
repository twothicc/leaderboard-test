import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, RelationOptions, Unique } from 'typeorm';
import { Student } from './student.entity';
import { Question } from './question.entity';

@Entity({ name: 'admin.score' })
@Unique(['sid', 'qid'])
export class Score {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Student, student => student.id, { nullable: false, eager: false, cascade: false })
    sid: number;

    @ManyToOne(() => Question, question => question.id, { nullable: false, eager: false, cascade: false })
    qid: number;

    @Column('numeric', { name: "planning_time", nullable: false })
    planningTime: number;

    @Column('numeric', { name: "execution_time", nullable: false })
    executionTime: number;
}