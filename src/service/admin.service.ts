import { Injectable } from '@nestjs/common';
import { InjectDataSource, InjectRepository } from '@nestjs/typeorm';
import { Question } from 'src/model/question.entity';
import { Score } from 'src/model/score.entity';
import { Student } from 'src/model/student.entity';
import { DataSource, Repository } from 'typeorm';

@Injectable()
export class AdminService {
    constructor(
        @InjectDataSource("admin") private readonly dataSource: DataSource,
        @InjectRepository(Question, "admin") private readonly questionRepository: Repository<Question>,
        @InjectRepository(Score, "admin") private readonly scoreRepository: Repository<Score>,
        @InjectRepository(Student, "admin") private readonly studentRepository: Repository<Student>
    ) { }

    async getHello(): Promise<string> {
        const queryRunner = this.dataSource.createQueryRunner();
        await queryRunner.connect();
        const result = await queryRunner.query("SELECT 'Hello Admin!'");
        await queryRunner.release();
        return String(Object.values(result[0])[0]);
    }

    async registerStudent(name: string): Promise<Student> {
        return await this.studentRepository.save({ name });
    }

    async getAllStudents(): Promise<Student[]> {
        return await this.studentRepository.find();
    }

    async setup(script: string): Promise<void> {
        const queryRunner = this.dataSource.createQueryRunner();
        await queryRunner.connect();
        const result = await queryRunner.query(script);
        await queryRunner.release();
    }

    async createQuestion(description: string, answer: string): Promise<Question> {
        return await this.questionRepository.save({ description, answer });
    }

    async createScore(studentId: number, questionId: number, planningTime: number, executionTime: number): Promise<Score> {
        return await this.scoreRepository.save({ sid: studentId, qid: questionId, planningTime, executionTime });
    }
}