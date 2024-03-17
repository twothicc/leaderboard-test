import { Injectable } from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';

@Injectable()
export class StudentService {
    constructor(@InjectDataSource("student") private readonly dataSource: DataSource) { }

    async getHello(): Promise<string> {
        const queryRunner = this.dataSource.createQueryRunner();
        await queryRunner.connect();
        const result = await queryRunner.query("SELECT 'Hello Student!'");
        await queryRunner.release();
        return String(Object.values(result[0])[0]);
    }

    async run(script: string): Promise<string> {
        const queryRunner = this.dataSource.createQueryRunner();
        await queryRunner.connect();
        const result = await queryRunner.query(script);
        await queryRunner.release();
        return JSON.stringify(result);
    }

    async submit(questionId: number, script: string): Promise<string> {
        const queryRunner = this.dataSource.createQueryRunner();
        await queryRunner.connect();
        const result = await queryRunner.query(script);
        await queryRunner.release();
        console.log(result);
        return String(result);
    }
}